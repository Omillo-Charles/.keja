"use client";

import React from "react";
import { 
  Users, 
  Target, 
  Heart, 
  Building2, 
  ShieldCheck, 
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-brand-dot/5 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Redefining <span className="text-brand-dot">Real Estate</span> in Kenya
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We're on a mission to make property management and house hunting seamless, transparent, and accessible for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/auth" 
              className="px-8 py-4 bg-brand-dot text-white rounded-2xl font-bold shadow-lg shadow-brand-dot/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              Join the Community <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "50k+" },
              { label: "Properties Listed", value: "12k+" },
              { label: "Cities Covered", value: "25+" },
              { label: "Successful Matches", value: "30k+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-brand-dot mb-2">{stat.value}</p>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Our Core <span className="text-brand-dot">Values</span></h2>
            <p className="text-muted-foreground">What drives us every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Transparency First", 
                desc: "No hidden fees, no shady deals. We believe in complete honesty between landlords and tenants.",
                icon: ShieldCheck,
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              { 
                title: "User-Centric Design", 
                desc: "Every feature we build starts with the question: 'How does this make our user's life easier?'",
                icon: Users,
                color: "text-purple-500",
                bg: "bg-purple-500/10"
              },
              { 
                title: "Innovation Always", 
                desc: "We're constantly pushing boundaries to bring the latest technology to the Kenyan housing market.",
                icon: Target,
                color: "text-green-500",
                bg: "bg-green-500/10"
              }
            ].map((value, i) => (
              <div key={i} className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:border-brand-dot/50 transition-all">
                <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-6", value.bg)}>
                  <value.icon className={cn("h-8 w-8", value.color)} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black leading-tight">
                Our Vision for the <span className="text-brand-dot">Future</span> of Living
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started .keja because we were tired of the manual, stressful process of finding a home in Nairobi. Today, we're building a platform that handles everything from the first search to the final rent payment.
              </p>
              <div className="space-y-4">
                {[
                  "Automated Rent Collection",
                  "Verified Property Listings",
                  "Smart Maintenance Requests",
                  "Transparent Tenant Screening"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-brand-dot/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-brand-dot" />
                    </div>
                    <span className="font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-[2rem] border border-border p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Building2 className="h-64 w-64" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-brand-dot/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-brand-dot" />
                  </div>
                  <div>
                    <h4 className="font-bold">Founded in 2026</h4>
                    <p className="text-sm text-muted-foreground">Based in Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="p-6 bg-brand-dot/5 rounded-2xl border border-brand-dot/10 italic text-muted-foreground">
                  "Our goal isn't just to list houses; it's to build communities where everyone feels at home."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
