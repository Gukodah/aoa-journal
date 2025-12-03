"use client";

import Link from "next/link";
import { useState } from "react";
import { useProgress } from "../../context/ProgressProvider.jsx";

const AccountPage = () => {
  const progress = useProgress();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleClear = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/progress", {
        method: "DELETE",
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Falha ao limpar dados");
      }
      if (progress?.setState) {
        // reset local state
        if (progress.all) {
          progress.all.forEach((id) => progress.setState(id, false));
        }
      }
      setMessage("Dados limpos com sucesso.");
    } catch (err) {
      setMessage(err.message || "Erro ao limpar dados.");
    } finally {
      setLoading(false);
      setDialogOpen(false);
    }
  };

  return (
    <section className="page account-page">
      <p className="page-breadcrumb">
        <Link href="/home">Home</Link> / Conta e acesso
      </p>
      <h2 className="page-title">Conta e acesso</h2>
      <p className="page-subtitle">
        Aqui voce encontra opcoes de gerenciamento. Use com cautela ao limpar
        dados salvos.
      </p>

      <div className="card account-card">
        <div>
          <p className="account-label">Excluir tudo</p>
          <p className="account-helper">
            Remove todos os dados salvos (diario, progresso e preferencias).
            Nao ha como desfazer.
          </p>
        </div>
        <div className="account-actions">
          <button
            type="button"
            className="btn-danger"
            onClick={() => setDialogOpen(true)}
          >
            Limpar dados
          </button>
        </div>
      </div>

      {message && <p className="account-status">{message}</p>}

      {dialogOpen && (
        <div className="auth-dialog" role="alertdialog" aria-live="assertive">
          <div className="auth-dialog-card card">
            <h3>Confirmar limpeza</h3>
            <p>
              Isso removera todos os dados de progresso e preferencias. Voce tem
              certeza?
            </p>
            <div className="auth-dialog-actions">
              <button
                type="button"
                className="btn-danger"
                onClick={handleClear}
                disabled={loading}
              >
                {loading ? "Limpando..." : "Sim, limpar"}
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={() => setDialogOpen(false)}
                disabled={loading}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AccountPage;
