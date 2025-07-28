'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/inputs';
import { Title } from '@/shared/ui/title';
import styles from './Feedback.module.css';
import { sendRecordingThunk } from '@/entities/recording/api/RecordingFormApi';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';

export const Feedback = () => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const selectedTimeText = selectedTime ? 'с 9:00 до 20:00' : 'не указано';
      const selectedDaysText =
        selectedDays.length > 0 ? selectedDays.join(', ') : 'не указаны';

      await dispatch(
        sendRecordingThunk({
          name: 'Форма обратной связи',
          tel: phone,
          message: `Предпочтительное время звонка: ${selectedTimeText}. Дни: ${selectedDaysText}`,
          personalData: 'true',
          oferta: 'true',
        }),
      ).unwrap();

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsCollapsed(true);
      }, 3000);
    } catch (err) {
      setError('Ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      console.error('Ошибка отправки формы:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleCollapse = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  if (isSubmitted) {
    return (
      <div className={`${styles.feedback} ${styles.successMessage}`}>
        <Title level={3} size="sm" align="center">
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
          disabled={isLoading}
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
        disabled={isLoading}
      >
        ×
      </button>

      <Title level={3} size="sm" align="center">
        Оставьте заявку на звонок
      </Title>
      <br />

      {error && <p className={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedDays.includes('monday')}
              onChange={() => handleDayToggle('monday')}
              className={styles.checkbox}
              disabled={isLoading}
            />
            <span>Не беспокоить в выходные дни</span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedTime}
              onChange={() => setSelectedTime(!selectedTime)}
              className={styles.checkbox}
              disabled={isLoading}
            />
            <span>с 9:00 до 20:00</span>
          </label>
        </div>

        <Input
          value={phone}
          // onChange={setPhone}
          placeholder="+7 (___) ___-__-__"
          type="text"
          inputMode="tel"
          required
          fullWidth
          // size="md"
          disabled={isLoading}
        />

        <Button
          type="submit"
          variant="primary"
          size="md"
          fullWidth
          isLoading={isLoading}
          disabled={isLoading}
        >
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
