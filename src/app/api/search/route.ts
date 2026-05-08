import { MOCK_PATIENTS, MOCK_DOCTORS } from '@/lib/data';

export async function GET({ request }: any): Promise<Response> {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  const type = url.searchParams.get('type');

  let results: any[] = [];

  if (query) {
    results = [...MOCK_PATIENTS, ...MOCK_DOCTORS].filter((item: any) => {
      return (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
        (item.email && item.email.toLowerCase().includes(query.toLowerCase()));
    });
  } else {
    results = [...MOCK_PATIENTS, ...MOCK_DOCTORS].slice(0, 5);
  }

  const response = {
    ok: true,
    data: {
      results: results.slice(0, 20),
      total: results.length,
      query: query,
    },
  };

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}