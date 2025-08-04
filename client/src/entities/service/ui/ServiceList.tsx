'use client';

import styles from './ServicePage.module.css';
interface Service {
  id: number;
  service: string;
  description: string;
  images: string;
}

interface ServiceListProps {
  services: Service[];
}

export default function ServicesList({ services }: ServiceListProps) {
  if (!services || services.length === 0) {
    return <p className={styles.noServices}>Нет доступных услуг</p>;
  }
  return (
    <div className={styles.servicesList}>
      {services.map((service) => {
        let descriptionItems: string[] = [];
        try {
          descriptionItems = JSON.parse(service.description);
        } catch (e) {
          console.error('Error parsing description:', e);
          descriptionItems = [service.description];
        }
        
        // Определяем класс для изображения в зависимости от количества пунктов
        const imageClass = `${styles.serviceImage} ${
          descriptionItems.length > 5 ? styles.largeImage : 
          descriptionItems.length > 3 ? styles.mediumImage : 
          styles.baseImage
        }`;

        return (
          <div key={service.id} className={styles.serviceItem}>
            <img
              src={`http://localhost:3001${service.images}`}
              alt={`Изображение услуги: ${service.service}`}
              className={imageClass}
            />
            <div className={styles.serviceContent}>
              <h2 className={styles.serviceTitle}>{service.service}</h2>
              <div className={styles.serviceDescription}>
                <ul>
                  {descriptionItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}