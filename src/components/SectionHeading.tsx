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
          className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
            align === "center" ? "justify-center" : ""
          } ${dark ? "text-tertiary-fixed-dim" : "text-primary"}`}
        >
          {!dark && <span className="h-0.5 w-6 bg-primary" />}
          {kicker}
        </span>
      )}
      <h2
        className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-on-surface"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-on-surface-variant" : "text-on-surface-variant"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
