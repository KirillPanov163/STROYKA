import { Metadata } from 'next';
import AllWorksClient from './AllWorksClient';



export const metadata: Metadata = {
  title: 'ВентСтройМонтаж | Наши работы | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

export default function AllWorksPage() {
  return <AllWorksClient />;
}