import React from 'react';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: string;
  joinDate: string;
  status: 'Active' | 'Inactive';
  address?: string;
}

export interface SidebarLinkProps {
  icon: React.ReactElement; 
  label: string;
  active?: boolean;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement; 
  gradientFrom: string;
  gradientTo: string;
}

// ... existing Customer interface
// ... other interfaces

export interface OrderItem {
  name: string;
  qty: number;
  price: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string; // New field
  date: string;
  total: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled' | 'Packed'; // Added 'Packed'
  tracking?: {
    carrier: string;
    number: string;
    url: string;
  };
  shippingAddress?: string; // New field
  items?: OrderItem[];    
    // New field
}

// ... existing Customer and Order interfaces

// ... other interfaces

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;        // Offer Price (e.g., "₹790")
  originalPrice: string; // MRP (e.g., "₹3446")
  stock: number;
  stockStatus: string;  // e.g., "160 units"
  status: 'Active' | 'Draft' | 'Archived';
  image: string;
  description?: string;
  benefits?: string;
  ingredients?: string;
}
// ... existing interfaces

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'Main Administrator' | 'Full-Control Admin' | 'Order-Management'; // Specific roles from your HTML
  initial: string; // For the avatar circle (e.g., "M", "R")
  createdDate: string;
  lastLogin: string;
  status: 'Active' | 'Inactive';
}

// ... existing interfaces

export interface SettingsState {
  general: {
    storeName: string;
    storeEmail: string;
    storePhone: string;
    storeAddress: string;
  };
  shipping: {
    freeShippingAbove: number;
    standardShipping: number;
    estimatedDelivery: string;
  };
  payment: {
    cod: boolean;
    upi: boolean;
    card: boolean;
    netBanking: boolean;
  };
  email: {
    orderConfirmation: boolean;
    shippingUpdate: boolean;
    deliveryConfirmation: boolean;
    lowStockAlert: boolean;
  };
  tax: {
    gstNumber: string;
    taxRate: number;
    includeTax: boolean;
  };
}
// ... existing interfaces

export interface Review {
  id: number;
  productName: string;
  userName: string;
  date: string;
  rating: number; // 1 to 5
  comment: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

// ... existing interfaces

export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  iconName: 'dollar' | 'cart' | 'package' | 'users';
  color: 'green' | 'blue' | 'purple' | 'orange';
}

export interface LowStockItem {
  name: string;
  currentStock: number;
  minStock: number;
  percentage: number;
}

export interface RecentOrderSummary {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Packed';
}

export interface DailyStat {
  title: string;
  value: string;
  subtext: string;
  color: 'green' | 'blue' | 'purple';
  iconName: 'trending' | 'cart' | 'users';
}
// ... existing interfaces

// ... other interfaces

export interface ReportSummary {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: 'dollar' | 'package' | 'trending' | 'users';
  color: 'green' | 'blue' | 'purple' | 'orange';
}

export interface MonthlySalesData {
  month: string;
  sales: number;
  orders: number;
  // FIX: Replaced 'any' with 'string | number' to satisfy linter
  [key: string]: string | number; 
}

export interface SalesCategory {
  name: string;
  value: number;
  color: string;
  // FIX: Replaced 'any' with 'string | number' to satisfy linter
  [key: string]: string | number;
}

export interface TopProduct {
  name: string;
  unitsSold: number;
  revenue: string;
  popularity: number;
}

// ... other existing interfaces (Customer, Order, etc.)