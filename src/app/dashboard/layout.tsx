'use client';

import { AppSidebar, AppHeader, DemoBanner } from '@/components/layout';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';
import { MOCK_FEATURES } from '@/lib/data';

const navItems = MOCK_FEATURES.map((feature) => ({
  icon: <Lucide icon={feature.icon} size={16} />,
  label: feature.name,
  href: `/dashboard/${feature.slug}`,
}));

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName="Healthcare Data Insights Pro" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}