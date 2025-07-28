'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { sendRecordingThunk } from '@/entities/recording/api/RecordingFormApi';
import type { RecordingFormData } from '@/entities/recording/model';
import styles from './RecordingForm.module.css';
import SuccessModal from '../SuccessModal/SuccessModal';

const FORM_STORAGE_KEY = 'recorder_form_draft';

export const RecordingForm = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RecordingFormData>();

  const onSubmit = async (data: RecordingFormData) => {
    try {
      const result = await dispatch(sendRecordingThunk(data)).unwrap();
      console.log('Успешный результат:', result);
      setModalOpen(true);
      setTextModal('Форма успешно отправлена!');
      reset();
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setModalOpen(true);
      setTextModal(`Ошибка: ${error || 'Возможно у вас включен VPN'}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.formTitle}>
          <span className={styles.mobileLineBreak}>
            Мы свяжемся с вами как можно скорее
          </span>
        </div>
        <div className={styles.formItem}>
          <input
            id="name"
            {...register('name', { required: 'Введите имя' })}
            className={styles.inputField}
            placeholder="Имя"
          />
          {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
        </div>
        <div className={styles.formItem}>
          <input
            type="tel"
            placeholder="Телефон"
            id="tel"
            {...register('tel', { required: 'Введите номер телефона' })}
            className={styles.inputField}
          />
          {errors.tel && <p className={styles.errorText}>{errors.tel.message}</p>}
        </div>

        <div className={styles.formItem}>
          <input
            placeholder="Сообщение"
            id="message"
            {...register('message')}
            className={styles.inputField}
          />
        </div>
        <label htmlFor="personalData" className={styles.checkboxLabel}>
          <input
            id="personalData"
            type="checkbox"
            className={styles.realCheckbox}
            {...register('personalData', { required: true })}
          />
          <span className={styles.customCheckbox}></span>
          <div>
            Я согласен на обработку персональных данных, с условиями{' '}
            <span className={styles.link}>Политики</span> ознакомлен
          </div>
        </label>
        {errors.personalData && (
          <p className={styles.errorText}>Обязательное соглашение</p>
        )}

        <label htmlFor="oferta" className={styles.checkboxLabel}>
          <input
            id="oferta"
            type="checkbox"
            className={styles.realCheckbox}
            {...register('oferta', { required: true })}
          />
          <span className={styles.customCheckbox}></span>
          <span>
            Я согласен с{' '}
            <span
              className={styles.link}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Офертой
            </span>
          </span>
        </label>
        {errors.oferta && <p className={styles.errorText}>Обязательное согласие</p>}
        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
          Записаться
        </button>
      </form>
      <SuccessModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        textModal={textModal}
      />
    </>
  );
};
