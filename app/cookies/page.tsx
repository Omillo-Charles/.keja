"use client";

import React from "react";
import { Cookie, Settings2, Info, CheckCircle2, XCircle } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">Cookies <span className="text-brand-dot">Policy</span></h1>
          <p className="text-muted-foreground">Last updated: February 7, 2026</p>
        </div>

        <div className="bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Cookie className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">What are Cookies?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Info className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Cookies</h2>
            </div>
            <div className="space-y-4">
              {[
                { 
                  type: "Essential Cookies", 
                  desc: "Required for the website to function properly, such as staying logged in.",
                  required: true 
                },
                { 
                  type: "Performance Cookies", 
                  desc: "Help us understand how visitors interact with our site by collecting anonymous data.",
                  required: false 
                },
                { 
                  type: "Functionality Cookies", 
                  desc: "Allow the site to remember choices you make (like your preferred language).",
                  required: false 
                },
                { 
                  type: "Targeting Cookies", 
                  desc: "Used to deliver advertisements more relevant to you and your interests.",
                  required: false 
                }
              ].map((cookie, i) => (
                <div key={i} className="p-6 bg-muted/30 rounded-2xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground">{cookie.type}</h4>
                    <p className="text-sm text-muted-foreground">{cookie.desc}</p>
                  </div>
                  <div className="shrink-0">
                    {cookie.required ? (
                      <span className="px-3 py-1 bg-brand-dot/10 text-brand-dot text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-dot/20">
                        Required
                      </span>
                    ) : (
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-green-500" /> Enabled
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Settings2 className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Managing Cookies</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>
            <div className="p-6 bg-brand-dot/5 rounded-2xl border border-brand-dot/10">
              <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-brand-dot" />
                Quick Tip
              </h4>
              <p className="text-sm text-muted-foreground">
                You can usually find cookie settings in the "Options" or "Preferences" menu of your browser.
              </p>
            </div>
          </section>

          <div className="pt-8 border-t border-border text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              By continuing to use .keja, you consent to our use of cookies as described in this policy.
            </p>
            <button className="px-6 py-2 bg-foreground text-background rounded-full text-xs font-bold hover:opacity-90 transition-opacity">
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
