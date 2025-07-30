export const dynamic = 'force-dynamic';
import ServicesList from '@/entities/service/ui/ServiceList';
import styles from './services-page.module.css';

interface Service {
  id: number;
  service: string;
  description: string;
  images: string;
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
      console.log(data, '===========================')
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }
  
  return (
    <div className={styles['services-page-container']}>
      <div className={styles['services-header']}>
        <h1 className={styles['services-title']}>
          Наши услуги
        </h1>
        <div className={styles['services-divider']}></div>
        <h2 className={styles['services-subtitle']}>
          Профессиональные строительные услуги высочайшего качества
        </h2>
      </div>
      <div className={styles['services-content']}>
        <ServicesList services={services} />
      </div>
    </div>
  );
}