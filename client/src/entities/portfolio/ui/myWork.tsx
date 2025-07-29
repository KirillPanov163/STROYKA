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
} from '../api/portfolio';
import { MyWork } from '../model';
import { Button, Modal, Upload, Table, Spin, Form, Input, message, Space } from 'antd';
import {
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  PlusOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import type { RcFile, UploadFile } from 'antd/es/upload/interface';
import { clearCurrentWork } from '../slice/portfolioSlice';

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
    setEditMode(true);
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

    // 👇 Преобразуем success_work в строку
    if (Array.isArray(values.success_work)) {
      formData.append('success_work', JSON.stringify(values.success_work));
    }

    // Добавляем остальные поля
    Object.entries(values).forEach(([key, value]) => {
      if (key !== 'success_work') {
        formData.append(key, value);
      }
    });

    // Файл
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
    },
    {
      title: 'Площадь',
      dataIndex: 'square',
      key: 'square',
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: MyWork) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() => handleView(record.id)} />
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record.id)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
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
    <div style={{ padding: 24 }}>
      <Button type="primary" onClick={handleCreate} style={{ marginBottom: 16 }}>
        Добавить работу
      </Button>

      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={works}
          rowKey={(record) => record.id.toString()}
          pagination={{ pageSize: 5 }}
        />
      </Spin>

      <Modal
        title={
          editMode
            ? 'Редактировать работу'
            : currentWork
            ? 'Просмотр работы'
            : 'Добавить работу'
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {!editMode && currentWork ? (
          <div style={{ lineHeight: 1.8 }}>
            <h2>{currentWork.title}</h2>
            <p>
              <b>Площадь:</b> {currentWork.square}
            </p>
            <p>
              <b>Количество:</b> {currentWork.quantity}
            </p>
            <p>
              <b>Время:</b> {currentWork.time}
            </p>
            <div>
              <b>Что сделано:</b>
              <ul>
                {(() => {
                  try {
                    const parsed = JSON.parse(currentWork.success_work || '[]');
                    return Array.isArray(parsed) ? (
                      parsed.map((item, idx) => <li key={idx}>{item}</li>)
                    ) : (
                      <li>{currentWork.success_work}</li>
                    );
                  } catch {
                    return <li>{currentWork.success_work}</li>;
                  }
                })()}
              </ul>
            </div>
            {currentWork.image && (
              <div style={{ marginTop: 12 }}>
                <img
                  src={currentWork.image}
                  alt="Превью"
                  style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }}
                />
              </div>
            )}
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
          >
            <Form.Item
              label="Название"
              name="title"
              rules={[{ required: true, message: 'Введите название' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Площадь" name="square">
              <Input />
            </Form.Item>

            <Form.Item label="Количество" name="quantity">
              <Input />
            </Form.Item>

            <Form.Item label="Время" name="time">
              <Input />
            </Form.Item>

            <Form.List name="success_work">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Form.Item
                      key={key}
                      label={`Описание ${name + 1}`}
                      {...restField}
                      name={name}
                      rules={[{ required: true, message: 'Введите описание' }]}
                    >
                      <Input />
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button onClick={() => add()} icon={<PlusOutlined />}>
                      Добавить описание
                    </Button>
                    <Button
                      onClick={() => remove(fields.length - 1)}
                      icon={<MinusOutlined />}
                    >
                      Удалить описание
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item label="Изображение">
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Выбрать файл</Button>
              </Upload>
              {currentWork?.image && !fileList.length && (
                <img
                  src={currentWork.image}
                  alt="Изображение"
                  style={{ maxWidth: '100%', maxHeight: 200, marginTop: 12 }}
                />
              )}
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
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
        title="Вы уверены, что хотите удалить работу?"
      >
        <p>Это действие нельзя отменить.</p>
      </Modal>
    </div>
  );
};

export default PortfolioManager;
