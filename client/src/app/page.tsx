import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './page.module.css';
import { RecordingForm } from '../features/recordingForm/RecordingForm';

// Динамический импорт react-slick (чтобы избежать SSR проблем)
const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function Home() {
  // Настройки для react-slick
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.page}>
      {/* Баннер */}
      <section className={styles.banner}>
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
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
        <Slider {...sliderSettings}>
          <div className={styles.brandSlide}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Mitsubishi_logo.svg"
              alt="Mitsubishi"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.brandSlide}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Electrolux_logo.svg"
              alt="Electrolux"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.brandSlide}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
              alt="Samsung"
              width={100}
              height={40}
            />
          </div>
          <div className={styles.brandSlide}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Subaru_logo.svg"
              alt="Subaru"
              width={100}
              height={40}
            />
          </div>
        </Slider>
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
