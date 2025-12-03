"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSignIn, useSignUp, useUser } from "@clerk/nextjs";

const providers = [
  {
    id: "google",
    label: "Google",
    helper: "Utilize a sua conta Google para acessar.",
    strategy: "oauth_google",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="auth-provider-svg">
        <path
          fill="#4285F4"
          d="M22 12.2c0-.68-.06-1.34-.17-1.98H12v3.75h5.6c-.24 1.22-.97 2.26-2.06 2.95v2.45h3.34C20.84 17.6 22 14.95 22 12.2Z"
        />
        <path
          fill="#34A853"
          d="M12 24c2.82 0 5.18-.93 6.9-2.53l-3.34-2.45c-.92.62-2.1.99-3.56.99-2.74 0-5.06-1.85-5.89-4.35H2.64v2.73A11.99 11.99 0 0 0 12 24Z"
        />
        <path
          fill="#FBBC05"
          d="M6.11 15.66A7.19 7.19 0 0 1 5.73 14c0-.58.1-1.16.27-1.66V9.61H2.64A11.99 11.99 0 0 0 0 14c0 1.92.46 3.73 1.27 5.3l3.84-2.73Z"
        />
        <path
          fill="#EA4335"
          d="M12 4.8c1.53 0 2.9.52 3.98 1.55l2.98-2.98A11.95 11.95 0 0 0 12 0C7.45 0 3.48 2.64 1.27 6.7l3.84 2.72C6.94 6.65 9.26 4.8 12 4.8Z"
        />
      </svg>
    ),
  },
  {
    id: "twitch",
    label: "Twitch",
    helper: "Entre com sua conta Twitch.",
    strategy: "oauth_twitch",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="auth-provider-svg">
        <path
          fill="#9146FF"
          d="M4 3h17v12l-5 5h-4l-3 3v-3H4V3Zm2 2v10h4v3l3-3h4V5H6Zm7 2h2v5h-2V7Zm-4 0h2v5H9V7Z"
        />
      </svg>
    ),
  },
  {
    id: "apple",
    label: "Apple",
    helper: "Use seu Apple ID sem formularios.",
    strategy: "oauth_apple",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="auth-provider-svg">
        <path
          fill="currentColor"
          d="M16.7 1.6c-.97.07-2.08.67-2.77 1.48-.6.7-1.12 1.82-.92 2.9 1.06.04 2.12-.6 2.79-1.43.64-.8 1.12-1.92.9-2.95ZM20.83 17.33c-.58 1.35-.87 1.98-1.63 3.2-1.06 1.74-2.55 3.9-4.39 3.94-1.63.04-2.15-1.03-4.49-1.02-2.35.01-2.91 1.05-4.56 1.07-1.85.02-3.26-1.89-4.33-3.61C-0.05 17.19.19 12.85 1.64 10.56c1.05-1.62 2.73-2.58 4.3-2.58 1.69 0 2.75.87 4.14.87 1.36 0 2.19-.88 4.12-.88 1.48 0 3.04.8 4.08 2.18-3.57 1.95-2.99 7.16-.1 9.08Z"
        />
      </svg>
    ),
  },
];

const INTENT_KEY = "aoa_auth_intent";

