export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden border-y border-white/10 bg-dark py-5"
      role="marquee"
      aria-label="Expertises BTP Leads Pro"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-[0.14em] text-white/60"
          >
            {item}
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
