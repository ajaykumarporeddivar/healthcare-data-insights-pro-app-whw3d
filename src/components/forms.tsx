'use client';

import { useState } from 'react';
import { Button, Input, Badge } from '@/components/uiimport { Patient, Doctor, Appointment from '@/lib/types';
import { MOCK_PATIENTS, MOCK_DOCTORS, MOCK.APPOINTMENTS } from '@/lib/data';

export function CreateEntityForm {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!medicalHistory) newErrors.medicalHistory = 'Medical history is required';
    if (!status) newErrors.status = 'Status is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      // Add new patient to MOCK_PATIENTS array
      const newPatient: Patient = {
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        name,
        email,
        dateOfBirth,
        medicalHistory,
        status,
      };
      // Add the new patient to the data array
      // MOCK_PATIENTS.push(newPatient);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setDateOfBirth('');
    setMedicalHistory('');
    setStatus('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4">
      <h2 className="font-bold text-zinc-900 tracking-tight text-lg mb-2">Create Patient</h2>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="name">Name:</label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={errors.name}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="email">Email:</label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={errors.email}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="dateOfBirth">Date of Birth:</label>
        <Input
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
          error={errors.dateOfBirth}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="medicalHistory">Medical History:</label>
        <Input
          id="medicalHistory"
          type="text"
          value={medicalHistory}
          onChange={(event) => setMedicalHistory(event.target.value)}
          error={errors.medicalHistory}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          className="bg-white border border-zinc-200 rounded-md p-2"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
        {errors.status && <p className="text-red-600 text-sm mt-2">{errors.status}</p>}
      </div>
      <div className="flex flex-col mb-4">
        <Button type="submit" variant="primary">Create Patient</Button>
        <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
      </div>
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-md mb-4">
          <p className="text-emerald-600">Patient created successfully!</p>
        </div>
      )}
    </form>
  );
}

export interface FilterState {
  search: string;
  status: string;
  dateRange: string;
  sortBy: string;
  sortDir: 'asc' | 'desc';
}

export function SearchAndFilter({ onChange }: { onChange: (filters: FilterState) => void }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState('asc');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    onChange({ search: event.target.value, status, dateRange, sortBy, sortDir });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    onChange({ search, status: event.target.value, dateRange, sortBy, sortDir });
  };

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
    onChange({ search, status, dateRange: event.target.value, sortBy, sortDir });
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    onChange({ search, status, dateRange, sortBy: event.target.value, sortDir });
  };

  const handleSortDirChange = (event) => {
    setSortDir(event.target.value as 'asc' | 'desc');
    onChange({ search, status, dateRange, sortBy, sortDir: event.target.value as 'asc' | 'desc' });
  };

  return (
    <form className="flex flex-col mb-4">
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="search">Search:</label>
        <Input
          id="search"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search patients..."
          icon={<Lucide.Search />}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="status">Status:</label>
        <select
          id="status"
          value={status}
          onChange={handleStatusChange}
          className="bg-white border border-zinc-200 rounded-md p-2"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="dateRange">Date Range:</label>
        <Input
          id="dateRange"
          type="date"
          value={dateRange}
          onChange={handleDateRangeChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="sortBy">Sort By:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={handleSortByChange}
          className="bg-white border border-zinc-200 rounded-md p-2"
        >
          <option value="">Select Sort By</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="dateOfBirth">Date of Birth</option>
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-zinc-600 mb-2" htmlFor="sortDir">Sort Direction:</label>
        <select
          id="sortDir"
          value={sortDir}
          onChange={handleSortDirChange}
          className="bg-white border border-zinc-200 rounded-md p-2"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Button type="button" variant="outline" onClick={() => onChange({ search: '', status: '', dateRange: '', sortBy: '', sortDir: 'asc' })}>Clear Filters</Button>
    </form>
  );
}

export function ExportButton({ data }: { data: Patient[] }) {
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    const csv = data.map((patient) => Object.values(patient).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'patients.csv';
    a.click();
    setExported(true);
    setTimeout(() => {
      setExported(false);
    }, 2000);
  };

  return (
    <Button type="button" variant="primary" onClick={handleExport}>Export to CSV</Button>
    {exported && (
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-md mb-4">
        <p className="text-emerald-600">Exported!</p>
      </div>
    )}
  );
}