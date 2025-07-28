import ServicesList from '@/entities/service/ui/ServiceList';

interface Service {
  id: number;
  service: string;
  description: string;
}

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      services = data.data || [];
      console.log('Services data:', services); 
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Наши услуги</h1>
      <ServicesList services={services} />
    </div>
  );
}
