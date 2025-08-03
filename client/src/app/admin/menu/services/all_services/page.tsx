'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import {
  Button,
  Modal,
  Upload,
  Table,
  Spin,
  Form,
  Input,
  message,
  Space,
  Card,
  Image,
  List,
  Typography,
  Layout,
} from 'antd/es';
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from '../../../../../entities/service/api/serviceThunkApi';
import { clearCurrentService } from '../../../../../entities/service/slice/serviceSlice';
import { Service } from '../../../../../entities/service/model/serviceTypes';

const { Text } = Typography;
const { Content } = Layout;
const { TextArea } = Input;

const ServiceManager = () => {
  const dispatch = useAppDispatch();
  const { services, currentService, loading, error } = useAppSelector(
    (state) => state.service,
  );
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (currentService && editMode) {
      let parsedDescriptions: string[] = [];

      try {
        const description = currentService.description;
        if (description !== undefined) {
          parsedDescriptions = JSON.parse(description);
          if (!Array.isArray(parsedDescriptions)) {
            parsedDescriptions = [description];
          }
        } else {
          parsedDescriptions = [];
        }
      } catch {
        parsedDescriptions = [currentService.description || ''];
      }

      form.setFieldsValue({
        service: currentService.service,
        description: parsedDescriptions,
      });

      if (currentService.images) {
        setFileList([
          {
            uid: '-1',
            name: 'current-image',
            status: 'done',
            url: currentService.images,
          },
        ]);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [currentService, editMode, form]);

  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditMode(false);
    dispatch(clearCurrentService());
    form.resetFields();
    setFileList([]);
  };

  const handleCreate = () => {
    setEditMode(false);
    dispatch(clearCurrentService());
    showModal();
  };

  const handleEdit = (id: number) => {
    dispatch(getServiceById(id));
    setEditMode(true);
    showModal();
  };

  const handleView = (id: number) => {
    dispatch(getServiceById(id));
    setEditMode(false);
    showModal();
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = async () => {
    if (deleteId !== null) {
      try {
        await dispatch(deleteService(deleteId)).unwrap();
        message.success('Услуга удалена');
        setIsDeleteModalVisible(false);
        dispatch(getAllServices());
      } catch (err) {
        message.error('Ошибка при удалении');
        console.error('Ошибка при удалении:', err);
        setIsDeleteModalVisible(false);
      }
    }
  };

  const onFinish = async (
    values: Omit<Service, 'id' | 'images' | 'createdAt' | 'updatedAt'>,
  ) => {
    const formData = new FormData();

    if (Array.isArray(values.description)) {
      formData.append('description', JSON.stringify(values.description));
    } else {
      formData.append('description', values.description || '');
    }

    formData.append('service', values.service || '');

    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append('images', fileList[0].originFileObj);
    }

    try {
      if (editMode && currentService) {
        await dispatch(updateService({ id: currentService.id, formData })).unwrap();
        message.success('Услуга обновлена');
      } else {
        await dispatch(createService(formData)).unwrap();
        message.success('Услуга создана');
      }
      handleCancel();
      dispatch(getAllServices());
    } catch (err) {
      message.error('Ошибка при сохранении');
      console.error('Ошибка:', err);
    }
  };

  const columns = [
    {
      title: 'Название услуги',
      dataIndex: 'service',
      key: 'service',
      render: (text: string) => (
        <Text style={{ color: '#69b1ff', fontWeight: 'bold' }}>{text}</Text>
      ),
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      render: (text: string) => {
        try {
          const parsed = JSON.parse(text || '[]');
          return (
            <Text style={{ color: '#69b1ff' }}>
              {Array.isArray(parsed) ? parsed.join(', ') : text}
            </Text>
          );
        } catch {
          return <Text style={{ color: '#69b1ff' }}>{text}</Text>;
        }
      },
      ellipsis: true,
    },
    {
      title: 'Изображение',
      dataIndex: 'images',
      key: 'images',
      render: (image: string) =>
        image ? (
          <Image
            src={image}
            width={50}
            height={50}
            style={{ objectFit: 'cover', borderRadius: 4 }}
            preview={{ src: image }}
          />
        ) : null,
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: Service) => (
        <Space>
          <Button
            type="text"
            icon={<EyeOutlined style={{ color: '#69b1ff' }} />}
            onClick={() => handleView(record.id)}
            style={{ color: '#69b1ff', padding: 0 }}
          />
          <Button
            type="text"
            icon={<EditOutlined style={{ color: '#69b1ff' }} />}
            onClick={() => handleEdit(record.id)}
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

  const uploadProps = {
    onRemove: () => setFileList([]),
    beforeUpload: (file: RcFile) => {
      setFileList([
        {
          uid: Math.random().toString(36).substring(2),
          name: file.name,
          status: 'done',
          originFileObj: file,
        },
      ]);
      return false;
    },
    fileList,
    maxCount: 1,
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
          title={<Text style={{ color: '#69b1ff', fontSize: 18 }}>Управление услугами</Text>}
          extra={
            <Button
              type="text"
              icon={<PlusOutlined style={{ color: '#69b1ff' }} />}
              onClick={handleCreate}
              style={{ color: '#69b1ff', padding: 0 }}
            >
              Добавить услугу
            </Button>
          }
          style={{
            background: 'transparent',
            padding: 16,
            borderRadius: 8,
            color: '#69b1ff',
          }}
          styles={{
            body: { padding: 16 }
          }}
        >
          <Spin spinning={loading}>
            <Table
              columns={columns}
              dataSource={services}
              rowKey={(record) => record.id.toString()}
              pagination={{ pageSize: 5 }}
              style={{ background: 'transparent' }}
              rowClassName={() => 'custom-table-row'}
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
                {editMode
                  ? 'Редактировать услугу'
                  : currentService
                  ? `${currentService.service}`
                  : 'Добавить услугу'}
              </Text>
            }
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={800}
            styles={{
              content: {
                background: '#1e293b',
                borderRadius: 8,
              },
              body: {
                padding: 16,
                background: '#1e293b',
                color: '#69b1ff'
              }
            }}
          >
            {!editMode && currentService ? (
              <div
                style={{
                  lineHeight: 1.8,
                  color: '#69b1ff',
                  display: 'flex',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                {currentService.images && (
                  <div style={{ marginTop: 12, flex: '0 0 40%' }}>
                    <Image
                      src={currentService.images}
                      alt="Превью"
                      style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }}
                      preview={{ src: currentService.images }}
                    />
                  </div>
                )}
                <div style={{ marginLeft: '12%', flex: 1 }}>
                  <div>
                    <Text style={{ color: '#69b1ff' }}>
                      <b>Описание:</b>
                    </Text>
                    <List
                      size="small"
                      dataSource={(() => {
                        try {
                          const parsed = JSON.parse(currentService.description || '[]');
                          return Array.isArray(parsed) ? parsed : [currentService.description];
                        } catch {
                          return [currentService.description];
                        }
                      })()}
                      renderItem={(item: string) => (
                        <List.Item style={{ color: '#69b1ff', borderBottom: '1px solid #64748b' }}>
                          {item}
                        </List.Item>
                      )}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{
                  service: '',
                  description: [''],
                }}
                style={{
                  color: '#69b1ff',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Название услуги</Text>}
                  name="service"
                  rules={[{ required: true, message: 'Введите название услуги' }]}
                >
                  <Input
                    style={{
                      background: '#334155',
                      color: '#69b1ff',
                      border: '1px solid #64748b',
                      borderRadius: 4,
                    }}
                  />
                </Form.Item>

                <Form.List name="description">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Form.Item
                          key={key}
                          label={<Text style={{ color: '#69b1ff' }}>{`Описание ${name + 1}`}</Text>}
                          {...restField}
                          name={name}
                        >
                          <TextArea
                            style={{
                              background: '#334155',
                              color: '#69b1ff',
                              border: '1px solid #64748b',
                              borderRadius: 4,
                            }}
                          />
                        </Form.Item>
                      ))}
                      <Form.Item>
                        <Button
                          type="text"
                          onClick={() => add()}
                          icon={<PlusOutlined style={{ color: '#69b1ff' }} />}
                          style={{ color: '#69b1ff', padding: 0 }}
                        >
                          Добавить описание
                        </Button>
                        {fields.length > 1 && (
                          <Button
                            type="text"
                            onClick={() => remove(fields.length - 1)}
                            icon={<MinusOutlined style={{ color: '#fd9b9b' }} />}
                            style={{ color: '#fd9b9b', padding: 0, marginLeft: 8 }}
                          >
                            Удалить описание
                          </Button>
                        )}
                      </Form.Item>
                    </>
                  )}
                </Form.List>

                <Form.Item label={<Text style={{ color: '#69b1ff' }}>Изображение</Text>}>
                  <Upload {...uploadProps}>
                    <Button
                      type="text"
                      icon={<UploadOutlined style={{ color: '#69b1ff' }} />}
                      style={{ color: '#69b1ff', padding: 0 }}
                    >
                      Выбрать файл
                    </Button>
                  </Upload>
                  {currentService?.images && !fileList.length && (
                    <Image
                      src={currentService.images}
                      alt="Изображение"
                      style={{ maxWidth: '100%', maxHeight: 200, marginTop: 12, borderRadius: 8 }}
                      preview={{ src: currentService.images }}
                    />
                  )}
                </Form.Item>

                <Form.Item>
                  <Button
                    type="text"
                    htmlType="submit"
                    loading={loading}
                    style={{ color: '#69b1ff', padding: 0 }}
                  >
                    {editMode ? 'Обновить' : 'Создать'}
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Modal>

          <Modal
            open={isDeleteModalVisible}
            onCancel={() => setIsDeleteModalVisible(false)}
            onOk={confirmDelete}
            okText="Удалить"
            cancelText="Отмена"
            title={<Text style={{ color: '#69b1ff' }}>Вы уверены, что хотите удалить услугу?</Text>}
            styles={{
              content: {
                background: '#1e293b',
                borderRadius: 8,
              },
              body: {
                background: 'transparent',
                color: '#69b1ff',
                padding: 16,
              }
            }}
            okButtonProps={{
              style: { color: '#fd9b9b', borderColor: '#fd9b9b', background: 'transparent' },
            }}
            cancelButtonProps={{
              style: { color: '#69b1ff', borderColor: '#69b1ff', background: 'transparent' },
            }}
          >
            <Text style={{ color: '#69b1ff' }}>Это действие нельзя отменить.</Text>
          </Modal>
        </Card>
      </Content>
    </Layout>
  );
};

export default ServiceManager;