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
    return <p className="text-gray-500">Нет доступных услуг</p>;
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
        return (
          <div key={service.id} className={styles.serviceItem}>
            <img
              // src={`https://placehold.co/200x200/EEE/333?text=${encodeURIComponent(
              //   service.images,
              // )}`}
              src={service.images}
              alt={`Изображение услуги: ${service.images}`}
              className={styles.serviceImage}
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
