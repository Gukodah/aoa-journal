import * as THREE from "three";

const DEFAULT_TEX_WIDTH = 64;
const DEFAULT_TEX_HEIGHT = 32;

const toNumber = (value) =>
  typeof value === "number" ? value : parseFloat(value ?? 0);

const normalizeUV = (value, size) => value / (size || 1);

const buildFaceUVs = (rect, texWidth, texHeight) => {
  const [u1, v1, u2, v2] = rect;
  return [
    [normalizeUV(u2, texWidth), normalizeUV(v1, texHeight)],
    [normalizeUV(u1, texWidth), normalizeUV(v1, texHeight)],
    [normalizeUV(u1, texWidth), normalizeUV(v2, texHeight)],
    [normalizeUV(u2, texWidth), normalizeUV(v2, texHeight)],
  ];
};

export function createMinecraftBoxGeometry(
  cube = {},
  textureOffset = [0, 0],
  textureWidth = DEFAULT_TEX_WIDTH,
  textureHeight = DEFAULT_TEX_HEIGHT,
  mirror = false,
) {
  const [offsetU = 0, offsetV = 0] = textureOffset;
  const [fromX = 0, fromY = 0, fromZ = 0] = cube.from || [0, 0, 0];
  const [sizeX = 0, sizeY = 0, sizeZ = 0] = cube.size || [0, 0, 0];
  const inflate = toNumber(cube.inflate || 0);

  let minX = fromX - inflate;
  let minY = fromY - inflate;
  let minZ = fromZ - inflate;
  let maxX = fromX + sizeX + inflate;
  let maxY = fromY + sizeY + inflate;
  let maxZ = fromZ + sizeZ + inflate;

  if (mirror) {
    const temp = maxX;
    maxX = minX;
    minX = temp;
  }

  const corners = [
    [minX, minY, minZ],
    [maxX, minY, minZ],
    [maxX, maxY, minZ],
    [minX, maxY, minZ],
    [minX, minY, maxZ],
    [maxX, minY, maxZ],
    [maxX, maxY, maxZ],
    [minX, maxY, maxZ],
  ];

  const faces = [
    {
      verts: [5, 1, 2, 6],
      uv: [
        offsetU + sizeZ + sizeX,
        offsetV + sizeZ,
        offsetU + sizeZ + sizeX + sizeZ,
        offsetV + sizeZ + sizeY,
      ],
    },
    {
      verts: [0, 4, 7, 3],
      uv: [offsetU, offsetV + sizeZ, offsetU + sizeZ, offsetV + sizeZ + sizeY],
    },
    {
      verts: [5, 4, 0, 1],
      uv: [offsetU + sizeZ, offsetV, offsetU + sizeZ + sizeX, offsetV + sizeZ],
    },
    {
      verts: [2, 3, 7, 6],
      uv: [
        offsetU + sizeZ + sizeX,
        offsetV + sizeZ,
        offsetU + sizeZ + sizeX + sizeX,
        offsetV,
      ],
    },
    {
      verts: [1, 0, 3, 2],
      uv: [
        offsetU + sizeZ,
        offsetV + sizeZ,
        offsetU + sizeZ + sizeX,
        offsetV + sizeZ + sizeY,
      ],
    },
    {
      verts: [4, 5, 6, 7],
      uv: [
        offsetU + sizeZ + sizeX + sizeZ,
        offsetV + sizeZ,
        offsetU + sizeZ + sizeX + sizeZ + sizeX,
        offsetV + sizeZ + sizeY,
      ],
    },
  ];

  const positions = [];
  const uvs = [];
  const indices = [];
  let cursor = 0;

  faces.forEach(({ verts, uv }) => {
    const faceVerts = mirror ? [...verts].reverse() : verts;
    const faceUvs = mirror
      ? buildFaceUVs(uv, textureWidth, textureHeight).reverse()
      : buildFaceUVs(uv, textureWidth, textureHeight);

    faceVerts.forEach((cornerIndex, idx) => {
      const [x, y, z] = corners[cornerIndex];
      positions.push(x, y, z);
      const [u, v] = faceUvs[idx];
      uvs.push(u, v);
    });

    indices.push(cursor, cursor + 1, cursor + 2, cursor, cursor + 2, cursor + 3);
    cursor += 4;
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  return geometry;
}
