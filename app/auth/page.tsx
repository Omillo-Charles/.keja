"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Building2,
  CheckCircle2,
  Phone,
  Briefcase,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AuthPage() {
  const [mode, setMode] = React.useState<"signin" | "signup">("signin");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth logic
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-[1000px] grid lg:grid-cols-2 gap-0 overflow-hidden bg-background border border-border rounded-3xl shadow-2xl">
        
        {/* Left Side: Branding/Visuals */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-brand-dot blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-500 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <Link href="/" className="text-4xl font-bold tracking-tighter mb-8 block">
              <span className="text-brand-dot">.</span>keja
            </Link>
            <h2 className="text-3xl font-bold leading-tight mb-6">
              {mode === "signin" 
                ? "Welcome back to the future of rental management." 
                : "Join the most advanced rental ecosystem in Kenya."}
            </h2>
            <div className="space-y-6">
              {[
                { title: "Real-time payment tracking", desc: "Monitor every transaction as it happens." },
                { title: "Automated tenant communication", desc: "Keep everyone in the loop effortlessly." },
                { title: "Smart maintenance scheduling", desc: "Never miss a repair or inspection." },
                { title: "Insightful property analytics", desc: "Make data-driven decisions for your portfolio." },
                { title: "Automated rent reminders", desc: "Reduce late payments with smart alerts." },
                { title: "Digital lease management", desc: "Sign and store contracts securely online." },
                { title: "Secure document storage", desc: "Keep all property records in one safe place." },
                { title: "Financial reporting", desc: "Generate tax-ready reports in seconds." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-brand-dot/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle2 className="h-4 w-4 text-brand-dot" />
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-semibold text-sm leading-tight">{item.title}</h3>
                    <p className="text-primary-foreground/60 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-primary bg-muted/20" />
                ))}
              </div>
              <p className="text-sm text-primary-foreground/60">
                Joined by over <span className="text-primary-foreground font-bold">2,500+</span> property managers.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-2xl font-bold mb-2">
                {mode === "signin" ? "Sign In" : "Create Account"}
              </h1>
              <p className="text-muted-foreground">
                {mode === "signin" 
                  ? "Enter your credentials to access your dashboard" 
                  : "Start managing your properties more efficiently today"}
              </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-2.5 h-12 border border-border rounded-2xl hover:bg-accent hover:border-brand-dot/20 transition-all font-semibold text-sm shadow-sm group">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2.5 h-12 border border-border rounded-2xl hover:bg-accent hover:border-brand-dot/20 transition-all font-semibold text-sm shadow-sm group">
                <svg className="h-5 w-5 fill-foreground" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-4 text-muted-foreground font-medium">Or continue with</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-2">
                  <label className="text-sm font-semibold px-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full h-11 pl-10 pr-4 bg-muted/30 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-background focus:border-brand-dot/50 transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-semibold px-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    required
                    className="w-full h-11 pl-10 pr-4 bg-muted/30 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-background focus:border-brand-dot/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-semibold">Password</label>
                  {mode === "signin" && (
                    <Link href="/auth/forgot" className="text-xs font-medium text-brand-dot hover:underline">
                      Forgot Password?
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    className="w-full h-11 pl-10 pr-4 bg-muted/30 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-background focus:border-brand-dot/50 transition-all"
                  />
                </div>
              </div>

              <button 
                disabled={isLoading}
                className="w-full h-12 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-6 group"
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {mode === "signin" ? "Sign In" : "Create Account"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground font-medium">
                {mode === "signin" ? "New to .keja?" : "Already have an account?"}
                {" "}
                <button 
                  onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                  className="text-brand-dot hover:underline font-bold"
                >
                  {mode === "signin" ? "Sign up for free" : "Log in here"}
                </button>
              </p>
            </div>

            <p className="mt-8 text-center text-[11px] text-muted-foreground max-w-[280px] mx-auto leading-relaxed">
              By continuing, you agree to our 
              <Link href="/terms" className="underline hover:text-foreground mx-1">Terms of Service</Link> 
              and 
              <Link href="/privacy" className="underline hover:text-foreground mx-1">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
