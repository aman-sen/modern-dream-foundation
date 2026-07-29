import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl2 bg-white shadow-soft border border-slate-100",
        className
      )}
      {...props}
    />
  );
}

export function CardGradientBorder({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-xl2 p-[1.5px] bg-grad-primary/40 hover:bg-grad-primary transition-all duration-500">
      <div
        className={cn(
          "rounded-[calc(1.25rem-1.5px)] bg-white h-full",
          className
        )}
        {...props}
      />
    </div>
  );
}
