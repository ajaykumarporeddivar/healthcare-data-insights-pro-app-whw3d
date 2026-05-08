'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { DEMO_USER } from '@/lib/data';
import { Card, Button, Input, Badge } from '@/components/ui';
import { AppHeader } from '@/components/layout';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyPush, setNotifyPush] = useState(true);
  const [notifyWeekly, setNotifyWeekly] = useState(true);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="bg-zinc-50 p-4">
      <AppHeader />
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-zinc-900 tracking-tight text-2xl">Settings</h1>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
      <div className="mt-4">
        <div className="flex space-x-4">
          <Badge
            variant={activeTab === 'profile' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </Badge>
          <Badge
            variant={activeTab === 'notifications' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </Badge>
          <Badge
            variant={activeTab === 'appearance' ? 'primary' : 'secondary'}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </Badge>
        </div>
        {activeTab === 'profile' && (
          <Card className="mt-4">
            <h2 className="font-bold text-zinc-900 tracking-tight text-lg">Profile</h2>
            <div className="mt-4">
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </Card>
        )}
        {activeTab === 'notifications' && (
          <Card className="mt-4">
            <h2 className="font-bold text-zinc-900 tracking-tight text-lg">Notifications</h2>
            <div className="mt-4">
              <div
                className={cn(
                  'flex items-center justify-between py-2',
                  notifyEmail ? 'bg-zinc-100' : 'bg-zinc-200'
                )}
                onClick={() => setNotifyEmail(!notifyEmail)}
              >
                <span>Email notifications</span>
                <input
                  type="checkbox"
                  checked={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.checked)}
                />
              </div>
              <div
                className={cn(
                  'flex items-center justify-between py-2',
                  notifyPush ? 'bg-zinc-100' : 'bg-zinc-200'
                )}
                onClick={() => setNotifyPush(!notifyPush)}
              >
                <span>Push notifications</span>
                <input
                  type="checkbox"
                  checked={notifyPush}
                  onChange={(e) => setNotifyPush(e.target.checked)}
                />
              </div>
              <div
                className={cn(
                  'flex items-center justify-between py-2',
                  notifyWeekly ? 'bg-zinc-100' : 'bg-zinc-200'
                )}
                onClick={() => setNotifyWeekly(!notifyWeekly)}
              >
                <span>Weekly digest</span>
                <input
                  type="checkbox"
                  checked={notifyWeekly}
                  onChange={(e) => setNotifyWeekly(e.target.checked)}
                />
              </div>
            </div>
          </Card>
        )}
        {activeTab === 'appearance' && (
          <Card className="mt-4">
            <h2 className="font-bold text-zinc-900 tracking-tight text-lg">Appearance</h2>
            <div className="mt-4">
              <div className="flex space-x-4">
                <Button
                  variant={theme === 'light' ? 'primary' : 'secondary'}
                  onClick={() => setTheme('light')}
                >
                  Light
                </Button>
                <Button
                  variant={theme === 'dark' ? 'primary' : 'secondary'}
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </Button>
                <Button
                  variant={theme === 'system' ? 'primary' : 'secondary'}
                  onClick={() => setTheme('system')}
                >
                  System
                </Button>
              </div>
              <div className="mt-4">
                <Input
                  label="Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </div>
            </div>
          </Card>
        )}
      </div>
      {saved && (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-emerald-50 border-emerald-200 rounded-lg shadow-sm p-2 text-emerald-600">
          Saved!
        </div>
      )}
    </div>
  );
}