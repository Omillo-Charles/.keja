"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, 
  Bell, 
  UserCircle, 
  LayoutDashboard, 
  Building2, 
  Users, 
  Settings,
  HelpCircle,
  Phone,
  Home,
  Heart,
  SearchCode,
  MapPin,
  LogIn,
  MoreHorizontal,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

// Navigation for Tenants (Default/Public)
const tenantNavItems = [
  { name: "Find Home", href: "/", icon: SearchCode },
  { name: "Categories", href: "/categories", icon: Building2 },
  { name: "Favorites", href: "/favorites", icon: Heart },
  { name: "Support", href: "/help", icon: HelpCircle },
];

// Navigation for Landlords (Management)
const landlordNavItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Properties", href: "/properties", icon: Building2 },
  { name: "Tenants", href: "/tenants", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Navbar() {
  const [isLandlord, setIsLandlord] = React.useState(false); // Simulation for logged in state
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const pathname = usePathname();

  const navItems = isLandlord ? landlordNavItems : tenantNavItems;

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
      {/* Top Layer: Utility/Role Switcher (Switcher for Demo) */}
      <div className="hidden md:block w-full bg-primary text-primary-foreground py-1.5 px-4 sm:px-6 lg:px-8 text-[10px] sm:text-xs font-medium">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-green-500 animate-pulse" />
              {isLandlord ? "Management" : "Finder"}
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              Support: +254 700 000 000
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Demo Toggle - In a real app, this would be based on Auth session */}
            <button 
              onClick={() => setIsLandlord(!isLandlord)}
              className="px-2 py-0.5 bg-white/10 hover:bg-white/20 rounded transition-colors"
            >
              Switch to {isLandlord ? "Tenant" : "Landlord"}
            </button>
            <Link href="/help" className="hover:underline hidden sm:flex items-center gap-1">
              <HelpCircle className="h-3 w-3" />
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Layer: Brand, Search, Actions */}
      <div className="w-full bg-background border-b border-border py-2 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            {/* Logo - Always visible for branding */}
            <Link href="/" className="flex items-center shrink-0 group">
              <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-foreground">
                <span className="text-brand-dot group-hover:animate-pulse">.</span>keja
              </span>
            </Link>

            {/* Actions on mobile - Shown next to logo */}
            <div className="flex items-center gap-2 sm:hidden">
              <ThemeToggle />
              {isLandlord ? (
                <button 
                  aria-label="User Profile"
                  className="p-2 border border-border rounded-full hover:bg-accent transition-colors bg-background"
                >
                  <UserCircle className="h-5 w-5 text-brand-dot" />
                </button>
              ) : (
                <Link 
                  href="/auth"
                  className="p-2 bg-primary text-primary-foreground rounded-full shadow-sm"
                >
                  <LogIn className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Search Bar - Full width on mobile, max-xl on desktop */}
          <div className="flex-1 w-full sm:max-w-xl">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-dot transition-colors" />
              <input 
                type="text" 
                placeholder={isLandlord ? "Search management..." : "Search for houses..."} 
                className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-transparent rounded-full text-sm focus:outline-none focus:bg-background focus:border-brand-dot/50 transition-all placeholder:text-muted-foreground/80 placeholder:font-medium"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1.5 pointer-events-none">
                {!isLandlord && <MapPin className="h-3.5 w-3.5 text-muted-foreground" />}
                <kbd className="h-5 px-1.5 bg-background border border-border rounded text-[10px] text-muted-foreground">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Actions - Hidden on mobile (moved next to logo) */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-3">
            <ThemeToggle />
            
            {isLandlord ? (
              <div className="flex items-center gap-1 sm:gap-3">
                <button 
                  aria-label="Notifications"
                  className="relative p-2 text-muted-foreground hover:bg-accent rounded-full transition-colors"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2 h-2 w-2 bg-brand-dot rounded-full border-2 border-background" />
                </button>
                <button 
                  aria-label="User Profile"
                  className="flex items-center gap-2 p-1 border border-border rounded-full hover:bg-accent transition-colors sm:pl-1 sm:pr-3"
                >
                  <div className="h-7 w-7 rounded-full bg-brand-dot/10 flex items-center justify-center">
                    <UserCircle className="h-5 w-5 text-brand-dot" />
                  </div>
                  <span className="text-sm font-medium hidden sm:inline-block">Landlord</span>
                </button>
              </div>
            ) : (
              <Link 
                href="/auth"
                aria-label="Login"
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
              >
                <LogIn className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Login</span>
                <span className="xs:hidden">In</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Layer: Navigation */}
      <div className="w-full bg-background border-b border-border hidden md:block px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="flex items-center space-x-1 py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium transition-all relative group",
                    isActive 
                      ? "text-brand-dot" 
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50 rounded-t-lg"
                  )}
                >
                  <Icon className={cn("mr-2 h-4 w-4", isActive ? "text-brand-dot" : "text-muted-foreground group-hover:text-foreground")} />
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-dot rounded-t-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar (Bottom Tab Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-6 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-1 min-w-[64px] transition-colors",
                  isActive ? "text-brand-dot" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "animate-in zoom-in duration-300")} />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            );
          })}
          
          {/* More Link for Mobile */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className="flex flex-col items-center gap-1 min-w-[64px] text-muted-foreground hover:text-foreground transition-colors"
          >
            <MoreHorizontal className="h-5 w-5" />
            <span className="text-[10px] font-medium">More</span>
          </button>
        </div>
      </div>

      {/* Mobile More Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm transition-all duration-300 md:hidden",
          showMobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />

      {/* Mobile More Menu Drawer */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-[70] w-full bg-background border-t border-border rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out md:hidden p-6",
        showMobileMenu ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">More Options</h2>
          <button 
            onClick={() => setShowMobileMenu(false)}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => {
              setIsLandlord(!isLandlord);
              setShowMobileMenu(false);
            }}
            className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-2xl border border-border hover:border-brand-dot/50 transition-all gap-2"
          >
            <SearchCode className="h-6 w-6 text-brand-dot" />
            <span className="text-xs font-semibold">Switch to {isLandlord ? "Tenant" : "Landlord"}</span>
          </button>
          
          <Link 
            href="/help"
            onClick={() => setShowMobileMenu(false)}
            className="flex flex-col items-center justify-center p-4 bg-muted/50 rounded-2xl border border-border hover:border-brand-dot/50 transition-all gap-2"
          >
            <HelpCircle className="h-6 w-6 text-brand-dot" />
            <span className="text-xs font-semibold">Help Center</span>
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2">Additional Links</p>
          <div className="grid grid-cols-1 gap-1">
            {navItems.slice(4).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setShowMobileMenu(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-colors"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
