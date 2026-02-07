"use client";

import React from "react";
import { Shield, Lock, Eye, FileText, Bell } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black mb-4">Privacy <span className="text-brand-dot">Policy</span></h1>
          <p className="text-muted-foreground">Last updated: February 7, 2026</p>
        </div>

        <div className="bg-background rounded-3xl border border-border shadow-sm p-8 md:p-12 space-y-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At .keja, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We collect information that you provide directly to us, such as when you create an account, list a property, or contact us for support. This may include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                "Name and contact information",
                "Account credentials",
                "Payment information",
                "Property details and photos",
                "Communication history",
                "Device and usage data"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl border border-border text-sm font-medium">
                  <div className="h-2 w-2 rounded-full bg-brand-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">How We Use Your Data</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Service Delivery", desc: "To provide, maintain, and improve our real estate services." },
                { title: "Communication", desc: "To send you technical notices, updates, and security alerts." },
                { title: "Personalization", desc: "To tailor your experience and property recommendations." },
                { title: "Compliance", desc: "To comply with legal obligations and prevent fraudulent activity." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-muted/30 rounded-2xl border border-border">
                  <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                <Bell className="h-6 w-6 text-brand-dot" />
              </div>
              <h2 className="text-2xl font-bold">Your Rights</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. If you have any questions about your data, please contact our privacy team.
            </p>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              Questions about our Privacy Policy? Contact us at <span className="font-bold text-brand-dot">privacy@keja.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
