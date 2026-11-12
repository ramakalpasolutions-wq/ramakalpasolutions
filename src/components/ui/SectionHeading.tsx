type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", as: Tag = "h2", id }: Props) {
  const center = align === "center";
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag
        id={id}
        className={`text-3xl leading-tight font-semibold md:text-[2.75rem] ${tone === "dark" ? "text-cream" : "text-ink"}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${tone === "dark" ? "text-mist" : "text-plum"}`}>{intro}</p>
      )}
    </div>
  );
}

/** A word or phrase inside a heading shown in the solid brand violet. */
export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-violet">{children}</span>;
}
