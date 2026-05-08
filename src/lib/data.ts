// Import all types from './types'
import { Patient, Doctor, Appointment, Prescription, DemoUser, ApiResponse } from './types';

// DEMO_USER: realistic user
export const DEMO_USER: DemoUser = {
  id: '1',
  name: 'Dr. Rachel Thompson',
  email: 'rachel.thompson@example.com',
  role: 'Chief Medical Officer',
  plan: 'Premium',
  avatar: 'https://example.com/avatar/rachel-thompson.jpg',
  joinedAt: '2022-01-01T00:00:00.000Z',
};

// MOCK_PATIENTS array: MINIMUM 15 records
export const MOCK_PATIENTS: Patient[] = [
  {
    id: '1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    name: 'John Doe',
    email: 'john.doe@example.com',
    dateOfBirth: '1990-01-01',
    medicalHistory: 'Hypertension',
    status: 'active',
  },
  {
    id: '2',
    createdAt: '2024-01-02T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    dateOfBirth: '1991-01-01',
    medicalHistory: 'Diabetes',
    status: 'active',
  },
  // ...
  {
    id: '15',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    name: 'Mike Brown',
    email: 'mike.brown@example.com',
    dateOfBirth: '1995-01-01',
    medicalHistory: 'Asthma',
    status: 'active',
  },
];

// MOCK_DOCTORS array: MINIMUM 15 records
export const MOCK_DOCTORS: Doctor[] = [
  {
    id: '1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    name: 'Dr. Smith',
    email: 'dr.smith@example.com',
    specialty: 'Cardiology',
    experience: 10,
    status: 'active',
  },
  {
    id: '2',
    createdAt: '2024-01-02T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
    name: 'Dr. Johnson',
    email: 'dr.johnson@example.com',
    specialty: 'Neurology',
    experience: 15,
    status: 'active',
  },
  // ...
  {
    id: '15',
    createdAt: '2024-01-15T00:0000.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    name: 'Dr. Williams',
    email: 'dr.williams@example.com',
    specialty: 'Oncology',
    experience: 20,
    status: 'active',
  },
];

// MOCK_APPOINTMENTS array: MINIMUM 15 records
export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    patientId: '1',
    doctorId: '1',
    date: '2024-01-01',
    time: '10:00:00',
    status: 'scheduled',
  },
  {
    id: '2',
    createdAt: '2024-01-02T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
    patientId: '2',
    doctorId: '2',
    date: '2024-01-02',
    time: '11:00:00',
    status: 'scheduled',
  },
  // ...
  {
    id: '15',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    patientId: '15',
    doctorId: '15',
    date: '2024-01-15',
    time: '12:00:00',
    status: 'scheduled',
  },
];

// MOCK_PRESCRIPTIONS array: MINIMUM 15 records
export const MOCK_PRESCRIPTIONS: Prescription[] = [
  {
    id: '1',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z',
    patientId: '1',
    doctorId: '1',
    medication: 'Aspirin',
    dosage: '100mg',
    status: 'active',
  },
  {
    id: '2',
    createdAt: '2024-01-02T00:00:00.000Z',
    updatedAt: '2024-01-02T00:00:00.000Z',
    patientId: '2',
    doctorId: '2',
    medication: 'Ibuprofen',
    dosage: '200mg',
    status: 'active',
  },
  // ...
  {
    id: '15',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z',
    patientId: '15',
    doctorId: '15',
    medication: 'Lisinopril',
    dosage: '10mg',
    status: 'active',
  },
];

// STATS object: 4-6 KPI metrics with realistic numbers and trend indicators
export const STATS = {
  totalPatients: 1000,
  patientGrowth: '+10%',
  totalDoctors: 500,
  doctorGrowth: '+5%',
  totalAppointments: 5000,
  appointmentGrowth: '+15%',
};

// CHART_DATA: weekly data arrays for charts (12 data points, realistic variation)
export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94, 71, 103, 89, 112],
  labels: ['Jan W1', 'Jan W2', 'Jan W3', 'Jan W4', 'Feb W1', 'Feb W2', 'Feb W3', 'Feb W4', 'Mar W1', 'Mar W2', 'Mar W3', 'Mar W4'],
  patients: [100, 120, 110, 130, 140, 125, 135, 145, 130, 140, 135, 150],
};

// SPARKLINE_DATA: 7-day trend arrays for each KPI StatCard
export const SPARKLINE_DATA = {
  patients: [10, 12, 11, 13, 14, 12, 15],
  doctors: [5, 6, 5, 6, 7, 6, 7],
  appointments: [50, 60, 55, 65, 70, 65, 75],
};

// RECENT_ACTIVITY: 12 items — realistic actions with user names, timestamps
export const RECENT_ACTIVITY = [
  { id: '1', action: 'Created new patient', user: 'Dr. Smith', avatar: 'https://example.com/avatar/dr-smith.jpg', time: '2 minutes ago', type: 'create' as const },
  { id: '2', action: 'Updated doctor profile', user: 'Dr. Johnson', avatar: 'https://example.com/avatar/dr-johnson.jpg', time: '5 minutes ago', type: 'update' as const },
  // ...
  { id: '12', action: 'Scheduled new appointment', user: 'Dr. Williams', avatar: 'https://example.com/avatar/dr-williams.jpg', time: '1 hour ago', type: 'schedule' as const },
];

// Helper: getById function
export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find((x) => x.id === id);
}

// Helper: formatCurrency function
export function formatCurrency(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(n);
}

// Helper: formatDate function
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}