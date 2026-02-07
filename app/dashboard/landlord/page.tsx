"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronRight,
  LayoutDashboard,
  ChevronDown,
  Building2,
  Users,
  Wallet,
  Calendar,
  Plus,
  TrendingUp,
  MapPin,
  Clock,
  Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "overview" | "properties" | "bookings" | "financials" | "settings";

export default function LandlordDashboard() {
  const [activeTab, setActiveTab] = React.useState<TabType>("overview");
  const [userRole] = React.useState<"landlord">("landlord");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = React.useState(false);
  const router = useRouter();

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "properties", label: "My Properties", icon: Building2 },
    { id: "bookings", label: "Bookings & Tenants", icon: Users },
    { id: "financials", label: "Financials", icon: Wallet },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSignOut = () => {
    router.push("/");
  };

  const selectRole = (role: string) => {
    if (role === "tenant") router.push("/dashboard");
    else if (role === "agent") router.push("/dashboard/agent");
    setIsRoleDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Top Header Section with Role Switcher */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-brand-dot/10 flex items-center justify-center text-brand-dot font-black text-2xl border-2 border-brand-dot/20">
                JD
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground">John Doe</h2>
                <p className="text-sm text-muted-foreground">landlord.john@example.com</p>
              </div>
            </div>

            {/* Role Switcher Dropdown */}
            <div className="relative">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 ml-1">Current Workspace</p>
              <button 
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="flex items-center gap-4 px-5 py-3 bg-brand-dot text-white rounded-xl font-bold shadow-lg shadow-brand-dot/20 hover:scale-[1.02] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  <span className="capitalize">{userRole} Dashboard</span>
                </div>
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isRoleDropdownOpen && "rotate-180")} />
              </button>

              {isRoleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-background border border-border rounded-2xl shadow-xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-2 space-y-1">
                    {(["tenant", "landlord", "agent"] as const).map((role) => (
                      <button
                        key={role}
                        onClick={() => selectRole(role)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                          userRole === role 
                            ? "bg-brand-dot/10 text-brand-dot" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <span className="capitalize">{role} Dashboard</span>
                        {userRole === role && <div className="h-2 w-2 rounded-full bg-brand-dot" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
          {/* Mobile Sidebar (Horizontal Scroll) */}
          <div className="md:hidden w-full overflow-x-auto pb-2 custom-scrollbar shrink-0">
            <div className="flex items-center gap-2 min-w-max">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as TabType)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                    activeTab === item.id 
                      ? "bg-brand-dot text-white shadow-md shadow-brand-dot/20" 
                      : "bg-background text-muted-foreground border border-border hover:bg-muted"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden md:flex w-full md:w-64 md:sticky md:top-24 md:h-[calc(100vh-8rem)] shrink-0 self-start">
            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm h-full flex flex-col w-full">
              <nav className="p-2 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="space-y-1">
                    {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as TabType)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1",
                        activeTab === item.id 
                          ? "bg-brand-dot text-white shadow-md shadow-brand-dot/20" 
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </nav>
              <div className="p-2 border-t border-border shrink-0">
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 w-full space-y-6">
            {activeTab === "overview" && <OverviewSection />}
            {activeTab === "properties" && <PropertiesSection />}
            {activeTab === "bookings" && <BookingsSection />}
            {activeTab === "financials" && <FinancialsSection />}
            {activeTab === "settings" && <SettingsSection />}
            
            {/* Mobile Logout Button */}
            <div className="md:hidden pt-4">
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-2xl text-sm font-bold text-destructive bg-destructive/5 border border-destructive/10 transition-all"
              >
                <LogOut className="h-4 w-4" />
                Sign Out from Dashboard
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            Landlord <span className="text-brand-dot">Overview</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your properties and track your rental income.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-dot text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-dot/20 self-start hover:opacity-90 transition-all">
          <Plus className="h-4 w-4" />
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Properties", value: "8", icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Total Tenants", value: "24", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
          { label: "Monthly Income", value: "KES 420k", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Pending Tasks", value: "5", icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
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
        {/* Recent Property Activity */}
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-dot" />
              Recent Bookings
            </h3>
            <button className="text-xs text-brand-dot font-semibold hover:underline">View All</button>
          </div>
          <div className="divide-y divide-border">
            {[
              { tenant: "Alice Wanjiku", property: "Sunset Heights #4B", date: "2 hours ago", status: "Confirmed" },
              { tenant: "Kevin Otieno", property: "Green Park Villa", date: "Yesterday", status: "Pending" },
              { tenant: "Sarah Johnson", property: "The Terrace #12", date: "3 days ago", status: "Confirmed" },
            ].map((item, i) => (
              <div key={i} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-xs">
                    {item.tenant.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.tenant}</p>
                    <p className="text-xs text-muted-foreground">{item.property} • {item.date}</p>
                  </div>
                </div>
                <div className={cn(
                  "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                  item.status === "Confirmed" ? "bg-green-500/10 text-green-600" : "bg-orange-500/10 text-orange-600"
                )}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Summary Chart Placeholder */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-brand-dot" />
              Revenue Growth
            </h3>
            <select className="text-xs bg-muted border-none rounded-lg px-2 py-1 focus:ring-0">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-2 h-48 pt-4">
            {[40, 65, 45, 90, 75, 95].map((height, i) => (
              <div key={i} className="flex-1 bg-brand-dot/10 rounded-t-lg relative group transition-all hover:bg-brand-dot/20">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-brand-dot rounded-t-lg transition-all" 
                  style={{ height: `${height}%` }}
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {height}k
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PropertiesSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">My <span className="text-brand-dot">Properties</span></h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-dot text-white rounded-xl text-sm font-bold">
          <Plus className="h-4 w-4" /> Add New
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Sunset Heights", location: "Kilimani, Nairobi", units: 12, occupied: 10, image: "🏢" },
          { name: "Green Park Villa", location: "Westlands, Nairobi", units: 1, occupied: 1, image: "🏡" },
          { name: "The Terrace", location: "Ruaka, Kiambu", units: 24, occupied: 18, image: "🏙️" },
        ].map((property, i) => (
          <div key={i} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:border-brand-dot/50 transition-all group">
            <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
              {property.image}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-brand-dot transition-colors">{property.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Occupancy</p>
                  <p className="text-sm font-black">{Math.round((property.occupied/property.units)*100)}%</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Units</p>
                    <p className="font-bold">{property.units}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Tenants</p>
                    <p className="font-bold">{property.occupied}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-muted hover:bg-brand-dot hover:text-white transition-all">
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Bookings & <span className="text-brand-dot">Tenants</span></h1>
      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Tenant</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Property</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { name: "Alice Wanjiku", property: "Sunset Heights #4B", status: "Active" },
              { name: "Kevin Otieno", property: "Green Park Villa", status: "Pending" },
              { name: "Sarah Johnson", property: "The Terrace #12", status: "Active" },
              { name: "Michael Chen", property: "Sunset Heights #1A", status: "Overdue" },
            ].map((booking, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-dot/10 text-brand-dot flex items-center justify-center font-bold text-xs">
                      {booking.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium">{booking.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{booking.property}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                    booking.status === "Active" ? "bg-green-500/10 text-green-600" : 
                    booking.status === "Pending" ? "bg-orange-500/10 text-orange-600" : "bg-red-500/10 text-red-600"
                  )}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-bold text-brand-dot hover:underline">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FinancialsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Financial <span className="text-brand-dot">Reports</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Total Revenue</p>
          <p className="text-2xl font-black">KES 2.4M</p>
          <p className="text-xs text-green-600 mt-2 font-bold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +12.5% from last month
          </p>
        </div>
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Collected</p>
          <p className="text-2xl font-black">KES 420k</p>
          <div className="w-full bg-muted h-1.5 rounded-full mt-4">
            <div className="bg-brand-dot h-full w-[85%] rounded-full" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 font-bold">85% of monthly target</p>
        </div>
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Outstanding</p>
          <p className="text-2xl font-black">KES 75k</p>
          <button className="text-[10px] text-brand-dot mt-2 font-bold hover:underline uppercase tracking-wider">Send Reminders</button>
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Landlord <span className="text-brand-dot">Settings</span></h1>
      <div className="bg-background rounded-2xl border border-border shadow-sm p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Notification Preferences</h3>
          <div className="space-y-3">
            {[
              "New booking requests",
              "Rent payment confirmations",
              "Maintenance alerts",
              "Monthly financial reports"
            ].map((pref, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">{pref}</span>
                <div className="h-6 w-11 bg-brand-dot rounded-full relative">
                  <div className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-border">
          <button className="px-6 py-3 bg-brand-dot text-white rounded-xl font-bold">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
