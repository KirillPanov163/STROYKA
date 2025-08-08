import styles from './page.module.css';
import HomeClient from './HomeClient';
import FAQPage from './faq/page';
import AchievementsPage from './achievements/AchievementsWidgets';
import Slider from '@/widgets/Slider/Slider';
import ContactsPage from './contacts/page';
import HeroSection from '@/entities/hero/HeroSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ВентСтройМонтаж | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

export default function Home() {
  return (
    <>
      {/* Прогресс-бар скролла */}
      <div className="scroll-progress" id="scroll-progress"></div>

      <div className={styles.page}>
        <div className="main-content-wrapper">
          <HeroSection />

          <div className="fade-in-up">
            <AchievementsPage />
          </div>

          <div className="section-divider"></div>

          <div
            className="fade-in-up delay-2"
            style={{
              textAlign: 'center',
              margin: '10rem 0 2rem',
              width: '100%',
            }}
          >
            <h2
              style={{
                fontSize: '2.3rem',
                fontWeight: 700,
                color: 'var(--text-on-dark)',
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block',
                paddingBottom: '1rem',
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto 1.5rem',
                textAlign: 'center',
                fontFamily:
                  'Inter, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              }}
            >
              Наши партнеры
              <span
                style={{
                  content: "''",
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  maxWidth: '1000px',
                  height: '3px',
                  background: 'var(--gradient-accent)',
                  borderRadius: '2px',
                }}
              ></span>
            </h2>
          </div>

          <div
            className="fade-in-up delay-2"
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 1rem 4rem',
              boxSizing: 'border-box',
            }}
          >
            <Slider />
          </div>

          <div className="section-divider"></div>

          <div className="fade-in-up delay-1">
            <ContactsPage />
          </div>
          <HomeClient />

          <div className="section-divider"></div>

          <div className="fade-in-up delay-3">
            <FAQPage />
          </div>
        </div>
      </div>
    </>
  );
}
