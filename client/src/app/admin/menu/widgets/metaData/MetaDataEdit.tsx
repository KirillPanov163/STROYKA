'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { updateMetaData, getAllMetaData } from '@/entities/metaData/api/metaDataThunkApi';
import { IMetaData } from '@/entities/metaData/model/metaDataTypes';
import styles from './MetaDataView.module.css';
import {
  Button,
  Input,
  Textarea,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  AlertDialog,
} from '@/shared/ui';
import { Form, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { metaDataSchema } from './metaDataSchema';
import { is } from 'zod/locales';

type MetaDataFormValues = z.infer<typeof metaDataSchema>;

interface MetaDataEditorProps {
  index: number;
}

export const MetaDataEditor = ({ index }: MetaDataEditorProps) => {
  const dispatch = useAppDispatch();
  const { metaDatas, isLoading } = useAppSelector((state) => state.metaData);
  const [isEditing, setIsEditing] = useState<IMetaData | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [currentMeta, setCurrentMeta] = useState<IMetaData | null>(null);

  const metaDataForm = useForm<z.infer<typeof metaDataSchema>>({
    resolver: zodResolver(metaDataSchema),
    defaultValues: {
      id: index,
      title: '',
      description: '',
      keywords: '',
      author_name: '',
      author_url: '',
      metadataBase: '',
      alternates: '',
      openGraph_title: '',
      openGraph_description: '',
      openGraph_url: '',
      openGraph_siteName: '',
      themeColor: '',
      icons_icon: '',
      icons_shortcut: '',
      icons_apple: '',
      other_geo_region: '',
      other_geo_placename: '',
      other_geo_position: '',
      other_ICBM: '',
    },
  });

  useEffect(() => {
    dispatch(getAllMetaData());
  }, [dispatch]);

  useEffect(() => {
    if (isEditing) {
      metaDataForm.reset({
        id: index,
        title: isEditing.title || '',
        description: isEditing.description || '',
        keywords: isEditing.keywords || '',
        author_name: isEditing.author_name || '',
        author_url: isEditing.author_url || '',
        metadataBase: isEditing.metadataBase || '',
        alternates: isEditing.alternates || '',
        openGraph_title: isEditing.openGraph_title || '',
        openGraph_description: isEditing.openGraph_description || '',
        openGraph_url: isEditing.openGraph_url || '',
        openGraph_siteName: isEditing.openGraph_siteName || '',
        themeColor: isEditing.themeColor || '#000000',
        icons_icon: isEditing.icons_icon || '',
        icons_shortcut: isEditing.icons_shortcut || '',
        icons_apple: isEditing.icons_apple || '',
        other_geo_region: isEditing.other_geo_region || '',
        other_geo_placename: isEditing.other_geo_placename || '',
        other_geo_position: isEditing.other_geo_position || '',
        other_ICBM: isEditing.other_ICBM || '',
      });
    }
  }, [isEditing, metaDataForm, index]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await dispatch(getAllMetaData()).unwrap();
        if (!result) {
          setApiError('Не удалось загрузить метаданные');
        }
      } catch (err) {
        setApiError('Ошибка при загрузке данных');
        console.error('Ошибка загрузки:', err);
      }
    };
    loadData();
  }, [dispatch]);

  useEffect(() => {
    if (metaDatas?.[index]) {
      const metaData = metaDatas[index] as IMetaData | null;
      if (metaData !== null) {
        metaDataForm.reset(metaData);
        setCurrentMeta(metaData); // Обновляем currentMeta
      }
    }
  }, [metaDatas, index, metaDataForm]);

  const handleUpdate = async (data: MetaDataFormValues) => {
    if (!currentMeta?.id) {
      console.error('Cannot update: no current meta data id');
      return;
    }

    try {
      const updatePayload = {
        ...data,
        id: currentMeta.id, // Добавляем id из currentMeta
      };

      console.log('Update payload:', updatePayload); // Логируем данные перед отправкой

      const result = await dispatch(updateMetaData(updatePayload)).unwrap();

      if (!result?.data) {
        throw new Error('Server returned empty response');
      }

      setIsEditing(null);
      alert('Метаданные успешно обновлены!');
    } catch (error) {
      const errorAsError = error as Error;
      console.error('Update failed:', {
        error: errorAsError,
        formData: data,
        currentMetaId: currentMeta?.id,
      });
      alert(`Ошибка обновления: ${errorAsError.message || 'Неизвестная ошибка'}`);
    }
  };

  if (isLoading && !metaDatas) {
    return <div className="p-4">Загрузка метаданных...</div>;
  }

  if (!metaDatas?.[index]) {
    return (
      <div className="p-4">
        <AlertDialog>
          Метаданные не найдены для индекса {index}
          {apiError && <div className="text-sm text-red-500">{apiError}</div>}
        </AlertDialog>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Метаданные</h2>
        <Button
          onClick={() => setIsEditing(metaDatas[index])}
          variant={isEditing ? 'secondary' : 'primary'}
        >
          {isEditing ? 'Отменить' : 'Редактировать'}
        </Button>
      </div>

      {isEditing ? (
        <FormProvider {...metaDataForm}>
          <form onSubmit={metaDataForm.handleSubmit(handleUpdate)} className="space-y-4">
            {/* Основные метаданные */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Основные метаданные</h3>
              <FormItem>
                <FormLabel>Заголовок (title)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('title')}
                    placeholder="Заголовок страницы"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Описание (description)</FormLabel>
                <FormControl>
                  <Textarea
                    {...metaDataForm.register('description')}
                    placeholder="Мета-описание"
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Ключевые слова (keywords)</FormLabel>
                <FormControl>
                  <Textarea
                    {...metaDataForm.register('keywords')}
                    placeholder="Ключевые слова через запятую"
                    rows={2}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Имя автора (author_name)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('author_name')}
                    placeholder="Имя автора"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>URL автора (author_url)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('author_url')}
                    placeholder="https://example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Базовый URL (metadataBase)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('metadataBase')}
                    placeholder="https://example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Альтернативный URL (alternates)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('alternates')}
                    placeholder="/alternate-path"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* OpenGraph метаданные */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium text-lg">OpenGraph метаданные</h3>

              <FormItem>
                <FormLabel>OG Заголовок (openGraph_title)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('openGraph_title')}
                    placeholder="OpenGraph заголовок"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>OG Описание (openGraph_description)</FormLabel>
                <FormControl>
                  <Textarea
                    {...metaDataForm.register('openGraph_description')}
                    placeholder="OpenGraph описание"
                    rows={3}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>OG URL (openGraph_url)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('openGraph_url')}
                    placeholder="https://example.com/og-path"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Название сайта (openGraph_siteName)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('openGraph_siteName')}
                    placeholder="Название сайта"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* Визуальные метаданные */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium text-lg">Визуальные метаданные</h3>

              <FormItem>
                <FormLabel>Цвет темы (themeColor)</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      {...metaDataForm.register('themeColor')}
                      placeholder="#18120e"
                      className="w-24"
                    />
                    <div
                      className="w-8 h-8 rounded border"
                      style={{
                        backgroundColor: metaDataForm.watch('themeColor') || '#ffffff',
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Иконка (icons_icon)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('icons_icon')}
                    placeholder="/favicon.ico"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Ярлык (icons_shortcut)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('icons_shortcut')}
                    placeholder="/favicon-16x16.png"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Apple иконка (icons_apple)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('icons_apple')}
                    placeholder="/apple-touch-icon.png"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            {/* Гео метаданные */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium text-lg">Географические метаданные</h3>

              <FormItem>
                <FormLabel>Регион (other_geo_region)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('other_geo_region')}
                    placeholder="RU-MOW"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Название места (other_geo_placename)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('other_geo_placename')}
                    placeholder="Москва"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>Координаты (other_geo_position)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('other_geo_position')}
                    placeholder="55.7558;37.6173"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>

              <FormItem>
                <FormLabel>ICBM координаты (other_ICBM)</FormLabel>
                <FormControl>
                  <Input
                    {...metaDataForm.register('other_ICBM')}
                    placeholder="55.7558, 37.6173"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsEditing(null)}
              >
                Отмена
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Сохранение...' : 'Сохранить изменения'}
              </Button>
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className={styles.container}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Заголовок</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.title || 'Не указано'}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Описание</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.description || 'Не указано'}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Ключевые слова</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.keywords ? (
                <div className={styles.keywords}>
                  {metaDatas[index]?.keywords
                    .split(',')
                    .map((keyword: string, i: number) => (
                      <span key={i} className={styles.keyword}>
                        {keyword.trim()}
                      </span>
                    ))}
                </div>
              ) : (
                'Не указаны'
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Автор</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.author_name || 'Не указана'}
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Ссылка на автора</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.author_url || 'Не указан'}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Основная метадата</h3>
            <div className={styles.sectionContent}>
              {metaDatas[index]?.metadataBase || 'Не указан'}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Альтернативные метаданные</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.alternates || 'Не указаны'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Заголовок OpenGraph</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.openGraph_title || 'Не указаны'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Описание OpenGraph</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.openGraph_description || 'Не указаны'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>URL OpenGraph</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.openGraph_url || 'Не указаны'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Название OpenGraph</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.openGraph_siteName || 'Не указаны'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Цвет темы</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.themeColor || 'Не указан'}</span>
                {metaDatas[index]?.themeColor && (
                  <div
                    className="w-6 h-6 rounded border"
                    style={{ backgroundColor: metaDatas[index]?.themeColor }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}> Иконка</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.icons_icon || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Короткая иконка</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.icons_shortcut || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Иконка Apple</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.icons_apple || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Другие регионы </h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.other_geo_region || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Другие местоположения</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.other_geo_placename || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Другие позиции</h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.other_geo_position || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Другие ICBM </h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.other_ICBM || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Дата создания </h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.createdAt || 'Не указан'}</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Дата обновления </h3>
            <div className={styles.sectionContent}>
              <div className="flex items-center gap-2">
                <span>{metaDatas[index]?.updatedAt || 'Не указан'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
