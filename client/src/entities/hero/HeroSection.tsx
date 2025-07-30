import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Динамический импорт клиентского компонента с отключением SSR
const HeroForm = dynamic(() => import('./HeroForm'), {
  ssr: false,
});

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Промышленная вентиляция и кондиционирование</h1>
          <p className={styles.heroDescription}>
            Проектирование, монтаж и обслуживание инженерных систем любой сложности.
            Работаем по всей России с гарантией качества.
          </p>
          
          {/* Используем клиентский компонент формы */}
          <HeroForm />
        </div>
        
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>📐</div>
            <span>Проектируем все инженерные системы</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🔧</div>
            <span>Монтаж любой сложности</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🛠️</div>
            <span>Обслуживание действующих систем</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
