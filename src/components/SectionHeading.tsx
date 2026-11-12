export function SectionHeading({
  level,
  children,
  onBand = false,
}: {
  level: string;
  children: React.ReactNode;
  onBand?: boolean;
}) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <p
        className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${onBand ? "text-band-muted" : "text-hilite"}`}
      >
        {level}
      </p>
      <h2 className="font-pixel text-5xl leading-none sm:text-6xl">
        {children}
      </h2>
    </div>
  );
}