const AuthPageContent = () => {
  const router = useRouter();
  const { isLoaded: userLoaded, isSignedIn } = useUser();
  const searchParams = useSearchParams();
  const modeFromQuery =
    searchParams.get("mode") === "signup" ? "signup" : "signin";

  const [mode, setMode] = useState(modeFromQuery);
  const [activeProvider, setActiveProvider] = useState(null);
  const [status, setStatus] = useState(null);
  const [dialog, setDialog] = useState(null);

  const { isLoaded: signInLoaded, signIn } = useSignIn();
  const { isLoaded: signUpLoaded, signUp } = useSignUp();

  useEffect(() => {
    setMode(modeFromQuery);
  }, [modeFromQuery]);

  const isSignIn = mode === "signin";
  const ready = useMemo(
    () => signInLoaded && signUpLoaded,
    [signInLoaded, signUpLoaded],
  );

  const clearIntent = () => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(INTENT_KEY);
    } catch {
      // ignore storage errors
    }
  };

  useEffect(() => {
    if (!userLoaded) return;
    if (isSignedIn) {
      clearIntent();
      router.replace("/home");
      return;
    }

    try {
      const intent = typeof window !== "undefined"
        ? localStorage.getItem(INTENT_KEY)
        : null;
      if (!intent) return;
      clearIntent();
      if (intent === "signin") {
        setMode("signup");
        setDialog({
          title: "Conta nao encontrada",
          body: "Nao achamos esse login. Crie uma conta para continuar.",
          primaryLabel: "Ir para criar conta",
          onPrimary: () => setDialog(null),
        });
      } else if (intent === "signup") {
        setMode("signin");
        setDialog({
          title: "Conta ja existe",
          body: "Use Entrar para esse provedor. Parece que voce ja registrou essa conta.",
          primaryLabel: "Ir para entrar",
          onPrimary: () => setDialog(null),
        });
        setActiveProvider(null);
      }
    } catch {
      // ignore storage errors
    }
  }, [userLoaded, isSignedIn, router]);

  const handleModeChange = (nextMode) => {
    if (nextMode === mode) return;
    setMode(nextMode);
  };

  const handleAuth = async (provider) => {
    if (!ready) {
      setStatus("Carregando autenticacao...");
      return;
    }

    const strategy = providers.find((p) => p.id === provider)?.strategy;
    if (!strategy) return;

    const redirectConfig = {
      strategy,
      redirectUrl: "/",
      redirectUrlComplete: "/home",
    };

    setStatus(null);
    setActiveProvider(provider);
    setDialog(null);

    try {
      localStorage.setItem(INTENT_KEY, isSignIn ? "signin" : "signup");
    } catch {
      // ignore storage issues
    }

    const tryRedirect = async (client, fallbackMode) => {
      try {
        await client.authenticateWithRedirect(redirectConfig);
      } catch (error) {
        const code = error?.errors?.[0]?.code;
        const message =
          error?.errors?.[0]?.longMessage ||
          error?.message ||
          "Nao foi possivel autenticar. Tente novamente.";

        if (fallbackMode === "signup") {
          if (
            code === "form_identifier_exists" ||
            code === "identifier_already_exists"
          ) {
            setMode("signin");
            setDialog({
              title: "Conta ja existe",
              body: "Use Entrar para esse provedor. Parece que voce ja registrou essa conta.",
              primaryLabel: "Ir para entrar",
              onPrimary: () => setDialog(null),
            });
            setActiveProvider(null);
            return;
          }
          setDialog({
            title: "Erro ao criar conta",
            body: message,
            primaryLabel: "Fechar",
            onPrimary: () => setDialog(null),
          });
          setActiveProvider(null);
          return;
        }

        if (
          code === "form_identifier_not_found" ||
          code === "user_not_found" ||
          code === "session_not_found"
        ) {
          setMode("signup");
          setDialog({
            title: "Conta nao encontrada",
            body: "Nao achamos esse login. Crie uma conta para continuar.",
            primaryLabel: "Ir para criar conta",
            onPrimary: () => setDialog(null),
          });
          return;
        }

        if (
          code === "form_identifier_exists" ||
          code === "identifier_already_exists"
        ) {
          setMode("signin");
          setDialog({
            title: "Conta ja existe",
            body: "Use Entrar para esse provedor. Parece que voce ja registrou essa conta.",
            primaryLabel: "Ir para entrar",
            onPrimary: () => setDialog(null),
          });
          setActiveProvider(null);
          return;
        }

        setDialog({
          title: "Nao foi possivel autenticar",
          body: message,
          primaryLabel: "Fechar",
          onPrimary: () => setDialog(null),
        });
        setActiveProvider(null);
      }
    };

    if (isSignIn) {
      await tryRedirect(signIn);
    } else {
      await tryRedirect(signUp, "signup");
    }
  };

  return (
    <section className="auth-screen">
      <div className="auth-backdrop" aria-hidden="true">
        <span className="auth-glow auth-glow-a" />
        <span className="auth-glow auth-glow-b" />
      </div>

      <div className="auth-layout">
        <div className="auth-copy-pane">
          <p className="auth-eyebrow">Nevermine Journal</p>
          <h1 className="auth-title">Acesse ou crie sua conta</h1>
          <p className="auth-lead">
            Diario completo do Nevermine 2 com progresso sincronizado e acesso
            rapido aos dados do jogo.
          </p>

          <div className="auth-points">
            <div className="auth-point">
              <span className="auth-dot" aria-hidden="true" />
              Marque dimensoes, chefes, inimigos e loot para acompanhar seu
              progresso.
            </div>
            <div className="auth-point">
              <span className="auth-dot" aria-hidden="true" />
              Favoritos e status ficam salvos na nuvem para voltar de qualquer
              dispositivo.
            </div>
            <div className="auth-point">
              <span className="auth-dot" aria-hidden="true" />
              Filtros e busca rapidos para achar drops, NPCs e recursos sem
              rolar telas.
            </div>
          </div>
        </div>

        <div className="auth-panel-shell">
          <div className="auth-panel-top">
            <div className="auth-switch">
              <button
                type="button"
                className={
                  isSignIn ? "auth-switch-btn active" : "auth-switch-btn"
                }
                onClick={() => handleModeChange("signin")}
              >
                Entrar
              </button>
              <button
                type="button"
                className={
                  !isSignIn ? "auth-switch-btn active" : "auth-switch-btn"
                }
                onClick={() => handleModeChange("signup")}
              >
                Criar conta
              </button>
            </div>
          </div>

          <div className="auth-panel card">
            <div className="auth-provider-stack">
              {providers.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  className={`auth-provider-btn auth-provider-${provider.id}`}
                  onClick={() => handleAuth(provider.id)}
                  disabled={!ready || activeProvider === provider.id}
                >
                  <span className="auth-provider-icon" aria-hidden="true">
                    {provider.icon}
                  </span>
                  <div className="auth-provider-copy">
                    <span className="auth-provider-label">
                      {isSignIn ? "Entrar com" : "Criar conta com"}{" "}
                      {provider.label}
                    </span>
                    <small>{provider.helper}</small>
                  </div>
                </button>
              ))}
            </div>

            <div className="auth-panel-footer">
              <span className="auth-chip">Seguro por Clerk</span>
              <p>
                Provedores sociais ativados. Nenhum campo de email ou senha
                necessario.
              </p>
            </div>

            {status && <p className="auth-status">{status}</p>}
          </div>
        </div>
      </div>
      {dialog && (
        <div className="auth-dialog" role="alertdialog" aria-live="assertive">
          <div className="auth-dialog-card card">
            <h3>{dialog.title}</h3>
            <p>{dialog.body}</p>
            <div className="auth-dialog-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  dialog.onPrimary?.();
                }}
              >
                {dialog.primaryLabel}
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setDialog(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const AuthPage = () => (
  <Suspense fallback={null}>
    <AuthPageContent />
  </Suspense>
);

export default AuthPage;
