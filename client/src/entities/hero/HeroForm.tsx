'use client';

import React from 'react';
import styles from './HeroSection.module.css';

const HeroForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const phone = formData.get('phone');
    console.log('Отправка номера:', phone);
    // Здесь будет логика отправки данных
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <input 
          type="tel" 
          name="phone"
          placeholder="+7 (___) ___-__-__" 
          className={styles.phoneInput}
          required
        />
        <button type="submit" className={styles.ctaButton}>
          Заказать расчет
        </button>
      </div>
    </form>
  );
};

export default HeroForm;
