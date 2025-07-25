'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/inputs';
import { Title } from '@/shared/ui/title';
import styles from './Feedback.module.css';

export const Feedback = () => {
  const [phone, setPhone] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ phone, selectedDays, selectedTime });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsCollapsed(true);
    }, 3000);
  };

  const toggleCollapse = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  if (isSubmitted) {
    return (
      <div className={`${styles.feedback} ${styles.successMessage}`}>
        <Title level={3} size="small" align="center">
          Спасибо за заявку!
        </Title>
        <p className={styles.subtitle}>Мы свяжемся с вами в указанное время</p>
      </div>
    );
  }

  if (isCollapsed) {
    return (
      <div className={styles.collapsedContainer}>
        <button
          className={styles.verticalButton}
          onClick={toggleCollapse}
          aria-label="Развернуть форму обратной связи"
        >
          <span>Оставить заявку</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.feedback}>
      <button
        className={styles.toggleButton}
        onClick={toggleCollapse}
        aria-label="Свернуть форму"
      >
        ×
      </button>

      <Title level={3} size="small" align="center">
        Оставьте заявку на звонок
      </Title>
      <br />

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedDays.includes('monday')}
              onChange={() => handleDayToggle('monday')}
              className={styles.checkbox}
            />
            <span>Не беспокоить в выходные</span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedTime}
              onChange={() => setSelectedTime(!selectedTime)}
              className={styles.checkbox}
            />
            <span>с 9:00 до 20:00</span>
          </label>
        </div>

        <Input
          value={phone}
          onChange={setPhone}
          placeholder="+7 (___) ___-__-__"
          type="text"
          inputMode="tel"
          required
          fullWidth
          size="medium"
        />

        <Button type="submit" variant="primary" size="medium" fullWidth>
          Заказать звонок
        </Button>

        <p className={styles.agreement}>
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>

        <div className={styles.credits}>
          <span>ВентСтройМонтаж</span>
        </div>
      </form>
    </div>
  );
};
