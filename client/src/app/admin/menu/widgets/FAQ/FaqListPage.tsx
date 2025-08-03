'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { fetchFaqs, deleteFaq, updateFaq } from '@/entities/FAQ/api/faqThunkApi';
import { Faq } from '@/entities/FAQ/model/faqTypes';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faqSchema } from './faqSchema';
import { z } from 'zod';
import {
  Button,
  Form,
  Input,
  Layout,
  Typography,
  Space,
  Card,
  Table,
  Spin,
  Modal,
  message,
} from 'antd/es';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Controller } from 'react-hook-form';

const { Content } = Layout;
const { Text, Title } = Typography;
const { TextArea } = Input;

type FaqFormValues = z.infer<typeof faqSchema>;

export const FaqListPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: faqs, status, error } = useAppSelector((state) => state.faq);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const editForm = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answers: '',
    },
  });

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  useEffect(() => {
    if (editingFaq) {
      editForm.reset({
        question: editingFaq.question || '',
        answers: editingFaq.answers || '',
      });
      form.setFieldsValue({
        question: editingFaq.question || '',
        answers: editingFaq.answers || '',
      });
    }
  }, [editingFaq, editForm, form]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  const handleUpdate: SubmitHandler<FaqFormValues> = async (data) => {
    if (!editingFaq) return;
    try {
      await dispatch(
        updateFaq({
          id: editingFaq.id,
          ...data,
        }),
      ).unwrap();
      message.success('Вопрос обновлён');
      setEditingFaq(null);
      setIsModalVisible(false);
      editForm.reset();
      form.resetFields();
    } catch (error) {
      message.error('Ошибка при обновлении');
      console.error('Ошибка при обновлении:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await dispatch(deleteFaq(id)).unwrap();
      message.success('Вопрос удалён');
    } catch (error) {
      message.error('Ошибка при удалении');
      console.error('Ошибка при удалении:', error);
    }
  };

  const handleEdit = (faq: Faq) => {
    setEditingFaq(faq);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setEditingFaq(null);
    setIsModalVisible(false);
    editForm.reset();
    form.resetFields();
  };

  const navigateToCreate = () => {
    router.push('/admin/menu/faq/add_answers');
  };

  const columns = [
    {
      title: 'Вопрос',
      dataIndex: 'question',
      key: 'question',
      width: 200,
      render: (text: string) => (
        <Text style={{ color: '#69b1ff', fontWeight: 'bold' }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Ответ',
      dataIndex: 'answers',
      key: 'answers',
      render: (text: string) => (
        <Text style={{ color: '#69b1ff' }} ellipsis={{ tooltip: text }}>
          {text || '-'}
        </Text>
      ),
    },
    {
      title: 'Действия',
      key: 'actions',
      width: 150,
      render: (_: any, record: Faq) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined style={{ color: '#69b1ff' }} />}
            onClick={() => handleEdit(record)}
            style={{ color: '#69b1ff', padding: 0 }}
          />
          <Button
            type="text"
            icon={<DeleteOutlined style={{ color: '#fd9b9b' }} />}
            onClick={() => handleDelete(record.id)}
            style={{ color: '#fd9b9b', padding: 0 }}
          />
        </Space>
      ),
    },
  ];

  if (status === 'loading') {
    return (
      <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
        <Content
          style={{
            width: '80%',
            margin: '120px auto',
            background:
              'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
            height: 'auto',
            padding: 16,
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin />
        </Content>
      </Layout>
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
          title={
            <Text style={{ color: '#69b1ff', fontSize: 18 }}>
              Управление вопросами
            </Text>
          }
          extra={
            <Button
              type="text"
              icon={<PlusOutlined style={{ color: '#69b1ff' }} />}
              onClick={navigateToCreate}
              style={{ color: '#69b1ff', padding: 0 }}
            >
              Добавить вопрос
            </Button>
          }
          style={{
            background: 'transparent',
            padding: 16,
            borderRadius: 8,
            color: '#69b1ff',
          }}
          styles={{ body: { padding: 16 } }}
        >
          <Spin spinning={(status as string) === 'loading'}>
            <Table
              columns={columns}
              dataSource={faqs}
              rowKey={(record) => record.id.toString()}
              pagination={{ pageSize: 5 }}
              style={{ background: 'transparent' }}
              rowClassName={() => 'custom-table-row'}
              locale={{
                emptyText: (
                  <Text style={{ color: '#69b1ff' }}>Нет данных</Text>
                ),
              }}
              components={{
                header: {
                  cell: (props: any) => (
                    <th
                      {...props}
                      style={{
                        background: 'transparent',
                        color: '#69b1ff',
                        borderBottom: '1px solid #64748b',
                      }}
                    />
                  ),
                },
                body: {
                  row: (props: any) => (
                    <tr
                      {...props}
                      style={{
                        background: 'transparent',
                        color: '#69b1ff',
                        borderBottom: '1px solid #64748b',
                      }}
                    />
                  ),
                  cell: (props: any) => (
                    <td
                      {...props}
                      style={{
                        background: 'transparent',
                        color: '#69b1ff',
                        borderBottom: '1px solid #64748b',
                      }}
                    />
                  ),
                },
              }}
            />
          </Spin>

          <Modal
            title={
              <Text style={{ color: '#69b1ff', fontSize: 18, fontWeight: 'bold' }}>
                Редактирование вопроса
              </Text>
            }
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={600}
            style={{
              background:
                'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
              borderRadius: 8,
            }}
          >
            <FormProvider {...editForm}>
              <Form
                form={form}
                layout="vertical"
                onFinish={editForm.handleSubmit(handleUpdate)}
                style={{
                  color: '#69b1ff',
                  background:
                    'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Вопрос</Text>}
                  validateStatus={editForm.formState.errors.question ? 'error' : ''}
                  help={editForm.formState.errors.question?.message}
                >
                  <Controller
                    name="question"
                    control={editForm.control}
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
                  validateStatus={editForm.formState.errors.answers ? 'error' : ''}
                  help={editForm.formState.errors.answers?.message}
                >
                  <Controller
                    name="answers"
                    control={editForm.control}
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
                      onClick={handleCancel}
                      style={{ color: '#fd9b9b', padding: 0 }}
                    >
                      Отмена
                    </Button>
                    <Button
                      type="text"
                      htmlType="submit"
                      loading={editForm.formState.isSubmitting}
                      disabled={editForm.formState.isSubmitting}
                      style={{ color: '#69b1ff', padding: 0 }}
                    >
                      {editForm.formState.isSubmitting ? 'Сохранение...' : 'Сохранить'}
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </FormProvider>
          </Modal>
        </Card>
      </Content>
    </Layout>
  );
};