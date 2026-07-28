function MarqueeRow({
  items,
  reverse = false,
  muted = false,
}: {
  items: string[];
  reverse?: boolean;
  muted?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={`flex w-max gap-10 whitespace-nowrap motion-reduce:animate-none ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } group-hover:[animation-play-state:paused]`}
    >
      {loop.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={`flex items-center gap-10 text-sm font-medium uppercase tracking-[0.14em] ${
            muted ? "text-white/30" : "text-white/60"
          }`}
        >
          {item}
          <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${muted ? "bg-blue" : "bg-orange"}`} />
        </span>
      ))}
    </div>
  );
}

export function Marquee({ items, dual = false }: { items: string[]; dual?: boolean }) {
  return (
    <div
      className="group relative flex flex-col gap-3 overflow-hidden border-y border-white/10 bg-dark py-5"
      role="marquee"
      aria-label="Expertises BTP Leads Pro"
    >
      <MarqueeRow items={items} />
      {dual ? <MarqueeRow items={[...items].reverse()} reverse muted /> : null}
    </div>
  );
}
