import * as React from "react";
import { cn } from "@/components/ui/card";

type BadgeVariant = "outline" | "solid";

export function Badge({
  variant = "outline",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1 text-sm font-normal",
        variant === "outline"
          ? "border border-slate-200 bg-white text-slate-500"
          : "bg-[#0B1220] text-white",
        className,
      )}
      {...props}
    />
  );
}
