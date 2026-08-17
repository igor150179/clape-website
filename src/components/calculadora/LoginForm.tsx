"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import type { CalcProduct } from "@/lib/calculadora-auth/constants";
import { CALC_PRODUCTS } from "@/lib/calculadora-auth/constants";
import "./acesso.css";

function LoginFormInner({ product }: { product: CalcProduct }) {
  const meta = CALC_PRODUCTS[product];
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  const [step, setStep] = useState<"credentials" | "code">("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(() => {
    if (reason === "kicked") {
      return "Outro aparelho entrou com sua conta. Faça login novamente.";
    }
    if (reason === "unavailable") {
      return "Serviço de acesso temporariamente indisponível. Tente em instantes.";
    }
    return null;
  });

  async function onSubmitCredentials(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/auth/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, product }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Não foi possível enviar o código.");
        return;
      }
      setMessage(data.message ?? "Código enviado.");
      setStep("code");
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmitCode(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code, product }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Código inválido.");
        return;
      }
      window.location.href = data.redirect ?? meta.loginPath.replace("/acesso", "");
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="acesso-wrap">
      <div className="acesso-card">
        <p className="acesso-kicker">Clape</p>
        <h1>{meta.label}</h1>
        <p className="acesso-lead">
          Acesso exclusivo para compradores. Informe o e-mail da Hotmart e a senha
          recebida por e-mail.
        </p>

        {error && <p className="acesso-error">{error}</p>}
        {message && <p className="acesso-message">{message}</p>}

        {step === "credentials" ? (
          <form onSubmit={onSubmitCredentials} className="acesso-form">
            <label>
              E-mail
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? "Enviando…" : "Receber código por e-mail"}
            </button>
          </form>
        ) : (
          <form onSubmit={onSubmitCode} className="acesso-form">
            <label>
              Código de 6 dígitos
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]{6}"
                maxLength={6}
                required
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? "Entrando…" : "Entrar"}
            </button>
            <button
              type="button"
              className="acesso-link"
              onClick={() => {
                setStep("credentials");
                setCode("");
                setMessage(null);
              }}
            >
              Voltar
            </button>
          </form>
        )}

        <p className="acesso-foot">
          Sessão válida por 3 dias neste aparelho. Se entrar em outro dispositivo,
          este será desconectado.
        </p>
      </div>
    </div>
  );
}

export function CalculadoraLoginPage({ product }: { product: CalcProduct }) {
  return (
    <Suspense fallback={<div className="acesso-wrap">Carregando…</div>}>
      <LoginFormInner product={product} />
    </Suspense>
  );
}
