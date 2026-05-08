// TypeScript interfaces for EVERY entity in the FORGE spec
export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface Patient {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  dateOfBirth: string;
  medicalHistory: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface Doctor {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  specialty: string;
  experience: number;
  status: 'active' | 'inactive' | 'pending';
}

export interface Appointment {
  id: string;
  createdAt: string;
  updatedAt: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'rescheduled' | 'cancelled';
}

export interface Prescription {
  id: string;
  createdAt: string;
  updatedAt: string;
  patientId: string;
  doctorId: string;
  medication: string;
  dosage: string;
  status: 'active' | 'inactive' | 'pending';
}

export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';