import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-white/15 bg-white/10 text-ink hover:bg-white/15",
        secondary:
          "border-transparent bg-surface-2 text-ink-2 hover:bg-line",
        outline:
          "border-line text-ink-3 hover:border-line-strong hover:text-ink-2",
        destructive: "border-transparent bg-red-500/10 text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
