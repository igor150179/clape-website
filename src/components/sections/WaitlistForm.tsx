"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { WHATSAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  interest: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  city: "",
  interest: "",
};

const interestOptions = [
  { value: "forno", label: "Forno" },
  { value: "forno-acessorios", label: "Forno + Acessórios" },
  { value: "saber-mais", label: "Quero saber mais" },
];

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Informe seu nome";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Informe um e-mail válido";
  }
  if (!data.whatsapp.trim() || data.whatsapp.replace(/\D/g, "").length < 10) {
    errors.whatsapp = "Informe um WhatsApp válido";
  }
  if (!data.city.trim()) errors.city = "Informe sua cidade";
  if (!data.interest) errors.interest = "Selecione seu interesse";
  return errors;
}

export function WaitlistForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const interestLabel =
      interestOptions.find((o) => o.value === form.interest)?.label ?? form.interest;

    const message = encodeURIComponent(
      `Olá! Quero entrar na lista de espera CLAPE.\n\nNome: ${form.name}\nE-mail: ${form.email}\nWhatsApp: ${form.whatsapp}\nCidade: ${form.city}\nInteresse: ${interestLabel}`,
    );

    // TODO: integrar com backend/email — por ora console.log + abre WhatsApp
    console.log("Lista de espera:", form);

    setWhatsappLink(`${WHATSAPP_URL}?text=${message}`);
    setSubmitted(true);
  };

  return (
    <section
      id="lista-espera"
      className="relative overflow-hidden bg-clape-gradient py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-clape-orange/20 via-transparent to-clape-amber/10" />

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-clape-cream sm:text-4xl lg:text-5xl">
              Reserve o seu CLAPE.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-clape-cream/80 sm:text-lg">
              Os fornos são montados conforme a demanda — e algumas unidades
              prontas aguardam entrega imediata. Fale comigo no WhatsApp ou
              deixe seus dados que eu retorno pessoalmente.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-clape-dark/80 p-6 backdrop-blur-md sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-clape-orange/20 text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-xl font-bold text-clape-cream">
                  Você está na lista!
                </h3>
                <p className="mt-2 text-sm text-clape-cream/75">
                  Agora fale comigo no WhatsApp para garantir sua vaga no próximo lote.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-clape-orange px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-clape-amber hover:shadow-glow-lg"
                >
                  Abrir WhatsApp
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <Field label="Nome" error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass(errors.name)}
                    placeholder="Seu nome completo"
                    aria-invalid={!!errors.name}
                  />
                </Field>

                <Field label="E-mail" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass(errors.email)}
                    placeholder="seu@email.com"
                    aria-invalid={!!errors.email}
                  />
                </Field>

                <Field label="WhatsApp" error={errors.whatsapp}>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className={inputClass(errors.whatsapp)}
                    placeholder="(11) 99999-9999"
                    aria-invalid={!!errors.whatsapp}
                  />
                </Field>

                <Field label="Cidade" error={errors.city}>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass(errors.city)}
                    placeholder="São Paulo, SP"
                    aria-invalid={!!errors.city}
                  />
                </Field>

                <Field label="Interesse" error={errors.interest}>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className={cn(inputClass(errors.interest), "appearance-none")}
                    aria-invalid={!!errors.interest}
                  >
                    <option value="">Selecione...</option>
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <button
                  type="submit"
                  className="w-full rounded-full bg-clape-orange py-4 text-base font-semibold text-white transition hover:bg-clape-amber"
                >
                  Quero ser contatado
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-clape-cream/90">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-clape-cream placeholder:text-clape-cream/40 transition focus:outline-none focus:ring-2 focus:ring-clape-orange/50",
    error ? "border-red-400/60" : "border-white/15",
  );
}
