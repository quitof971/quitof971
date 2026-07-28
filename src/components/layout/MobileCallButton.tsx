import { Phone } from "lucide-react";
import { site } from "@/content/site";

export function MobileCallButton() {
  return (
    <a
      href={site.contact.phoneHref}
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgba(252,76,1,0.6)] sm:hidden"
      aria-label={`Appeler BTP Leads Pro au ${site.contact.phoneDisplay}`}
    >
      <Phone className="h-4 w-4" aria-hidden="true" />
      Appeler maintenant
    </a>
  );
}
