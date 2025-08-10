import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';
export const dynamic = 'force-dynamic';
import ServicesList from '@/app/services/ui/ServiceList';
import styles from './services-page.module.css';

export const metadata: Metadata = {
  title: 'ВентСтройМонтаж | Услуги | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

interface Service {
  id: number;
  service: string;
  description: string;
  images: string;
}

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
      cache: 'no-store',
    }).then((data) => data.json());
    // const { data } = await fetch(`http://server:3001/api/service`, {
    //   cache: 'no-store',
    // }).then((data) => data.json());
    services = data || [];
    console.log('Services data:', data);
    console.log(data, '===========================');
  } catch (error) {
    console.error('Error fetching services:', error);
  }

  return (
    <div className={styles['services-page-container']}>
      <div className={styles['services-header']}>
        <h1 className={styles['services-title']}>Наши услуги</h1>
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
