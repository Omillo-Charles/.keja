"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  Settings, 
  History, 
  CreditCard, 
  Bell, 
  Shield, 
  LogOut, 
  Search, 
  MapPin, 
  Clock, 
  ChevronRight,
  Camera,
  Mail,
  Phone,
  LayoutDashboard,
  Heart,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "overview" | "profile" | "history" | "payments" | "settings";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<TabType>("overview");
  const router = useRouter();

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "profile", label: "Account Profile", icon: User },
    { id: "history", label: "Search History", icon: History },
    { id: "payments", label: "Payment Methods", icon: CreditCard },
    { id: "settings", label: "Settings & Privacy", icon: Settings },
  ];

  const handleSignOut = () => {
    // Simulate sign out
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar */}
          <aside className="w-full md:w-64 md:sticky md:top-20 shrink-0 self-start">
            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-brand-dot/10 flex items-center justify-center text-brand-dot font-bold text-xl border-2 border-brand-dot/20">
                    JD
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground">John Doe</h2>
                    <p className="text-xs text-muted-foreground truncate max-w-[120px]">john.doe@example.com</p>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as TabType)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      activeTab === item.id 
                        ? "bg-brand-dot text-white shadow-md shadow-brand-dot/20" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
            {activeTab === "overview" && <OverviewSection />}
            {activeTab === "profile" && <ProfileSection />}
            {activeTab === "history" && <HistorySection />}
            {activeTab === "payments" && <PaymentsSection />}
            {activeTab === "settings" && <SettingsSection />}
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">Welcome back, <span className="text-brand-dot">John!</span></h1>
        <p className="text-sm text-muted-foreground">Saturday, February 7, 2026</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Saved Homes", value: "12", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10" },
          { label: "Active Applications", value: "3", icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Total Spent", value: "KES 45k", icon: CreditCard, color: "text-green-500", bg: "bg-green-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-background p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
            <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shrink-0", stat.bg)}>
              <stat.icon className={cn("h-6 w-6", stat.color)} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Searches */}
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <History className="h-4 w-4 text-brand-dot" />
              Recent Searches
            </h3>
            <button className="text-xs text-brand-dot font-semibold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-border">
            {[
              { query: "2 Bedroom in Kilimani", time: "2 hours ago", location: "Nairobi" },
              { query: "Studio Apartment near Westlands", time: "Yesterday", location: "Nairobi" },
              { query: "Mansionette with garden", time: "3 days ago", location: "Kiambu" },
            ].map((item, i) => (
              <div key={i} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
                    <Search className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.query}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {item.location} • {item.time}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-dot group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Saved Searches/Alerts */}
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <Bell className="h-4 w-4 text-brand-dot" />
              Active Alerts
            </h3>
            <button className="text-xs text-brand-dot font-semibold hover:underline">Manage</button>
          </div>
          <div className="p-6 space-y-4">
            <div className="bg-brand-dot/5 border border-brand-dot/10 rounded-xl p-4 flex items-start gap-3">
              <div className="h-8 w-8 rounded-full bg-brand-dot/10 flex items-center justify-center shrink-0">
                <Bell className="h-4 w-4 text-brand-dot" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Price Drop Alert!</p>
                <p className="text-xs text-muted-foreground">The 3-bedroom apartment in Ruaka you liked just dropped by KES 5,000.</p>
                <button className="text-xs font-bold text-brand-dot pt-1">Check it out</button>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4 border border-dashed border-border flex flex-col items-center justify-center text-center py-8">
              <Plus className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Create a new alert</p>
              <p className="text-xs text-muted-foreground">Get notified when new properties match your criteria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">Account <span className="text-brand-dot">Profile</span></h1>
      </div>

      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-8 border-b border-border bg-gradient-to-r from-brand-dot/5 to-transparent">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative group">
              <div className="h-24 w-24 rounded-full bg-brand-dot/10 flex items-center justify-center text-brand-dot font-bold text-3xl border-4 border-background shadow-xl">
                JD
              </div>
              <button className="absolute bottom-0 right-0 h-8 w-8 bg-brand-dot text-white rounded-full border-2 border-background flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-muted-foreground">Personal Account • Member since Feb 2026</p>
              <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
                <span className="px-2 py-0.5 bg-green-500/10 text-green-600 text-[10px] font-bold uppercase rounded tracking-wider">Verified</span>
                <span className="px-2 py-0.5 bg-brand-dot/10 text-brand-dot text-[10px] font-bold uppercase rounded tracking-wider">Premium</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name</label>
              <input 
                type="text" 
                defaultValue="John Doe"
                className="w-full h-11 px-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="email" 
                  defaultValue="john.doe@example.com"
                  className="w-full h-11 pl-10 pr-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="tel" 
                  defaultValue="+254 712 345 678"
                  className="w-full h-11 pl-10 pr-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  defaultValue="Nairobi, Kenya"
                  className="w-full h-11 pl-10 pr-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot transition-all"
                />
              </div>
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="px-6 py-3 bg-brand-dot text-white rounded-xl font-bold shadow-lg shadow-brand-dot/20 hover:opacity-90 transition-all">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function HistorySection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">Search <span className="text-brand-dot">History</span></h1>
        <button className="text-sm text-destructive font-semibold hover:underline">Clear History</button>
      </div>

      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="divide-y divide-border">
          {[
            { query: "2 Bedroom in Kilimani", date: "Feb 7, 2026", time: "2:45 PM", results: 24, location: "Kilimani, Nairobi" },
            { query: "Studio Apartment near Westlands", date: "Feb 6, 2026", time: "11:20 AM", results: 15, location: "Westlands, Nairobi" },
            { query: "Mansionette with garden", date: "Feb 4, 2026", time: "9:15 AM", results: 8, location: "Kiambu Road" },
            { query: "Furnished apartments for rent", date: "Feb 1, 2026", time: "4:30 PM", results: 42, location: "Nairobi CBD" },
            { query: "Hostels near UoN", date: "Jan 28, 2026", time: "10:00 AM", results: 12, location: "Nairobi" },
          ].map((item, i) => (
            <div key={i} className="p-6 hover:bg-muted/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.query}</h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {item.location}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {item.date} at {item.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4">
                <span className="text-sm font-medium px-3 py-1 bg-brand-dot/10 text-brand-dot rounded-full">
                  {item.results} results
                </span>
                <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">Payment <span className="text-brand-dot">Methods</span></h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-dot text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-dot/20 hover:opacity-90 transition-all">
          <Plus className="h-4 w-4" />
          Add Method
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* M-Pesa Card */}
        <div className="bg-background rounded-2xl border-2 border-brand-dot shadow-sm overflow-hidden relative">
          <div className="absolute top-4 right-4 h-6 w-6 rounded-full bg-brand-dot flex items-center justify-center">
            <Shield className="h-3 w-3 text-white" />
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="h-10 w-16 bg-[#4CAF50] rounded-md flex items-center justify-center font-black text-white italic text-sm">
                M-PESA
              </div>
              <span className="text-xs font-bold text-brand-dot uppercase tracking-wider bg-brand-dot/10 px-2 py-0.5 rounded">Primary</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Phone Number</p>
              <p className="text-xl font-mono font-bold tracking-wider mt-1">0712 **** 678</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <p className="text-sm font-medium">John Doe</p>
              <button className="text-xs font-bold text-brand-dot hover:underline">Edit</button>
            </div>
          </div>
        </div>

        {/* Visa Card */}
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden group hover:border-brand-dot/50 transition-colors">
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="h-10 w-16 bg-[#1A1F71] rounded-md flex items-center justify-center font-black text-white italic text-lg">
                VISA
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Card Number</p>
              <p className="text-xl font-mono font-bold tracking-wider mt-1">**** **** **** 4242</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-4">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold">Expiry</p>
                  <p className="text-sm font-bold">12/28</p>
                </div>
              </div>
              <button className="text-xs font-bold text-brand-dot hover:underline">Edit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-bold">Transaction History</h3>
        </div>
        <div className="divide-y divide-border">
          {[
            { id: "#TRX-9281", date: "Feb 1, 2026", amount: "KES 45,000", status: "Completed", type: "Rent Payment" },
            { id: "#TRX-8172", date: "Jan 15, 2026", amount: "KES 2,500", status: "Completed", type: "Service Fee" },
            { id: "#TRX-7261", date: "Jan 1, 2026", amount: "KES 45,000", status: "Completed", type: "Rent Payment" },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold">{item.type}</p>
                  <p className="text-xs text-muted-foreground">{item.date} • {item.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-black">{item.amount}</p>
                <p className="text-[10px] text-green-600 font-bold uppercase">{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">Settings & <span className="text-brand-dot">Privacy</span></h1>
      </div>

      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-bold">Notifications</h3>
          <p className="text-sm text-muted-foreground">Manage how you receive alerts and updates.</p>
        </div>
        <div className="p-6 space-y-6">
          {[
            { label: "Email Notifications", desc: "Receive property alerts and newsletters via email.", enabled: true },
            { label: "Push Notifications", desc: "Get real-time updates on your device.", enabled: true },
            { label: "SMS Alerts", desc: "Urgent notifications sent directly to your phone.", enabled: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <div className={cn(
                "h-6 w-11 rounded-full p-1 transition-colors cursor-pointer",
                item.enabled ? "bg-brand-dot" : "bg-muted"
              )}>
                <div className={cn(
                  "h-4 w-4 bg-white rounded-full transition-transform",
                  item.enabled ? "translate-x-5" : "translate-x-0"
                )} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-bold text-destructive">Danger Zone</h3>
          <p className="text-sm text-muted-foreground">Permanent actions regarding your account.</p>
        </div>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-destructive/20 bg-destructive/5 rounded-xl">
            <div>
              <p className="text-sm font-bold">Delete Account</p>
              <p className="text-xs text-muted-foreground">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button className="px-4 py-2 bg-destructive text-white rounded-lg text-xs font-bold hover:bg-destructive/90 transition-colors shrink-0">
              Delete Permanently
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
