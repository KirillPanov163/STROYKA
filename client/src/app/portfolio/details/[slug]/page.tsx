export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import WorkDetailsPage from './ClientPage';

export const metadata: Metadata = {
  title: 'ВентСтройМонтаж | Наша работа | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

export default function WorkDetails() {
  return <WorkDetailsPage />;
}
