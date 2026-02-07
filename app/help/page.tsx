"use client";

import * as React from "react";
import { Footer } from "@/components/Footer";
import { 
  ChevronDown,
  ExternalLink,
  MessageSquare,
  Users,
  Zap,
  Globe,
  Clock,
  CheckCircle2,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  MessageCircle,
  Mail,
  Phone,
  Search,
  BookOpen,
  FileText,
  ShieldQuestion,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I list my property on .keja?",
    answer: "To list a property, you need to create a Landlord account. Once verified, you'll be able to access the property management dashboard to add details like location, price, and high-quality photos."
  },
  {
    question: "Is the payment system secure?",
    answer: "Yes, we use industry-standard encryption and partner with trusted payment gateways like M-Pesa and local banks to ensure all transactions are 100% secure."
  },
  {
    question: "What are the fees for landlords?",
    answer: "We offer a flexible pricing model. Basic listings are free, while premium features like highlighted search results and advanced analytics carry a small monthly subscription fee."
  },
  {
    question: "How can I verify a tenant's background?",
    answer: "Our platform includes a built-in tenant screening tool that checks credit history and previous landlord references once the tenant provides consent."
  }
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-brand-dot/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:pt-6 md:pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Get in <span className="text-brand-dot">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect with us on social media, visit our office, or reach out to our support team directly.
            </p>
            
            {/* Large Search Bar */}
            <div className="relative group max-w-2xl mx-auto pt-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-brand-dot transition-colors" />
              <input 
                type="text" 
                placeholder="Search for help, contacts, or locations..." 
                className="w-full h-14 pl-12 pr-4 bg-background border-2 border-border rounded-2xl text-base focus:outline-none focus:border-brand-dot transition-all shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { 
              title: "Live Chat", 
              desc: "Average wait: 2 mins", 
              icon: MessageCircle, 
              color: "text-[#00C853]", 
              bg: "bg-[#00C853]/5"
            },
            { 
              title: "Email Support", 
              desc: "support@dotkeja.com", 
              icon: Mail, 
              color: "text-[#2962FF]", 
              bg: "bg-[#2962FF]/5"
            },
            { 
              title: "Phone Support", 
              desc: "+254 700 000 000", 
              icon: Phone, 
              color: "text-[#FF6D00]", 
              bg: "bg-[#FF6D00]/5"
            },
            { 
              title: "Community", 
              desc: "Join the discussion", 
              icon: Users, 
              color: "text-[#6200EA]", 
              bg: "bg-[#6200EA]/5"
            },
          ].map((item, i) => (
            <button key={i} className="flex flex-col items-center text-center p-8 rounded-3xl border border-border bg-background shadow-xl shadow-black/5 transition-all">
              <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300", item.bg, item.color)}>
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-black text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Left: Social Media & Maps */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <Globe className="h-6 w-6 text-brand-dot" />
                  Connect with Us
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { 
                    name: "Twitter", 
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    ), 
                    color: "text-foreground", 
                    bg: "bg-muted/50"
                  },
                  { 
                    name: "Instagram", 
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" {...props}>
                        <defs>
                          <radialGradient id="ig-grad" cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                          </radialGradient>
                        </defs>
                        <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ), 
                    color: "text-[#E4405F]", 
                    bg: "bg-[#E4405F]/5"
                  },
                  { 
                    name: "Facebook", 
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" fill="#1877F2" {...props}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    ), 
                    color: "text-[#1877F2]", 
                    bg: "bg-[#1877F2]/5"
                  },
                  { 
                    name: "LinkedIn", 
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" fill="#0A66C2" {...props}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ), 
                    color: "text-[#0A66C2]", 
                    bg: "bg-[#0A66C2]/5"
                  },
                  { 
                    name: "YouTube", 
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" fill="#FF0000" {...props}>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ), 
                    color: "text-[#FF0000]", 
                    bg: "bg-[#FF0000]/5"
                  },
                ].map((social, i) => (
                  <button key={i} className={cn("flex flex-col items-center justify-center p-6 rounded-3xl border border-border transition-all gap-3", social.bg)}>
                    <social.icon className={cn("h-6 w-6 transition-colors duration-300", social.color)} />
                    <span className="text-xs font-bold">{social.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-brand-dot" />
                  Visit our Office
                </h2>
              </div>
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-border shadow-xl shadow-black/5">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.814483!3d-1.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d62f859061%3A0x364b6d0034ad2a0d!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale transition-all duration-500"
                ></iframe>
                <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md p-4 rounded-2xl border border-border shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-dot/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-brand-dot" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">HQ: Westlands, Nairobi</h4>
                      <p className="text-[10px] text-muted-foreground">Delta Corner Tower, Waiyaki Way</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-brand-dot text-white rounded-xl text-xs font-bold transition-opacity flex items-center gap-2">
                    Get Directions
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black flex items-center gap-3">
                  <ShieldQuestion className="h-6 w-6 text-brand-dot" />
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-2xl overflow-hidden transition-all">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left bg-background transition-colors"
                    >
                      <span className="font-bold text-sm">{faq.question}</span>
                      <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform duration-300", openFaq === i && "rotate-180")} />
                    </button>
                    {openFaq === i && (
                      <div className="p-5 pt-0 bg-background text-sm text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-brand-dot rounded-3xl p-8 text-white relative overflow-hidden">
              <Zap className="absolute -right-4 -top-4 h-32 w-32 opacity-10 transition-transform duration-500" />
              <h3 className="text-2xl font-black mb-4 relative z-10">Need Urgent Help?</h3>
              <p className="text-white/80 text-sm mb-8 relative z-10">Our priority support line is available 24/7 for premium members.</p>
              <button className="w-full py-4 bg-white text-brand-dot rounded-2xl font-black text-sm transition-colors relative z-10">
                Go Premium
              </button>
            </div>

            <div className="bg-muted/30 rounded-3xl p-8 border border-border">
              <h4 className="font-black text-lg mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-dot" />
                System Status
              </h4>
              <div className="space-y-4">
                {[
                  { name: "Property Search", status: "Operational" },
                  { name: "Payment Gateway", status: "Operational" },
                  { name: "Messaging", status: "Operational" },
                  { name: "Maps API", status: "Operational" },
                ].map((sys, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{sys.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00C853] animate-pulse" />
                      <span className="font-bold text-[10px] uppercase tracking-wider">{sys.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                  <CheckCircle2 className="h-5 w-5 text-[#00C853]" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
