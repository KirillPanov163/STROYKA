'use client';
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

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
          
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input 
                type="tel" 
                placeholder="+7 (___) ___-__-__" 
                className={styles.phoneInput}
                required
              />
              <button type="submit" className={styles.ctaButton}>
                Заказать расчет
              </button>
            </div>
          </form>
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
