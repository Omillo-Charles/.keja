"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-md border border-border bg-muted/20" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative h-9 w-9 flex items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dot/50"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5 flex items-center justify-center">
        <Sun className="h-full w-full rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
        <Moon className="absolute h-full w-full rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400" />
      </div>
    </button>
  );
}
