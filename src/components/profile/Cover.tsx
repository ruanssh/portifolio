import { cn } from "@/lib/utils";

interface CoverProps {
  src: string;
  alt?: string;
  className?: string;
}

export function Cover({ src, alt = "Cover image", className }: CoverProps) {
  return (
    <div
      className={cn(
        "relative w-full h-48 md:h-56 rounded-t-2xl overflow-hidden",
        className,
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
    </div>
  );
}
