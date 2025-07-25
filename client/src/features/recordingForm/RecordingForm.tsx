"use client";

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './RecordingForm.module.css';
import SuccessModal from '../SuccessModal/SuccessModal';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { sendRecordingThunk } from '@/entities/recording/api/RecordingFormApi';


export interface RecordingFormData {
  name?: string;
  tel: string;
  message?: string;
  personalData: boolean;
  oferta: boolean;
}

const FORM_STORAGE_KEY = 'recording_form_draft';
const MAX_SUBMISSIONS = 5;
const STORAGE_KEY = 'recording_submissions';

export const RecordingForm = (): React.JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textModal, setTextModal] = useState('');
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<RecordingFormData>({
    defaultValues: {
      personalData: false,
      oferta: false
    }
  });

  // Восстановление черновика
  useEffect(() => {
    const draft = localStorage.getItem(FORM_STORAGE_KEY);
    if (draft) {
      try {
        const parsed = JSON.parse(draft) as RecordingFormData;
        Object.entries(parsed).forEach(([key, value]) => {
          setValue(key as keyof RecordingFormData, value);
        });
      } catch {
        // ignore
      }
    }
  }, [setValue]);

  // Сохранение черновика
  useEffect(() => {
    const subscription = watch((values) => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(values));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const getSubmissions = (): RecordingFormData[] => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  
  const saveSubmission = (submission: RecordingFormData) => {
    const submissions = getSubmissions();
    submissions.push(submission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
  };

  const onSubmit = async (data: RecordingFormData) => {
    
    const existingSubmissions = getSubmissions();

    if (existingSubmissions.length >= MAX_SUBMISSIONS) {
      dispatch(sendRecordingThunk(data))
      setTextModal('Вы уже отправили максимальное количество заявок');
      setModalOpen(true);
      return;
    }

    try {
      
      console.log('Отправка данных:', data);
      
      saveSubmission(data);
      reset();
      setModalOpen(true);
      setTextModal('Форма успешно отправлена!');
      localStorage.removeItem(FORM_STORAGE_KEY);
    } catch (error) {
      setModalOpen(true);
      setTextModal('Ошибка при отправке формы');
      console.error('Ошибка:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.title}>Записаться на консультацию</h2>
        
        <div className={styles.field}>
          <input
            {...register('name')}
            placeholder="Ваше имя"
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <input
            {...register('tel', { 
              required: 'Телефон обязателен',
              pattern: {
                value: /^(\+7|8)\d{10}$/,
                message: 'Введите корректный телефон'
              }
            })}
            placeholder="Телефон (89213681592)"
            className={`${styles.input} ${errors.tel ? styles.error : ''}`}
          />
          {errors.tel && <p className={styles.errorText}>{errors.tel.message}</p>}
        </div>

        <div className={styles.field}>
          <input
            {...register('message')}
            placeholder="Ваше сообщение"
            className={styles.input}
            
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              {...register('personalData', { required: 'Необходимо согласие' })}
              className={styles.checkbox}
            />
            <span>Согласие на обработку персональных данных</span>
          </label>
          {errors.personalData && (
            <p className={styles.errorText}>{errors.personalData.message}</p>
          )}
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              {...register('oferta', { required: 'Необходимо согласие' })}
              className={styles.checkbox}
            />
            <span>Принимаю условия оферты</span>
          </label>
          {errors.oferta && (
            <p className={styles.errorText}>{errors.oferta.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
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