'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { updateMetaData, getAllMetaData } from '@/entities/metaData/api/metaDataThunkApi';
import { IMetaData } from '@/entities/metaData/model/metaDataTypes';
import {
  Button,
  Form,
  Input,
  message,
  Card,
  Layout,
  Typography,
  Spin,
  Tag,
  Space,
} from 'antd';
import { EditOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { metaDataSchema } from './metaDataSchema';

const { Text } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

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
  const [newKeyword, setNewKeyword] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<MetaDataFormValues>({
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
      themeColor: '#000000',
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
    if (metaDatas?.[index]) {
      const metaData = metaDatas[index] as IMetaData | null;
      if (metaData !== null) {
        const formattedData = {
          ...metaData,
          keywords: metaData.keywords || '',
        };
        reset(formattedData);
        setCurrentMeta(metaData);
      }
    }
  }, [metaDatas, index, reset]);

  useEffect(() => {
    if (isEditing) {
      reset(isEditing);
    }
  }, [isEditing, reset]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await dispatch(getAllMetaData()).unwrap();
        if (!result) {
          setApiError('Не удалось загрузить метаданные');
          message.error('Не удалось загрузить метаданные');
        }
      } catch (err) {
        setApiError('Ошибка при загрузке данных');
        message.error('Ошибка при загрузке данных');
        console.error('Ошибка загрузки:', err);
      }
    };
    loadData();
  }, [dispatch]);

  const onSubmit = async (data: MetaDataFormValues) => {
    if (!currentMeta?.id) {
      message.error('Cannot update: no current meta data id');
      console.error('Cannot update: no current meta data id');
      return;
    }

    try {
      const updatePayload = {
        ...data,
        id: currentMeta.id,
      };

      await dispatch(updateMetaData(updatePayload)).unwrap();
      message.success('Метаданные успешно обновлены!');
      setIsEditing(null);
    } catch (error) {
      const errorAsError = error as Error;
      message.error(`Ошибка обновления: ${errorAsError.message || 'Неизвестная ошибка'}`);
      console.error('Update failed:', {
        error: errorAsError,
        formData: data,
        currentMetaId: currentMeta?.id,
      });
    }
  };

  const handleAddKeyword = () => {
    if (newKeyword.trim()) {
      const currentKeywords = watch('keywords')
        ? watch('keywords')
            .split(',')
            .map((k) => k.trim())
        : [];
      const updatedKeywords = [...currentKeywords, newKeyword.trim()]
        .filter((k) => k)
        .join(',');
      setValue('keywords', updatedKeywords, { shouldValidate: true });
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (indexToRemove: number) => {
    const currentKeywords = watch('keywords')
      ? watch('keywords')
          .split(',')
          .map((k) => k.trim())
      : [];
    const updatedKeywords = currentKeywords
      .filter((_, i) => i !== indexToRemove)
      .join(',');
    setValue('keywords', updatedKeywords, { shouldValidate: true });
  };

  if (isLoading && !metaDatas) {
    return <Spin spinning={isLoading} tip="Загрузка метаданных..." />;
  }

  if (!metaDatas?.[index]) {
    return (
      <div style={{ padding: 16, color: '#69b1ff' }}>
        {apiError && <Text style={{ color: '#fd9b9b' }}>{apiError}</Text>}
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      <Content
        style={{
          width: '80%',
          margin: '120px auto',
          height: 'auto',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Card
          title={<Text style={{ color: '#69b1ff', fontSize: 18 }}>Метаданные</Text>}
          extra={
            <Button
              type="text"
              icon={<EditOutlined style={{ color: isEditing ? '#fd9b9b' : '#69b1ff' }} />}
              onClick={() => setIsEditing(isEditing ? null : metaDatas[index])}
              style={{ color: isEditing ? '#fd9b9b' : '#69b1ff', padding: 0 }}
            >
              {isEditing ? 'Отмена' : 'Редактировать'}
            </Button>
          }
          style={{
            background: 'transparent',
            padding: 16,
            borderRadius: 8,
            color: '#69b1ff',
          }}
          bodyStyle={{ padding: 16 }}
        >
          <Spin spinning={isLoading}>
            {isEditing ? (
              <Form
                layout="vertical"
                onFinish={handleSubmit(onSubmit)}
                style={{
                  color: '#69b1ff',
                  background: 'transparent',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                {/* Основные метаданные */}
                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Основные метаданные
                  </Text>
                  <Form.Item
                    label={<Text style={{ color: '#69b1ff' }}>Заголовок (title)</Text>}
                    validateStatus={errors.title ? 'error' : ''}
                    help={errors.title?.message}
                  >
                    <Controller
                      name="title"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="Заголовок страницы"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Описание (description)</Text>
                    }
                    validateStatus={errors.description ? 'error' : ''}
                    help={errors.description?.message}
                  >
                    <Controller
                      name="description"
                      control={control}
                      render={({ field }) => (
                        <TextArea
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="Мета-описание"
                          autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Ключевые слова (keywords)</Text>
                    }
                    validateStatus={errors.keywords ? 'error' : ''}
                    help={errors.keywords?.message}
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Space wrap>
                        {watch('keywords')
                          ? watch('keywords')
                              .split(',')
                              .map(
                                (keyword: string, i: number) =>
                                  keyword.trim() && (
                                    <Tag
                                      key={i}
                                      style={{
                                        background: '#475569',
                                        color: '#69b1ff',
                                        border: '1px solid #64748b',
                                        borderRadius: 4,
                                        padding: '2px 8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {keyword.trim()}
                                      <Button
                                        type="text"
                                        icon={
                                          <MinusOutlined
                                            style={{ color: '#fd9b9b', fontSize: 12 }}
                                          />
                                        }
                                        onClick={() => handleRemoveKeyword(i)}
                                        style={{ padding: 0, marginLeft: 8 }}
                                      />
                                    </Tag>
                                  ),
                              )
                          : null}
                      </Space>
                      <Space>
                        <TextArea
                          value={newKeyword}
                          onChange={(e) => setNewKeyword(e.target.value)}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                            width: 'auto',
                            minWidth: 200,
                          }}
                          placeholder="Новое ключевое слово"
                          autoSize={{ minRows: 1, maxRows: 3 }}
                        />
                        <Button
                          type="text"
                          icon={
                            <PlusOutlined style={{ color: '#69b1ff', fontSize: 12 }} />
                          }
                          onClick={handleAddKeyword}
                          style={{ padding: 0 }}
                        >
                          Добавить
                        </Button>
                      </Space>
                    </Space>
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Имя автора (author_name)</Text>
                    }
                    validateStatus={errors.author_name ? 'error' : ''}
                    help={errors.author_name?.message}
                  >
                    <Controller
                      name="author_name"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="Имя автора"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>URL автора (author_url)</Text>
                    }
                    validateStatus={errors.author_url ? 'error' : ''}
                    help={errors.author_url?.message}
                  >
                    <Controller
                      name="author_url"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="https://example.com"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Базовый URL (metadataBase)</Text>
                    }
                    validateStatus={errors.metadataBase ? 'error' : ''}
                    help={errors.metadataBase?.message}
                  >
                    <Controller
                      name="metadataBase"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="https://example.com"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        Альтернативный URL (alternates)
                      </Text>
                    }
                    validateStatus={errors.alternates ? 'error' : ''}
                    help={errors.alternates?.message}
                  >
                    <Controller
                      name="alternates"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="/alternate-path"
                        />
                      )}
                    />
                  </Form.Item>
                </div>

                {/* OpenGraph метаданные */}
                <div
                  style={{
                    marginBottom: 24,
                    borderTop: '1px solid #64748b',
                    paddingTop: 16,
                  }}
                >
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    OpenGraph метаданные
                  </Text>
                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        OG Заголовок (openGraph_title)
                      </Text>
                    }
                    validateStatus={errors.openGraph_title ? 'error' : ''}
                    help={errors.openGraph_title?.message}
                  >
                    <Controller
                      name="openGraph_title"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="OpenGraph заголовок"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        OG Описание (openGraph_description)
                      </Text>
                    }
                    validateStatus={errors.openGraph_description ? 'error' : ''}
                    help={errors.openGraph_description?.message}
                  >
                    <Controller
                      name="openGraph_description"
                      control={control}
                      render={({ field }) => (
                        <TextArea
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="OpenGraph описание"
                          autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>OG URL (openGraph_url)</Text>
                    }
                    validateStatus={errors.openGraph_url ? 'error' : ''}
                    help={errors.openGraph_url?.message}
                  >
                    <Controller
                      name="openGraph_url"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="https://example.com/og-path"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        Название сайта (openGraph_siteName)
                      </Text>
                    }
                    validateStatus={errors.openGraph_siteName ? 'error' : ''}
                    help={errors.openGraph_siteName?.message}
                  >
                    <Controller
                      name="openGraph_siteName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="Название сайта"
                        />
                      )}
                    />
                  </Form.Item>
                </div>

                {/* Визуальные метаданные */}
                <div
                  style={{
                    marginBottom: 24,
                    borderTop: '1px solid #64748b',
                    paddingTop: 16,
                  }}
                >
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Визуальные метаданные
                  </Text>
                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Цвет темы (themeColor)</Text>
                    }
                    validateStatus={errors.themeColor ? 'error' : ''}
                    help={errors.themeColor?.message}
                  >
                    <Space>
                      <Controller
                        name="themeColor"
                        control={control}
                        render={({ field }) => (
                          <Input
                            {...field}
                            style={{
                              background: '#334155',
                              color: '#69b1ff',
                              border: '1px solid #64748b',
                              borderRadius: 4,
                              width: 100,
                            }}
                            placeholder="#18120e"
                          />
                        )}
                      />
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 4,
                          border: '1px solid #64748b',
                          backgroundColor: watch('themeColor') || '#ffffff',
                        }}
                      />
                    </Space>
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: '#69b1ff' }}>Иконка (icons_icon)</Text>}
                    validateStatus={errors.icons_icon ? 'error' : ''}
                    help={errors.icons_icon?.message}
                  >
                    <Controller
                      name="icons_icon"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="/favicon.ico"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Ярлык (icons_shortcut)</Text>
                    }
                    validateStatus={errors.icons_shortcut ? 'error' : ''}
                    help={errors.icons_shortcut?.message}
                  >
                    <Controller
                      name="icons_shortcut"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="/favicon-16x16.png"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Apple иконка (icons_apple)</Text>
                    }
                    validateStatus={errors.icons_apple ? 'error' : ''}
                    help={errors.icons_apple?.message}
                  >
                    <Controller
                      name="icons_apple"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="/apple-touch-icon.png"
                        />
                      )}
                    />
                  </Form.Item>
                </div>

                {/* Гео метаданные */}
                <div
                  style={{
                    marginBottom: 24,
                    borderTop: '1px solid #64748b',
                    paddingTop: 16,
                  }}
                >
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Географические метаданные
                  </Text>
                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>Регион (other_geo_region)</Text>
                    }
                    validateStatus={errors.other_geo_region ? 'error' : ''}
                    help={errors.other_geo_region?.message}
                  >
                    <Controller
                      name="other_geo_region"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="RU-MOW"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        Название места (other_geo_placename)
                      </Text>
                    }
                    validateStatus={errors.other_geo_placename ? 'error' : ''}
                    help={errors.other_geo_placename?.message}
                  >
                    <Controller
                      name="other_geo_placename"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="Москва"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text style={{ color: '#69b1ff' }}>
                        Координаты (other_geo_position)
                      </Text>
                    }
                    validateStatus={errors.other_geo_position ? 'error' : ''}
                    help={errors.other_geo_position?.message}
                  >
                    <Controller
                      name="other_geo_position"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="55.7558;37.6173"
                        />
                      )}
                    />
                  </Form.Item>

                  <Form.Item
                    label={<Text style={{ color: '#69b1ff' }}>{'ICBM координаты'}</Text>}
                    validateStatus={errors.other_ICBM ? 'error' : ''}
                    help={errors.other_ICBM?.message}
                  >
                    <Controller
                      name="other_ICBM"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          style={{
                            background: '#334155',
                            color: '#69b1ff',
                            border: '1px solid #64748b',
                            borderRadius: 4,
                          }}
                          placeholder="55.7558, 37.6173"
                        />
                      )}
                    />
                  </Form.Item>
                </div>

                <Form.Item>
                  <Space>
                    <Button
                      type="text"
                      onClick={() => setIsEditing(null)}
                      style={{ color: '#fd9b9b', padding: 0 }}
                    >
                      Отмена
                    </Button>
                    <Button
                      type="text"
                      htmlType="submit"
                      loading={isLoading}
                      style={{ color: '#69b1ff', padding: 0 }}
                    >
                      Сохранить изменения
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            ) : (
              <div style={{ padding: 16 }}>
                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Заголовок
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.title || 'Не указано'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Описание
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.description || 'Не указано'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Ключевые слова
                  </Text>
                  <div
                    style={{
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.keywords ? (
                      <Space wrap>
                        {metaDatas[index]?.keywords.split(',').map(
                          (keyword: string, i: number) =>
                            keyword.trim() && (
                              <Tag
                                key={i}
                                style={{
                                  background: '#475569',
                                  color: '#69b1ff',
                                  border: '1px solid #64748b',
                                  borderRadius: 4,
                                  padding: '2px 8px',
                                }}
                              >
                                {keyword.trim()}
                              </Tag>
                            ),
                        )}
                      </Space>
                    ) : (
                      <Text style={{ color: '#69b1ff' }}>Не указаны</Text>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Автор
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.author_name || 'Не указана'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Ссылка на автора
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.author_url || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Основная метадата
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.metadataBase || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Альтернативные метаданные
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.alternates || 'Не указаны'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Заголовок OpenGraph
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.openGraph_title || 'Не указаны'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Описание OpenGraph
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.openGraph_description || 'Не указаны'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    URL OpenGraph
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.openGraph_url || 'Не указаны'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Название OpenGraph
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.openGraph_siteName || 'Не указаны'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Цвет темы
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span>{metaDatas[index]?.themeColor || 'Не указан'}</span>
                    {metaDatas[index]?.themeColor && (
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 4,
                          border: '1px solid #64748b',
                          backgroundColor: metaDatas[index]?.themeColor,
                        }}
                      />
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Иконка
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.icons_icon || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Короткая иконка
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.icons_shortcut || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Иконка Apple
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.icons_apple || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Другие регионы
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.other_geo_region || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Другие местоположения
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.other_geo_placename || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Другие позиции
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.other_geo_position || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Другие ICBM
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.other_ICBM || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Дата создания
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.createdAt || 'Не указан'}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <Text style={{ color: '#69b1ff', fontSize: 16, fontWeight: 'bold' }}>
                    Дата обновления
                  </Text>
                  <div
                    style={{
                      color: '#69b1ff',
                      padding: 12,
                      background: '#334155',
                      borderRadius: 4,
                      border: '1px solid #64748b',
                      marginTop: 8,
                    }}
                  >
                    {metaDatas[index]?.updatedAt || 'Не указан'}
                  </div>
                </div>
              </div>
            )}
          </Spin>
        </Card>
      </Content>
    </Layout>
  );
};
