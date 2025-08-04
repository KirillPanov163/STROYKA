'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import {
  createMyWork,
  getAllMyWorks,
  getMyWorkById,
  updateMyWork,
  deleteMyWork,
} from '@/entities/portfolio/api/portfolio';
import { MyWork } from '@/entities/portfolio/model';
import {
  Modal,
  Upload,
  Table,
  Spin,
  Form,
  Input,
  message
} from 'antd/es';
import Space from 'antd/es/space';
import Card from 'antd/es/card';
import Image from 'antd/es/image';
import List from 'antd/es/list';
import Typography from 'antd/es/typography';
import  Layout from 'antd/es/layout';
import Button from 'antd/es/button';
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import { clearCurrentWork } from '@/entities/portfolio/slice/portfolioSlice';

const { Text } = Typography;
const { Content } = Layout;

const PortfolioManager = () => {
  const dispatch = useAppDispatch();
  const { works, currentWork, loading, error } = useAppSelector((state) => state.myWork);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(getAllMyWorks());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (currentWork && editMode) {
      let parsedSuccessWork: string[] = [];
      try {
        const successWork = currentWork.success_work;
        if (successWork !== undefined) {
          parsedSuccessWork = JSON.parse(successWork);
          if (!Array.isArray(parsedSuccessWork)) {
            parsedSuccessWork = [successWork];
          }
        } else {
          parsedSuccessWork = [];
        }
      } catch {
        parsedSuccessWork = [currentWork.success_work!];
      }

      form.setFieldsValue({
        title: currentWork.title,
        square: currentWork.square,
        quantity: currentWork.quantity,
        time: currentWork.time,
        success_work: parsedSuccessWork,
      });

      if (currentWork.image) {
        setFileList([
          {
            uid: '-1',
            name: 'current-image',
            status: 'done',
            url: currentWork.image,
          },
        ]);
      }
    } else {
      form.resetFields();
      setFileList([]);
    }
  }, [currentWork, editMode, form]);

  const showModal = () => setIsModalVisible(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditMode(false);
    dispatch(clearCurrentWork());
    form.resetFields();
    setFileList([]);
  };

  const handleCreate = () => {
    setEditMode(false);
    dispatch(clearCurrentWork());
    showModal();
  };

  const handleEdit = (id: number) => {
    dispatch(getMyWorkById(id));
    setEditMode(true);
    showModal();
  };

  const handleView = (id: number) => {
    dispatch(getMyWorkById(id));
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
        await dispatch(deleteMyWork(deleteId)).unwrap();
        message.success('Работа удалена');
        setIsDeleteModalVisible(false);
        dispatch(getAllMyWorks());
      } catch (err) {
        message.error('Ошибка при удалении');
        console.error('Ошибка при удалении:', err);
        setIsDeleteModalVisible(false);
      }
    }
  };

  const onFinish = async (
    values: Omit<MyWork, 'id' | 'image' | 'createdAt' | 'updatedAt'>,
  ) => {
    const formData = new FormData();
    if (Array.isArray(values.success_work)) {
      formData.append('success_work', JSON.stringify(values.success_work));
    }
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'success_work') {
        formData.append(key, value);
      }
    });
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append('image', fileList[0].originFileObj);
    }
    try {
      if (editMode && currentWork) {
        await dispatch(updateMyWork({ id: currentWork.id, formData })).unwrap();
        message.success('Работа обновлена');
      } else {
        await dispatch(createMyWork(formData)).unwrap();
        message.success('Работа создана');
      }
      handleCancel();
    } catch (err) {
      message.error('Ошибка при сохранении');
      console.error('Ошибка:', err);
    }
  };

  const columns = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => (
        <Text style={{ color: '#69b1ff', fontWeight: 'bold' }}>{text}</Text>
      ),
    },
    {
      title: 'Площадь',
      dataIndex: 'square',
      key: 'square',
      render: (text: string) => <Text style={{ color: '#69b1ff' }}>{text}</Text>,
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (text: string) => <Text style={{ color: '#69b1ff' }}>{text}</Text>,
    },
    {
      title: 'Изображение',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) =>
        image ? (
          <Image
            src={`http://localhost:3001${image}`}
            width={50}
            height={50}
            style={{ objectFit: 'cover', borderRadius: 4 }}
            preview={{ src: `http://localhost:3001${image}`}}
          />
        ) : null,
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: MyWork) => (
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
          background:
            'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
          height: 'auto',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <Card
          title={
            <Text style={{ color: '#69b1ff', fontSize: 18 }}>Управление работами</Text>
          }
          extra={
            <Button
              type="text"
              icon={<PlusOutlined style={{ color: '#69b1ff' }} />}
              onClick={handleCreate}
              style={{ color: '#69b1ff', padding: 0 }}
            >
              Добавить работу
            </Button>
          }
          style={{
            background: 'transparent',
            padding: 16,
            borderRadius: 8,
            color: '#69b1ff',
          }}
          styles={{
            body: { padding: 16 },
          }}
        >
          <Spin spinning={loading}>
            <Table
              columns={columns}
              dataSource={works}
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
                  ? 'Редактировать работу'
                  : currentWork
                  ? `${currentWork.title}`
                  : 'Добавить работу'}
              </Text>
            }
            open={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            width={800}
            styles={{
              content: {
                backgroundColor: '#1e293b',
                borderRadius: 8,
              },
            }}
          >
            {!editMode && currentWork ? (
              <div
                style={{
                  lineHeight: 1.8,
                  color: '#69b1ff',
                  display: 'flex',
                  background: '#1e293b',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                {currentWork.image && (
                  <div style={{ marginTop: 12 }}>
                    <Image
                      src={`http://localhost:3001${currentWork.image}`}
                      alt="Превью"
                      style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }}
                      preview={{ src: `http://localhost:3001${currentWork.image}` }}
                    />
                  </div>
                )}
                <div style={{ marginLeft: '12%' }}>
                  <p>
                    <Text style={{ color: '#69b1ff' }}>
                      <b>Площадь:</b> {currentWork.square}
                    </Text>
                  </p>
                  <p>
                    <Text style={{ color: '#69b1ff' }}>
                      <b>Количество:</b> {currentWork.quantity}
                    </Text>
                  </p>
                  <p>
                    <Text style={{ color: '#69b1ff' }}>
                      <b>Время:</b> {currentWork.time}
                    </Text>
                  </p>
                  <div>
                    <Text style={{ color: '#69b1ff' }}>
                      <b>Что сделано:</b>
                    </Text>
                    <List
                      size="small"
                      dataSource={(() => {
                        try {
                          const parsed = JSON.parse(currentWork.success_work || '[]');
                          return Array.isArray(parsed)
                            ? parsed
                            : [currentWork.success_work];
                        } catch {
                          return [currentWork.success_work];
                        }
                      })()}
                      renderItem={(item: string) => (
                        <List.Item
                          style={{ color: '#69b1ff', borderBottom: '1px solid #64748b' }}
                        >
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
                  title: '',
                  square: '',
                  quantity: '',
                  time: '',
                  success_work: [''],
                }}
                style={{
                  color: '#69b1ff',
                  background: '#1e293b',
                  padding: 16,
                  borderRadius: 8,
                }}
              >
                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Название</Text>}
                  name="title"
                  rules={[{ required: true, message: 'Введите название' }]}
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

                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Площадь</Text>}
                  name="square"
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

                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Количество</Text>}
                  name="quantity"
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

                <Form.Item
                  label={<Text style={{ color: '#69b1ff' }}>Время</Text>}
                  name="time"
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

                <Form.List name="success_work">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, ...restField }) => (
                        <Form.Item
                          key={key}
                          label={
                            <Text style={{ color: '#69b1ff' }}>{`Описание ${
                              name + 1
                            }`}</Text>
                          }
                          {...restField}
                          name={name}
                          rules={[{ required: true, message: 'Введите описание' }]}
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
                  {currentWork?.image && !fileList.length && (
                    <Image
                      src={`http://localhost:3001${currentWork.image}`}
                      alt="Изображение"
                      style={{
                        maxWidth: '100%',
                        maxHeight: 200,
                        marginTop: 12,
                        borderRadius: 8,
                      }}
                      preview={{ src: `http://localhost:3001${currentWork.image}` }}
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
            title={
              <Text style={{ color: '#69b1ff' }}>
                Вы уверены, что хотите удалить работу?
              </Text>
            }
            styles={{
              content: {
                background: '#1e293b',
                borderRadius: 8,
              },
            }}
            okButtonProps={{
              style: {
                color: '#fd9b9b',
                borderColor: '#fd9b9b',
                background: 'transparent',
              },
            }}
            cancelButtonProps={{
              style: {
                color: '#69b1ff',
                borderColor: '#69b1ff',
                background: 'transparent',
              },
            }}
          >
            <Text style={{ color: '#69b1ff' }}>Это действие нельзя отменить.</Text>
          </Modal>
        </Card>
      </Content>
    </Layout>
  );
};

export default PortfolioManager;
