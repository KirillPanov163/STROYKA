'use client';

import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useRouter } from 'next/navigation';
import { createFaq } from '@/entities/FAQ/api/faqThunkApi';
import { Button, Form, Input, Layout, Typography, Space, Card } from 'antd/es';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { faqSchema } from './faqSchema';
import { SubmitHandler } from 'react-hook-form';

const { Content } = Layout;
const { Text, Title } = Typography;
const { TextArea } = Input;

type FaqFormValues = z.infer<typeof faqSchema>;

export const FaqCreatePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answers: '',
    },
  });

  const [form] = Form.useForm();

  const onSubmit: SubmitHandler<FaqFormValues> = async (data) => {
    try {
      await dispatch(createFaq(data)).unwrap();
      reset();
      form.resetFields();
      router.push('/admin/menu/faq/all_answers');
    } catch (error) {
      console.error('Ошибка при создании:', error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      <Content
        style={{
          width: '80%',
          margin: '120px auto',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
          height: 'auto',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Card
          title={<Text style={{ color: '#69b1ff', fontSize: 18 }}>Добавить новый вопрос</Text>}
          style={{
            background: 'transparent',
            padding: 16,
            borderRadius: 8,
            color: '#69b1ff',
          }}
          styles={{ body: { padding: 16 } }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit(onSubmit)}
            style={{
              color: '#69b1ff',
              background: 'transparent',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <Form.Item
              label={<Text style={{ color: '#69b1ff' }}>Вопрос</Text>}
              validateStatus={errors.question ? 'error' : ''}
              help={errors.question?.message}
            >
              <Controller
                name="question"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Введите вопрос"
                    style={{
                      background: '#334155',
                      color: '#69b1ff',
                      border: '1px solid #64748b',
                      borderRadius: 4,
                    }}
                  />
                )}
              />
            </Form.Item>

            <Form.Item
              label={<Text style={{ color: '#69b1ff' }}>Ответ</Text>}
              validateStatus={errors.answers ? 'error' : ''}
              help={errors.answers?.message}
            >
              <Controller
                name="answers"
                control={control}
                render={({ field }) => (
                  <TextArea
                    {...field}
                    placeholder="Введите ответ"
                    rows={5}
                    style={{
                      background: '#334155',
                      color: '#69b1ff',
                      border: '1px solid #64748b',
                      borderRadius: 4,
                    }}
                  />
                )}
              />
            </Form.Item>

            <Form.Item>
              <Space style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="text"
                  onClick={() => router.push('/faq')}
                  style={{ color: '#fd9b9b', padding: 0 }}
                >
                  Отмена
                </Button>
                <Button
                  type="text"
                  htmlType="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  style={{ color: '#69b1ff', padding: 0 }}
                >
                  {isSubmitting ? 'Создание...' : 'Создать вопрос'}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};