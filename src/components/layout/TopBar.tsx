import { site } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden bg-black text-white sm:block">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 py-2 text-xs sm:px-8">
        <p className="text-white/70">
          Marketing digital, acquisition & automatisation — {site.contact.area}
        </p>
        <p className="text-white/70">{site.contact.hoursShort}</p>
      </div>
    </div>
  );
}
