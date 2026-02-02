import { 
  Home, 
  Building2, 
  Factory, 
  Building, 
  Hotel, 
  LandPlot, 
  Zap,
  LucideIcon
} from "lucide-react";

export interface Category {
  name: string;
  icon: LucideIcon;
  subs: string[];
  description?: string;
}

export const CATEGORIES: Category[] = [
  { 
    name: "Residential", 
    icon: Home, 
    description: "Homes, apartments, and living spaces for individuals and families.",
    subs: ["Apartment / Flat", "Bedsitter / Studio", "Single Room", "One-Bedroom", "Two-Bedroom", "Three-Bedroom", "Maisonette", "Bungalow", "Townhouse", "Villa", "Duplex", "Penthouse", "Serviced Apartment", "Student Hostel", "Staff Quarters", "Condominium"]
  },
  { 
    name: "Commercial", 
    icon: Building2, 
    description: "Office spaces, retail stores, and business complexes.",
    subs: ["Office Space", "Shop / Retail Store", "Mall Shop", "Showroom", "Business Complex", "Co-working Space", "Medical Office / Clinic", "School / Training Center", "Bank Hall"]
  },
  { 
    name: "Industrial", 
    icon: Factory, 
    description: "Warehouses, factories, and industrial facilities.",
    subs: ["Warehouse", "Factory", "Workshop", "Cold Storage", "Distribution Center"]
  },
  { 
    name: "Mixed-Use", 
    icon: Building, 
    description: "Buildings combining residential, commercial, and retail spaces.",
    subs: ["Shop with Residence", "Apartment Block with Shops", "Office + Retail Building"]
  },
  { 
    name: "Hospitality", 
    icon: Hotel, 
    description: "Hotels, resorts, and short-stay accommodation.",
    subs: ["Hotel", "Guest House", "Lodges", "Airbnb / Short-Stay Units", "Resorts", "Holiday Homes"]
  },
  { 
    name: "Land & Outdoor", 
    icon: LandPlot, 
    description: "Plots of land for residential, commercial, or agricultural use.",
    subs: ["Residential Plot", "Commercial Plot", "Industrial Plot", "Agricultural Land", "Parking Yard", "Open Yard"]
  },
  { 
    name: "Special-Purpose", 
    icon: Zap, 
    description: "Unique facilities like worship centers, event halls, and petrol stations.",
    subs: ["Church / Worship Center", "Event Hall", "Conference Center", "Sports Facility", "Petrol Station", "Car Wash", "Market Stall"]
  }
];
