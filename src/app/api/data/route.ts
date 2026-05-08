import { Response } from 'next';
import { MOCK_PATIENTS, MOCK_DOCTORS, MOCK_APPOINTMENTS, STATS } from '@/lib/data';

export async function GET(): Promise<Response> {
  const data = {
    patients: MOCK_PATIENTS,
    doctors: MOCK_DOCTORS,
    appointments: MOCK_APPOINTMENTS,
    stats: STATS,
    total: MOCK_PATIENTS.length,
  };

  return new Response(JSON.stringify({ ok: true, data }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function POST({ request }: any): Promise<Response> {
  const body = await request.json();

  return new Response(JSON.stringify({ ok: true, message: 'Demo mode — data not persisted', received: body }), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function OPTIONS(): Promise<Response> {
  return new Response('OK', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    status: 200,
  });
}