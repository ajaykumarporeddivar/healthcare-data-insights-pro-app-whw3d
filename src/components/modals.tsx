'use client';

import { useState } from 'react';
import { Modal, Badge, Button, Avatar } from '@/components/ui';
import { Patient, Doctor, Appointment } from '@/lib/types';
import { MOCK_PATIENTS, MOCK_DOCTORS, MOCK_APPOINTMENTS } from '@/lib/data';

export function EntityDetailModal({ item, open, onClose, title }: { item: Patient | Doctor | Appointment | null, open: boolean, onClose: () => void, title: string }) {
  if (!item) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title={title}>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label className="text-zinc-600 mb-2">{key}</label>
            {key === 'dateOfBirth' ? (
              <p className="text-zinc-900">{new Date(value).toLocaleDateString()}</p>
            ) : (
              <p className="text-zinc-900">{value}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Button type="button" variant="primary" onClick={() => console.log('Approve clicked')}>Approve</Button>
        <Button type="button" variant="outline" onClick={() => console.log('Archive clicked')}>Archive</Button>
        <Button type="button" variant="danger" onClick={() => console.log('Delete clicked')}>Delete</Button>
      </div>
      <Badge variant="info" className="mt-4">{item.status}</Badge>
    </Modal>
  );
}

export function ConfirmModal({ open, onClose, title, message, onConfirm, confirmLabel = 'Confirm', variant = 'info' }: { open: boolean, onClose: () => void, title: string, message: string, onConfirm: () => void, confirmLabel?: string, variant?: 'danger' | 'info' }) {
  const handleClose = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal open={open} onClose={handleClose} title={title}>
      <p className="text-zinc-900">{message}</p>
      <div className="flex justify-end mt-4">
        <Button type="button" variant={variant === 'danger' ? 'danger' : 'primary'} onClick={handleConfirm}>{confirmLabel}</Button>
        <Button type="button" variant="outline" onClick={handleClose}>Cancel</Button>
      </div>
    </Modal>
  );
}

export function CommandPalette({ open, onClose, items }: { open: boolean, onClose: () => void, items: { label: string, href: string, icon?: React.ReactNode, description?: string }[] }) {
  const [search, setSearch] = useState('');
  const filteredItems = items.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleItemSelect = (item) => {
    window.location.href = item.href;
  };

  return (
    <Modal open={open} onClose={onClose} title="Command Palette">
      <Input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
        icon={<Lucide.Search />}
      />
      <ul className="list-none mt-4">
        {filteredItems.map((item) => (
          <li key={item.label} className="py-2 cursor-pointer" onClick={() => handleItemSelect(item)}>
            {item.icon && <span className="mr-2">{item.icon}</span>}
            <span>{item.label}</span>
            {item.description && <span className="text-zinc-400 text-sm ml-2">{item.description}</span>}
          </li>
        ))}
      </ul>
    </Modal>
  );
}