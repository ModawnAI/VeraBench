"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-full items-center justify-center bg-[#0F172A] text-white transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora:repeating-linear-gradient(100deg,var(--color-1)_10%,var(--color-2)_15%,var(--color-3)_20%,var(--color-4)_25%,var(--color-5)_30%)]
            [background-image:var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-hard-light
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform
            `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
          style={
            {
              "--color-1": "#D85A5A",
              "--color-2": "#D4AF37",
              "--color-3": "#0F172A",
              "--color-4": "#D85A5A",
              "--color-5": "#D4AF37",
            } as React.CSSProperties
          }
        />
      </div>
      {children}
    </div>
  );
};
