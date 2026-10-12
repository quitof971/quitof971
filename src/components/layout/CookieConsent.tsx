"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const STORAGE_KEY = "cyberattract-cookie-consent";
const CONSENT_EVENT = "cyberattract-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}

// Pretend consent already exists during SSR so the banner never flashes
// before hydration; the client snapshot then reveals the real value.
function getServerSnapshot() {
  return "accepted";
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function choose(value: "accepted" | "refused") {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }

  if (consent) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-black text-white"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-white/75">
          Nous utilisons uniquement des cookies essentiels par défaut. Avec votre accord, nous
          pouvons également mesurer l&apos;audience du site. Voir notre{" "}
          <Link href="/politique-cookies" className="font-medium text-white underline">
            politique de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("refused")}
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:border-white/40"
          >
            Refuser
          </button>
          <Button size="md" onClick={() => choose("accepted")}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
}
