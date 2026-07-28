"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import {
  contactFormSchema,
  serviceOptions,
  budgetOptions,
  type ContactFormValues,
} from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setServerMessage(null);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const raw = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      company: String(formData.get("company") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      trade: String(formData.get("trade") || ""),
      area: String(formData.get("area") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      goal: String(formData.get("goal") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      company_website: String(formData.get("company_website") || ""),
    };

    const parsed = contactFormSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Merci de corriger les champs signalés ci-dessous.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies ContactFormValues),
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus("success");
        event.currentTarget.reset();
        return;
      }

      if (result.fieldErrors) {
        const fieldErrors: Record<string, string> = {};
        for (const [key, messages] of Object.entries(result.fieldErrors)) {
          if (Array.isArray(messages) && messages.length > 0) fieldErrors[key] = messages[0];
        }
        setErrors(fieldErrors);
      }

      setServerMessage(result.message || "Une erreur est survenue. Merci de réessayer.");
      setStatus("error");
    } catch {
      setServerMessage("Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl border border-orange/30 bg-orange/5 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-orange" aria-hidden="true" />
        <h2 className="font-heading text-xl font-semibold">Votre demande a bien été envoyée.</h2>
        <p className="max-w-md text-sm text-steel">
          Nous revenons vers vous dans les meilleurs délais, {site.contact.hoursShort}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {serverMessage ? (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-orange/40 bg-orange/5 p-4 text-sm text-black"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Prénom" name="firstName" autoComplete="given-name" error={errors.firstName} required />
        <Field label="Nom" name="lastName" autoComplete="family-name" error={errors.lastName} required />
        <Field label="Entreprise" name="company" autoComplete="organization" error={errors.company} required />
        <Field label="Téléphone" name="phone" type="tel" autoComplete="tel" error={errors.phone} required />
        <Field label="E-mail" name="email" type="email" autoComplete="email" error={errors.email} required className="sm:col-span-2" />
        <Field label="Métier" name="trade" placeholder="Ex. couvreur, façadier, maçon..." error={errors.trade} required />
        <Field label="Zone d'intervention" name="area" placeholder="Ex. Occitanie, 30 km autour de..." error={errors.area} required />

        <SelectField
          label="Service recherché"
          name="service"
          options={serviceOptions}
          defaultValue={defaultService}
          error={errors.service}
          required
        />
        <SelectField
          label="Budget publicitaire mensuel"
          name="budget"
          options={budgetOptions}
          error={errors.budget}
          required
        />

        <Field
          label="Objectif principal"
          name="goal"
          placeholder="Ex. plus de demandes, mieux suivre les prospects..."
          error={errors.goal}
          required
          className="sm:col-span-2"
        />

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-black">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus-visible:border-orange"
          />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-orange"
          aria-describedby={errors.consent ? "consent-error" : undefined}
          aria-invalid={Boolean(errors.consent)}
        />
        <label htmlFor="consent" className="text-sm text-steel">
          J&apos;accepte que mes informations soient utilisées pour être recontacté, conformément à
          la{" "}
          <Link href="/politique-confidentialite" className="font-medium text-black underline">
            politique de confidentialité
          </Link>
          .
        </label>
      </div>
      {errors.consent ? (
        <p id="consent-error" role="alert" className="-mt-4 text-sm text-orange">
          {errors.consent}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-orange-light disabled:opacity-60"
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      <p className="text-xs text-steel">
        Vous pouvez aussi nous écrire directement à{" "}
        <a href={site.contact.emailHref} className="font-medium text-black underline">
          {site.contact.email}
        </a>{" "}
        ou nous appeler au{" "}
        <a href={site.contact.phoneHref} className="font-medium text-black underline">
          {site.contact.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  placeholder,
  error,
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={name} className="text-sm font-medium text-black">
        {label} {required ? <span className="text-orange">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none focus-visible:border-orange ${
          error ? "border-orange" : "border-border"
        }`}
      />
      {error ? (
        <p id={`${name}-error`} role="alert" className="text-xs text-orange">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  defaultValue,
  error,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-black">
        {label} {required ? <span className="text-orange">*</span> : null}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue && options.includes(defaultValue) ? defaultValue : ""}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none focus-visible:border-orange ${
          error ? "border-orange" : "border-border"
        }`}
      >
        <option value="" disabled>
          Sélectionner...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} role="alert" className="text-xs text-orange">
          {error}
        </p>
      ) : null}
    </div>
  );
}
