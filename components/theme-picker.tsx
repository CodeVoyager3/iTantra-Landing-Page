"use client";

import { Reveal } from "@/components/motion";
import { useTheme, type Theme } from "@/components/theme";

const OPTIONS: {
  id: Theme;
  name: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    id: "light",
    name: "Light Air",
    desc: "Day mode, high clarity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
  },
  {
    id: "dark",
    name: "Dark Stealth",
    desc: "Night missions, longer battery",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    id: "system",
    name: "System Auto",
    desc: "Follows your device setting",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

export function ThemePicker() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-10 grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-3">
      {OPTIONS.map((option, i) => {
        const active = theme === option.id;
        return (
          <Reveal key={option.id} delay={0.15 + i * 0.1} y={20} className="h-full">
            <button
              type="button"
              onClick={() => setTheme(option.id)}
              aria-pressed={active}
              className={`h-full w-full cursor-pointer rounded-xl p-5 text-left transition-colors ${
                active
                  ? "bg-[#0B1220] ring-2 ring-[#E5484D] dark:bg-white/10 dark:ring-[#E5484D]"
                  : "border border-slate-100 bg-white shadow-sm hover:border-slate-200 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  active
                    ? "bg-white/10 text-white"
                    : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                }`}
              >
                {option.icon}
              </span>
              <span
                className={`mt-4 block text-[15px] font-semibold ${
                  active ? "text-white" : "text-[#1B2A41] dark:text-white"
                }`}
              >
                {option.name}
              </span>
              <span className="mt-1 block text-xs leading-snug text-slate-400">
                {option.desc}
              </span>
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
