import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {badge && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{
            background: dark
              ? "rgba(255,255,255,0.1)"
              : "linear-gradient(135deg, rgba(34,184,240,0.1), rgba(255,10,122,0.1))",
            color: dark ? "rgba(255,255,255,0.8)" : "#FF0A7A",
            border: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,10,122,0.2)",
          }}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl sm:text-5xl font-black leading-tight mb-4",
          dark ? "text-white" : "text-[#123244]"
        )}
      >
        {title}{" "}
        {highlight && (
          <span
            style={{
              background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={cn("text-lg max-w-2xl", align === "center" ? "mx-auto" : "", dark ? "text-white/60" : "text-gray-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
