'use client';

/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
  events as createPointerEvents,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";
import { ModelLoadingIndicator } from "./ModelLoadingIndicator.jsx";

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const deg2rad = (d) => (d * Math.PI) / 180;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

// altura “normalizada” alvo do mob (world units)
const TARGET_HEIGHT = 1.3;
// margem extra pra câmera não cortar o modelo
const FRAME_MARGIN = 1.5;

const Loader = ({ placeholderSrc }) => {
  const { active } = useProgress();
  if (!active && placeholderSrc) return null;

  return (
    <Html center>
      <ModelLoadingIndicator size="sm" />
    </Html>
  );
};

const DesktopControls = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  autoFrame,
  cameraStyle,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()?.toLowerCase(), [url]);

  /**
   * Load raw scene for current URL. We keep this hook very
   * small to avoid accumulating transforms when switching
   * between different models.
   */
  const rawScene = useMemo(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene;
    if (ext === "fbx") return useFBX(url);
    if (ext === "obj") return useLoader(OBJLoader, url);
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  /**
   * Clone per-instance so each ModelInner has its own
   * transform state and we don't re-use transforms
   * between entity switches.
   */
  const content = useMemo(() => {
    if (!rawScene) return null;
    return rawScene.clone();
  }, [rawScene]);

  const pivotW = useRef(new THREE.Vector3());

  useLayoutEffect(() => {
    if (!content || !inner.current || !outer.current) return;

    // reset any previous outer transforms when URL changes
    outer.current.position.set(0, 0, 0);
    outer.current.rotation.set(0, 0, 0);

    const g = inner.current;

    // garante que não acumulamos transform se o efeito rodar de novo
    g.position.set(0, 0.1, 0);
    g.rotation.set(0, 0.2, 0);
    g.scale.set(1, 1, 1);

    g.rotation.z = Math.PI;
    g.updateWorldMatrix(true, true);

    const box = new THREE.Box3().setFromObject(g);

    if (box.isEmpty()) {
      console.warn("Bounding box is empty for model:", url);
      return;
    }

    const size = box.getSize(new THREE.Vector3());
    const height = size.y || 1;

    // normaliza pela altura (mobs altos ficam proporcionalmente menores)
    const scale = TARGET_HEIGHT / height;
    g.scale.setScalar(scale);
    g.updateWorldMatrix(true, true);

    // recalcula box depois da escala
    box.setFromObject(g);
    const centerScaled = box.getCenter(new THREE.Vector3());

    // queremos:
    // - centro em X/Z = 0
    // - base (min.y) exatamente em groundY
    const groundY = -0.5;
    const offsetX = -centerScaled.x;
    const offsetZ = -centerScaled.z;
    const offsetY = groundY - box.min.y;

    g.position.set(offsetX, offsetY, offsetZ);

    // sombras / fade-in
    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.updateWorldMatrix(true, true);

    // centro em world space (depois de tudo alinhado)
    const worldBox = new THREE.Box3().setFromObject(g);
    const worldCenter = worldBox.getCenter(new THREE.Vector3());
    const worldSize = worldBox.getSize(new THREE.Vector3());

    pivotW.current.copy(worldCenter);
    pivot.copy(worldCenter);

    // orientação inicial
    if (cameraStyle === "minecraft") {
      outer.current.rotation.set(0, Math.PI, 0);
    } else {
      outer.current.rotation.set(initPitch, initYaw, 0);
    }

    // auto enquadramento da câmera em função do modelo
    if (autoFrame && camera.isPerspectiveCamera) {
      const persp = camera;
      const fovRad = THREE.MathUtils.degToRad(persp.fov);
      const aspect = persp.aspect || 1;

      // garante margem em altura e largura
      const fitHeight = worldSize.y * FRAME_MARGIN;
      const fitWidth = Math.max(worldSize.x, worldSize.z) * FRAME_MARGIN;

      const distForHeight = fitHeight / 2 / Math.tan(fovRad / 2);

      const hFovRad = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
      const distForWidth = fitWidth / 2 / Math.tan(hFovRad / 2);

      let distance = Math.max(distForHeight, distForWidth);

      // respeita limites de zoom
      distance = Math.min(Math.max(distance, minZoom), maxZoom);

      if (cameraStyle === "minecraft") {
        const eyeHeight = worldSize.y * 0.6;
        const eye = new THREE.Vector3(0, eyeHeight, distance);

        persp.position.copy(worldCenter).add(eye);
        persp.lookAt(
          worldCenter.x,
          worldCenter.y + eyeHeight * 0.1,
          worldCenter.z,
        );
      } else {
        persp.position.set(
          worldCenter.x,
          worldCenter.y + worldSize.y * 0.1,
          worldCenter.z + distance,
        );
        persp.lookAt(worldCenter);
      }

      persp.near = distance / 10;
      persp.far = distance * 10;
      persp.updateProjectionMatrix();
      invalidate();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded && onLoaded();
        }
      }, 16);
      return () => clearInterval(id);
    } else {
      onLoaded && onLoaded();
    }
  }, [
    content,
    camera,
    pivot,
    initYaw,
    initPitch,
    autoFrame,
    cameraStyle,
    fadeIn,
    minZoom,
    maxZoom,
    url,
    onLoaded,
  ]);

  // Interação de rotação com mouse
  useEffect(() => {
    if (!enableManualRotation || isTouch || !outer.current) return;
    const el = gl?.domElement;
    if (!el) return;
    let drag = false;
    let lx = 0;
    let ly = 0;

    const down = (e) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };

    const move = (e) => {
      if (!drag || !outer.current) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;

      if (cameraStyle === "minecraft") {
        outer.current.rotation.y += dx * ROTATE_SPEED;
        vel.current.x = dx * ROTATE_SPEED;
      } else {
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      }

      invalidate();
    };

    const up = () => {
      drag = false;
      window.removeEventListener("pointerup", up);
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);

    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation, cameraStyle]);

  // Mouse move para parallax + hover tilt
  useEffect(() => {
    if (isTouch) return;
    const mm = (e) => {
      if (e.pointerType !== "mouse") return;

      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      if (enableMouseParallax && cameraStyle !== "minecraft") {
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      }
      if (enableHoverRotation) {
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      }
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation, cameraStyle]);

  // Animação por frame (inércia, auto-rotate, parallax)
  useFrame((_, dt) => {
    if (!outer.current || !camera) return;

    // Modo "minecraft": simples, mob fixo no pivot
    if (cameraStyle === "minecraft") {
      outer.current.position.copy(pivotW.current);

      outer.current.rotation.y += vel.current.x;
      vel.current.x *= INERTIA;

      if (autoRotate) {
        outer.current.rotation.y += autoRotateSpeed * dt;
      }

      invalidate();
      return;
    }

    // Modo padrão: parallax + hover tilt
    let need = false;

    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;

    const prevHx = cHov.current.x;
    const prevHy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - prevHx;
    outer.current.rotation.y += cHov.current.y - prevHy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;

    if (
      Math.abs(vel.current.x) > 1e-4 ||
      Math.abs(vel.current.y) > 1e-4 ||
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    ) {
      need = true;
    }

    if (need) invalidate();
  });

  if (!content) return null;

  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -35,
  defaultRotationY = -15,
  defaultZoom = 1.25,
  minZoomDistance = 0.6,
  maxZoomDistance = 4,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = true,
  cameraStyle = "minecraft",
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);

  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef(null);
  const eventSourceRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  // Guard event wiring so R3F doesn't crash if the event target isn't ready yet
  const safeEvents = useMemo(() => {
    const factory = createPointerEvents;
    return (store) => {
      const api = factory(store);
      const originalConnect = api.connect;
      api.connect = (target) => {
        const resolvedTarget =
          target ||
          eventSourceRef.current ||
          store.getState().gl?.domElement ||
          null;
        if (!resolvedTarget) return;
        originalConnect(resolvedTarget);
      };
      return api;
    };
  }, []);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance,
  );

  const capture = () => {
    const g = rendererRef.current;
    const s = sceneRef.current;
    const c = cameraRef.current;
    if (!g || !s || !c) return;

    g.shadowMap.enabled = false;
    const tmp = [];
    s.traverse((o) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;

    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();

    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  const fov = cameraStyle === "minecraft" ? 35 : 50;

  return (
    <div
      ref={eventSourceRef}
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
        position: "relative",
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: "absolute",
            border: "1px solid #fff",
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 10,
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        events={safeEvents}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment files={"/venice_sunset_1k.hdr"} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            autoFrame={autoFrame}
            cameraStyle={cameraStyle}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export { ModelViewer };
