import * as React from "react";
import { cn } from "@/components/ui/card";

export function Avatar({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function AvatarImage({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  if (!src) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ?? ""} className="h-full w-full object-cover" />
  );
}

export function AvatarFallback({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center bg-slate-100 text-sm font-bold text-slate-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
