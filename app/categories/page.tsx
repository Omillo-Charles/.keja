"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  ArrowRight,
  Filter,
  LayoutGrid,
  List,
  Building2,
  TrendingUp,
  MapPin,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { CATEGORIES, Category } from "@/lib/constants/categories";

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  const filteredCategories = CATEGORIES.filter(category => 
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subs.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-black tracking-tight mb-2">Browse by <span className="text-brand-dot">Category</span></h1>
          <p className="text-muted-foreground">Find properties by exploring our comprehensive categories.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 bg-muted/30 p-4 rounded-2xl border border-border">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-dot transition-colors" />
              <input 
                type="text" 
                placeholder="Search for categories or property types..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-11 pl-10 pr-4 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-brand-dot/50 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold whitespace-nowrap">
                {searchQuery ? "Results" : "All Categories"}
                <span className="ml-1.5 text-xs font-medium text-muted-foreground">({filteredCategories.length})</span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center bg-muted rounded-lg p-1 border border-border">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-1.5 rounded-md transition-all",
                    viewMode === "grid" ? "bg-background shadow-sm text-brand-dot" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-1.5 rounded-md transition-all",
                    viewMode === "list" ? "bg-background shadow-sm text-brand-dot" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-background border border-border hover:bg-muted/50 rounded-lg text-xs font-bold transition-colors">
                <Filter className="h-3.5 w-3.5" />
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, idx) => (
              <CategoryCard key={idx} category={category} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCategories.map((category, idx) => (
              <CategoryListRow key={idx} category={category} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="py-20 text-center">
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No categories found</h3>
            <p className="text-muted-foreground mb-8">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-brand-dot text-white rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Featured Property Types Section */}
      <div className="bg-muted/30 border-y border-border py-20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Trending Property Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover the most sought-after properties in Kenya right now.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Modern Apartments", icon: Building2, count: "1,240+", trend: "+12%" },
              { name: "Office Spaces", icon: TrendingUp, count: "850+", trend: "+5%" },
              { name: "Serviced Villas", icon: MapPin, count: "420+", trend: "+8%" },
              { name: "Warehouse Hubs", icon: Clock, count: "310+", trend: "+15%" },
            ].map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-2xl border border-border hover:border-brand-dot/30 hover:shadow-xl hover:shadow-brand-dot/5 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-brand-dot/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-brand-dot" />
                </div>
                <h3 className="font-bold mb-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">{item.count} Units</span>
                  <span className="text-xs text-green-500 font-bold bg-green-500/10 px-2 py-0.5 rounded-full">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon;
  
  return (
    <div className="group bg-background rounded-3xl border border-border p-6 hover:shadow-2xl hover:shadow-brand-dot/10 hover:border-brand-dot/20 transition-all flex flex-col h-full">
      <div className="flex items-start justify-between mb-6">
        <div className="h-14 w-14 rounded-2xl bg-brand-dot/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-7 w-7 text-brand-dot" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1 rounded-md">
          {category.subs.length} Types
        </span>
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-black mb-3 group-hover:text-brand-dot transition-colors">{category.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {category.description || "Explore a wide variety of properties tailored to your needs."}
        </p>
        
        <div className="space-y-2 mb-8">
          {category.subs.slice(0, 5).map((sub, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground group/item">
              <ChevronRight className="h-3 w-3 text-brand-dot opacity-0 -ml-2 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all" />
              <span>{sub}</span>
            </div>
          ))}
          {category.subs.length > 5 && (
            <p className="text-[10px] font-bold text-brand-dot pt-1">
              + {category.subs.length - 5} more types
            </p>
          )}
        </div>
      </div>
      
      <Link 
        href={`/search?category=${category.name}`}
        className="mt-auto w-full flex items-center justify-center gap-2 py-4 bg-muted hover:bg-brand-dot hover:text-white rounded-2xl font-bold transition-all group/btn"
      >
        <span>Explore All</span>
        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

function CategoryListRow({ category }: { category: Category }) {
  const Icon = category.icon;
  
  return (
    <div className="group bg-background rounded-2xl border border-border p-4 hover:border-brand-dot/30 transition-all flex items-center gap-6">
      <div className="h-12 w-12 rounded-xl bg-brand-dot/10 flex items-center justify-center shrink-0">
        <Icon className="h-6 w-6 text-brand-dot" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="font-bold truncate">{category.name}</h3>
          <span className="text-[10px] font-bold text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
            {category.subs.length} Types
          </span>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {category.subs.join(", ")}
        </p>
      </div>
      
      <Link 
        href={`/search?category=${category.name}`}
        className="px-4 py-2 bg-muted hover:bg-brand-dot hover:text-white rounded-lg text-xs font-bold transition-all shrink-0"
      >
        View Category
      </Link>
    </div>
  );
}
