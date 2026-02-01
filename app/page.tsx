"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  ShieldCheck, 
  Star, 
  Users,
  CheckCircle2,
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Navigation,
  Clock,
  Briefcase,
  TrendingUp,
  UserCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function FindHomePage() {
  return (
    <div className="flex justify-center w-full bg-background">
      <div className="flex w-full max-w-7xl h-[calc(100vh-140px)] md:h-[calc(100vh-145px)] overflow-hidden relative">
        {/* Left Sidebar: Categories & Search */}
        <aside className="hidden lg:flex flex-col w-72 border-r border-border overflow-y-auto p-4 custom-scrollbar shrink-0">
        <div className="space-y-6">
          {/* Small Search Bar */}
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-dot transition-colors" />
            <input 
              type="text" 
              placeholder="Search categories..." 
              className="w-full h-9 pl-9 pr-4 bg-muted/50 border border-transparent rounded-full text-xs focus:outline-none focus:bg-background focus:border-brand-dot/50 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-2">Categories</p>
            {[
              { name: "All Properties", icon: Home, count: "1.2k" },
              { name: "Apartments", icon: Building2, count: "450" },
              { name: "Bedsitters", icon: Home, count: "320" },
              { name: "Mansions", icon: ShieldCheck, count: "120" },
              { name: "Commercial", icon: Briefcase, count: "85" },
              { name: "Short Stays", icon: Clock, count: "210" },
            ].map((cat, i) => {
              const Icon = cat.icon;
              return (
                <button 
                  key={i} 
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group",
                    i === 0 ? "bg-brand-dot/10 text-brand-dot" : "hover:bg-accent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-4 w-4", i === 0 ? "text-brand-dot" : "group-hover:text-brand-dot transition-colors")} />
                    <span className="text-sm font-semibold">{cat.name}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-muted px-1.5 py-0.5 rounded-md text-muted-foreground group-hover:bg-background transition-colors">{cat.count}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Filters */}
          <div className="space-y-1 pt-4 border-t border-border">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-2">Filters</p>
            <div className="px-3 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground">Price Range</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="Min" className="w-full h-8 px-2 bg-muted/50 border-none rounded-lg text-xs" />
                  <input type="text" placeholder="Max" className="w-full h-8 px-2 bg-muted/50 border-none rounded-lg text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Center Feed: Property Posts */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto border-r border-border custom-scrollbar relative">
        {/* Feed Header */}
        <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3">
          <h2 className="text-xl font-bold tracking-tight">Home Feed</h2>
        </div>

        {/* Feed Posts */}
        <div className="divide-y divide-border">
          {[1, 2, 3, 4, 5].map((i) => (
            <article key={i} className="p-4 hover:bg-muted/10 transition-colors cursor-pointer group">
              <div className="flex gap-4">
                {/* Author Avatar */}
                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-full bg-brand-dot/10 flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-brand-dot" />
                  </div>
                </div>

                {/* Post Content */}
                <div className="flex-1 min-w-0 space-y-3">
                  {/* Author Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="font-bold text-sm truncate hover:underline">Premier Realty Ltd</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                      <span className="text-muted-foreground text-xs truncate">@premier_realty · 2h</span>
                    </div>
                    <button className="text-muted-foreground hover:text-brand-dot transition-colors">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Property Details */}
                  <div className="space-y-2">
                    <p className="text-sm leading-relaxed">
                      Just listed! 🌟 Stunning 2-bedroom suite in the heart of Kilimani. 
                      Features high-speed WiFi, 24/7 security, and a panoramic city view. 
                      Perfect for young professionals. 
                      <span className="text-brand-dot ml-1 hover:underline">#KilimaniRentals #KejaHomes</span>
                    </p>

                    {/* Image Gallery Placeholder */}
                    <div className="aspect-[16/9] bg-muted rounded-2xl border border-border overflow-hidden relative group/img">
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-background/90 px-4 py-2 rounded-full text-xs font-bold shadow-xl">View Gallery</span>
                      </div>
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/20">
                        <Home className="h-24 w-24" />
                      </div>
                      <div className="absolute bottom-3 left-3 flex gap-2">
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-md uppercase tracking-tighter">
                          Verified
                        </span>
                        <span className="px-2 py-1 bg-brand-dot text-white text-[10px] font-bold rounded-md uppercase tracking-tighter">
                          KSh 45k/mo
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 text-brand-dot" />
                      <span>Kilimani, Nairobi</span>
                    </div>
                  </div>

                  {/* Engagement Actions */}
                  <div className="flex items-center justify-between max-w-md pt-2">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-brand-dot transition-colors group/btn">
                      <div className="p-2 rounded-full group-hover/btn:bg-brand-dot/10 transition-colors">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <span className="text-xs">24</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition-colors group/btn">
                      <div className="p-2 rounded-full group-hover/btn:bg-green-500/10 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </div>
                      <span className="text-xs">12</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-brand-dot transition-colors group/btn">
                      <div className="p-2 rounded-full group-hover/btn:bg-brand-dot/10 transition-colors">
                        <Heart className="h-4 w-4" />
                      </div>
                      <span className="text-xs">156</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors group/btn">
                      <div className="p-2 rounded-full group-hover/btn:bg-blue-500/10 transition-colors">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <span className="text-xs">3.2k</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Right Sidebar: Popular Property Owners */}
      <aside className="hidden xl:flex flex-col w-80 overflow-y-auto p-4 custom-scrollbar shrink-0">
        <div className="space-y-6">
          {/* Popular Owners */}
          <div className="bg-muted/30 rounded-2xl p-4 border border-border">
            <h3 className="text-lg font-bold mb-4">Popular Owners</h3>
            <div className="space-y-4">
              {[
                { name: "HassConsult", handle: "@hassconsult", followers: "12k", verified: true },
                { name: "Knight Frank", handle: "@knightfrank_ke", followers: "8.5k", verified: true },
                { name: "Cytonn Real Estate", handle: "@cytonn_re", followers: "15k", verified: true },
                { name: "Pam Golding", handle: "@pamgolding_ke", followers: "6.2k", verified: true },
              ].map((owner, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <UserCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-xs truncate group-hover:underline">{owner.name}</span>
                        {owner.verified && <CheckCircle2 className="h-3 w-3 text-blue-500 shrink-0" />}
                      </div>
                      <p className="text-[10px] text-muted-foreground truncate">{owner.handle}</p>
                    </div>
                  </div>
                  <button className="bg-foreground text-background text-[10px] font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-xs font-bold text-brand-dot hover:bg-brand-dot/5 rounded-xl transition-colors">
              Show more
            </button>
          </div>

          {/* Trending Locations */}
          <div className="bg-muted/30 rounded-2xl p-4 border border-border">
            <h3 className="text-lg font-bold mb-4">Trending Locations</h3>
            <div className="space-y-4">
              {[
                { name: "Westlands", posts: "2.4k", trend: "up" },
                { name: "Lavington", posts: "1.8k", trend: "up" },
                { name: "Karen", posts: "950", trend: "down" },
                { name: "South B", posts: "1.2k", trend: "up" },
              ].map((loc, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold group-hover:text-brand-dot transition-colors">{loc.name}</p>
                      {loc.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <Star className="h-3 w-3 text-amber-500" />
                      )}
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{loc.posts} listings this week</p>
                  </div>
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Mini Footer */}
          <div className="px-4 text-[10px] text-muted-foreground flex flex-wrap gap-x-3 gap-y-1 font-medium">
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/cookies" className="hover:underline">Cookie Policy</Link>
            <Link href="/ads" className="hover:underline">Ads info</Link>
            <Link href="/more" className="hover:underline">More...</Link>
            <span>&copy; 2024 .keja Inc.</span>
          </div>
        </div>
      </aside>
    </div>
    </div>
  );
}

