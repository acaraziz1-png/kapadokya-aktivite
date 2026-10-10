"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqAccordion({
  items,
  dark = false,
}: {
  items: { question: string; answer: string }[];
  dark?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={i}
            className={cn(
              "overflow-hidden rounded-2xl transition-colors",
              dark
                ? "bg-white/5 ring-1 ring-white/10"
                : "bg-white ring-1 ring-sand-200"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className={cn(
                  "font-semibold",
                  dark ? "text-white" : "text-ink-900"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform duration-300",
                  open && "rotate-180",
                  dark ? "text-ember-300" : "text-clay-500"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "px-5 pb-5 text-sm leading-relaxed sm:text-base",
                    dark ? "text-sand-300" : "text-ink-500"
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
