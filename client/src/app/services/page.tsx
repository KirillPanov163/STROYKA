export const dynamic = 'force-dynamic';
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
    <div className="page-container">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Наши услуги
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Профессиональные строительные услуги высочайшего качества
          </p>
        </div>
        <ServicesList services={services} />
      </div>
    </div>
  );
}
