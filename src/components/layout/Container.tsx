import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-4xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
