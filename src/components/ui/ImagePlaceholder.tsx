import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden flex flex-col items-center justify-center",
        aspectRatio,
        className
      )}
      style={{
        background: "rgba(37,174,235,0.08)",
        border: "1.5px dashed rgba(34,184,240,0.3)",
      }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center opacity-40"
          style={{
            background: "#25AEEB",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="2" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
            <path d="M21 15L16 10L11 15M8 18L13 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p
          className="text-sm font-medium tracking-wide text-center"
          style={{ color: "rgba(18,50,68,0.4)" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
