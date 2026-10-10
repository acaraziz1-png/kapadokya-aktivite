export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  dark = false,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {kicker && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.2em] ${
            dark ? "text-ember-300" : "text-clay-500"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      <div className={`divider-ember mt-4 ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-sand-300" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
