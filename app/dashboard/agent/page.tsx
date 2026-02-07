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
  Briefcase,
  BarChart3,
  MessageSquare,
  ClipboardList
} from "lucide-react";
import { cn } from "@/lib/utils";

type TabType = "overview" | "listings" | "clients" | "commissions" | "settings";

export default function AgentDashboard() {
  const [activeTab, setActiveTab] = React.useState<TabType>("overview");
  const [userRole] = React.useState<"agent">("agent");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = React.useState(false);
  const router = useRouter();

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "listings", label: "My Listings", icon: Building2 },
    { id: "clients", label: "Clients & Leads", icon: Users },
    { id: "commissions", label: "Commissions", icon: Wallet },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSignOut = () => {
    router.push("/");
  };

  const selectRole = (role: string) => {
    if (role === "tenant") router.push("/dashboard/tenant");
    else if (role === "landlord") router.push("/dashboard/landlord");
    setIsRoleDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 md:pt-4 md:pb-8">
        {/* Top Header Section with Role Switcher */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-4 md:p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-brand-dot/10 flex items-center justify-center text-brand-dot font-black text-2xl border-2 border-brand-dot/20">
                JD
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground">John Doe</h2>
                <p className="text-sm text-muted-foreground">agent.john@example.com</p>
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
            {activeTab === "listings" && <ListingsSection />}
            {activeTab === "clients" && <ClientsSection />}
            {activeTab === "commissions" && <CommissionsSection />}
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
            Agent <span className="text-brand-dot">Dashboard</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track your listings, manage leads, and view your earnings.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-dot text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-dot/20 hover:opacity-90 transition-all">
            <Plus className="h-4 w-4" />
            New Listing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Listings", value: "14", icon: Building2, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "New Leads", value: "28", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
          { label: "Monthly Commission", value: "KES 185k", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Scheduled Tours", value: "6", icon: Calendar, color: "text-orange-500", bg: "bg-orange-500/10" },
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
        {/* Recent Lead Activity */}
        <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-brand-dot" />
              Recent Leads
            </h3>
            <button className="text-xs text-brand-dot font-semibold hover:underline">View All Leads</button>
          </div>
          <div className="divide-y divide-border">
            {[
              { name: "David Muli", property: "Parklands Apartments", time: "15 mins ago", source: "Website" },
              { name: "Grace Njeri", property: "Karen Suburbs Mansion", time: "2 hours ago", source: "Facebook" },
              { name: "Samuel Kamau", property: "Lavington Studio", time: "Yesterday", source: "Direct" },
            ].map((lead, i) => (
              <div key={i} className="p-4 hover:bg-muted/30 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-xs">
                    {lead.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">Interested in {lead.property} • {lead.time}</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-lg bg-brand-dot/5 text-brand-dot text-[10px] font-bold uppercase tracking-wider">
                  {lead.source}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-background rounded-2xl border border-border shadow-sm p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-brand-dot" />
              Closing Performance
            </h3>
            <select className="text-xs bg-muted border-none rounded-lg px-2 py-1 focus:ring-0">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-3 h-48 pt-4">
            {[35, 50, 80, 60, 90, 70, 85].map((height, i) => (
              <div key={i} className="flex-1 bg-brand-dot/10 rounded-t-lg relative group transition-all hover:bg-brand-dot/20">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-brand-dot rounded-t-lg transition-all" 
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListingsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight">My <span className="text-brand-dot">Listings</span></h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-dot text-white rounded-xl text-sm font-bold">
          <Plus className="h-4 w-4" /> Add Property
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Parklands Apartments", location: "Parklands, Nairobi", price: "KES 85k", status: "Active", leads: 12 },
          { name: "Karen Suburbs Mansion", location: "Karen, Nairobi", price: "KES 250k", status: "Pending", leads: 8 },
          { name: "Lavington Studio", location: "Lavington, Nairobi", price: "KES 45k", status: "Active", leads: 5 },
        ].map((listing, i) => (
          <div key={i} className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden hover:border-brand-dot/50 transition-all group">
            <div className="aspect-video bg-muted flex items-center justify-center text-4xl">
              🏢
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider",
                  listing.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-orange-500/10 text-orange-600"
                )}>
                  {listing.status}
                </span>
                <span className="text-sm font-black text-brand-dot">{listing.price}</span>
              </div>
              <h3 className="font-bold text-lg group-hover:text-brand-dot transition-colors">{listing.name}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" /> {listing.location}
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  <span className="text-xs font-bold">{listing.leads} Leads</span>
                </div>
                <button className="text-xs font-bold text-brand-dot hover:underline">Edit Listing</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Clients & <span className="text-brand-dot">Leads</span></h1>
      <div className="bg-background rounded-2xl border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Client Name</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Property</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Last Contact</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { name: "David Muli", property: "Parklands Apartments", status: "New Lead", date: "15 mins ago" },
              { name: "Grace Njeri", property: "Karen Suburbs Mansion", status: "Following Up", date: "2 hours ago" },
              { name: "Samuel Kamau", property: "Lavington Studio", status: "Viewing Scheduled", date: "Yesterday" },
              { name: "Anita Ekuru", property: "Parklands Apartments", status: "Closed", date: "3 days ago" },
            ].map((client, i) => (
              <tr key={i} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-brand-dot/10 text-brand-dot flex items-center justify-center font-bold text-xs">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium">{client.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{client.property}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                    client.status === "New Lead" ? "bg-blue-500/10 text-blue-600" : 
                    client.status === "Following Up" ? "bg-orange-500/10 text-orange-600" : 
                    client.status === "Closed" ? "bg-green-500/10 text-green-600" : "bg-purple-500/10 text-purple-600"
                  )}>
                    {client.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-muted-foreground">{client.date}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 rounded-lg bg-muted hover:bg-brand-dot hover:text-white transition-all">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CommissionsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Commission <span className="text-brand-dot">Earnings</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Total Earned</p>
          <p className="text-2xl font-black">KES 1.2M</p>
          <p className="text-xs text-green-600 mt-2 font-bold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> +15.2% from last year
          </p>
        </div>
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Pending Payout</p>
          <p className="text-2xl font-black">KES 145k</p>
          <div className="w-full bg-muted h-1.5 rounded-full mt-4">
            <div className="bg-brand-dot h-full w-[65%] rounded-full" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 font-bold">Processed on 15th Feb</p>
        </div>
        <div className="bg-background p-6 rounded-2xl border border-border shadow-sm">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Target Achievement</p>
          <p className="text-2xl font-black">92%</p>
          <button className="text-[10px] text-brand-dot mt-2 font-bold hover:underline uppercase tracking-wider">View Full Report</button>
        </div>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-2xl font-black tracking-tight">Agent <span className="text-brand-dot">Settings</span></h1>
      <div className="bg-background rounded-2xl border border-border shadow-sm p-8 space-y-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Agent Profile Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Real Estate License #</label>
              <input type="text" defaultValue="RE-99283-KE" className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-muted-foreground">Agency Name</label>
              <input type="text" defaultValue="Keja Prime Realtors" className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-brand-dot" />
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border">
          <button className="px-6 py-3 bg-brand-dot text-white rounded-xl font-bold">Update Agent Profile</button>
        </div>
      </div>
    </div>
  );
}
