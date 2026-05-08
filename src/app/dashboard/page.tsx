'use client';

import { STATS, MOCK_PATIENTS, RECENT_ACTIVITY, DEMO_USER, CHART_DATA, SPARKLINE_DATA, formatDate, formatCurrency } from '@/lib/data';
import { StatCard, Card, CardHeader, CardTitle, CardContent, Badge, Avatar, Table, Button } from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import { AppHeader } from '@/components/layout';
import { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lucide } from 'lucide-react';

export function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [toastMsg, setToastMsg] = useState(null);
  const [filter, setFilter] = useState('');

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleToast = (message) => {
    setToastMsg(message);
    setTimeout(() => setToastMsg(null), 2000);
  };

  return (
    <>
      <AppHeader title="Dashboard" subtitle={`Good morning, ${DEMO_USER.name}`} actions={<Button size="sm">+ New Patient</Button>} />
      <div className="grid grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            sparkline={SPARKLINE_DATA[stat.label]}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>[Domain] Overview</CardTitle>
            <CardContent subtitle="Last 12 weeks">
              <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {RECENT_ACTIVITY.map((activity) => (
                <li key={activity.id} className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0">
                  <Avatar src={activity.avatar} />
                  <span>{activity.action}</span>
                  <span className="text-zinc-400 text-sm">{formatDate(activity.timestamp)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Patients</CardTitle>
          <input
            type="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search patients..."
            className="w-full p-2 border border-zinc-200 rounded-md"
          />
          <Button size="sm" onClick={() => handleToast('Exporting data...')}>
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <Table
            columns={[
              { label: 'Name', accessor: 'name' },
              { label: 'Email', accessor: 'email' },
              { label: 'Date of Birth', accessor: 'dateOfBirth' },
              { label: 'Status', accessor: 'status' },
              { label: 'Actions', accessor: 'actions' },
            ]}
            data={MOCK_PATIENTS.filter((patient) => patient.name.includes(filter.toLowerCase()))}
            onRowClick={handleRowClick}
          />
        </CardContent>
        <footer className="p-2 border-t border-zinc-50">
          <span>
            Showing {MOCK_PATIENTS.length} of {MOCK_PATIENTS.length} results
          </span>
        </footer>
      </Card>
      <div className="flex gap-2">
        <Button size="sm" onClick={() => handleToast('New contract created...')}>
          New Contract
        </Button>
        <Button size="sm" onClick={() => handleToast('Send invoice...')}>
          Send Invoice
        </Button>
        <Button size="sm" onClick={() => handleToast('Running report...')}>
          Run Report
        </Button>
      </div>
      {toastMsg && (
        <div className="fixed bottom-0 right-0 p-2 bg-zinc-900 text-white rounded-lg text-sm">
          {toastMsg}
        </div>
      )}
    </>
  );
}