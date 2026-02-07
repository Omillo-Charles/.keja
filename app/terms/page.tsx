"use client";

import React from "react";
import { FileText, CheckCircle2, AlertCircle, Scale, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">Terms of <span className="text-brand-dot">Service</span></h1>
          <p className="text-muted-foreground">Last updated: February 7, 2026</p>
        </div>

        <div className="bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Agreement to Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using .keja, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Scale className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">User Responsibilities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Account Accuracy", desc: "You must provide accurate and complete information when creating an account.", icon: CheckCircle2 },
                { title: "Lawful Use", desc: "You agree to use the platform only for lawful purposes and in accordance with the terms.", icon: CheckCircle2 },
                { title: "Security", desc: "You are responsible for maintaining the confidentiality of your account credentials.", icon: CheckCircle2 },
                { title: "Content Rights", desc: "You retain rights to the content you post but grant us a license to use it.", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-muted/30 rounded-2xl border border-border flex gap-4">
                  <item.icon className="h-5 w-5 text-brand-dot shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Prohibited Activities</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Users are strictly prohibited from:
            </p>
            <ul className="space-y-3">
              {[
                "Posting false, misleading, or fraudulent property listings.",
                "Harassing or intimidating other users of the platform.",
                "Attempting to bypass security measures or access unauthorized data.",
                "Using the platform for any form of illegal property transactions."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <div className="h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-destructive" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <ShieldAlert className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed italic p-6 bg-muted/50 rounded-2xl border border-dashed border-border">
              .keja provides a platform for connecting landlords and tenants. We do not own, manage, or control the properties listed and are not responsible for the actions of users or the condition of properties.
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              By using our service, you acknowledge that you have read and understood these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
