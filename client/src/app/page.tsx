import Image from 'next/image';
import styles from './page.module.css';
import BrandsSlider from '../pages/BrandsSlider';
import { RecordingForm } from '../features/recordingForm/RecordingForm';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Баннер */}
      <section className={styles.banner}>
        <Image
          src="/images/TheOffice_16.jpg"
          alt="Интерьер с вентиляцией"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.bannerText}>
          <h1>Вентиляция и кондиционеры для вашего дома и бизнеса</h1>
        </div>
      </section>

      {/* Наши достижения */}
      <section className={styles.achievements}>
        <button className={styles.achievementsBtn}>НАШИ ДОСТИЖЕНИЯ</button>
      </section>

      {/* Преимущества */}
      <section className={styles.advantages}>
        <div className={styles.advantageItem}>
          <span role="img" aria-label="Качество">
            🏆
          </span>
          <p>Гарантия качества</p>
        </div>
        <div className={styles.advantageItem}>
          <span role="img" aria-label="Скорость">
            ⚡
          </span>
          <p>Быстрый монтаж</p>
        </div>
        <div className={styles.advantageItem}>
          <span role="img" aria-label="Опыт">
            👷‍♂️
          </span>
          <p>Опытные специалисты</p>
        </div>
      </section>

      {/* Слайдер брендов */}
      <section className={styles.brands}>
        <BrandsSlider />
      </section>

      {/* Наши услуги */}
      <section className={styles.services}>
        <h2>Наши услуги</h2>
        <div className={styles.servicesList}>
          <div className={styles.serviceCard}>Монтаж вентиляции</div>
          <div className={styles.serviceCard}>Установка кондиционеров</div>
          <div className={styles.serviceCard}>Обслуживание систем</div>
          <div className={styles.serviceCard}>Проектирование</div>
        </div>
      </section>

      {/* Контакты и форма */}
      <section className={styles.contacts}>
        <div className={styles.contactsInfo}>
          <h3>Контакты</h3>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: info@ventcompany.ru</p>
          <p>Адрес: г. Москва, ул. Примерная, 1</p>
        </div>
        <div className={styles.contactsForm}>
          <RecordingForm />
        </div>
      </section>
    </div>
  );
}
