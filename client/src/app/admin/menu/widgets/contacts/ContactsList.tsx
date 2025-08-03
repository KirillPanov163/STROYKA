'use client';

import React, { useEffect, useState } from 'react';
import { Button, Modal, Table, Form, Input, message, Space, Typography, Layout } from 'antd/es';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import {
  getAllContactsThunk,
  updateContactThunk,
  deleteContactThunk,
  createContactThunk,
} from '@/entities/contacts/api/ContactsApi';
import { ContactDataType, ContactType } from '@/entities/contacts/model';

const { Text } = Typography;
const { Content } = Layout;

const ContactsManager = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading } = useAppSelector((state) => state.contacts);
  const [form] = Form.useForm();
  const [editingContact, setEditingContact] = useState<ContactType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (editingContact) {
      form.setFieldsValue({
        email: editingContact.email || '',
        tel: editingContact.tel || '',
        address: editingContact.address || '',
        whatsapp: editingContact.whatsapp || '',
        telegram: editingContact.telegram || '',
      });
    } else {
      form.resetFields();
    }
  }, [editingContact, form]);

  const openCreateModal = () => {
    setIsCreating(true);
    setEditingContact(null);
    setIsModalVisible(true);
  };

  const handleEdit = (contact: ContactType) => {
    setEditingContact(contact);
    setIsCreating(false);
    setIsModalVisible(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await dispatch(deleteContactThunk(id)).unwrap();
      message.success('Контакт удален');
    } catch (error) {
      message.error('Ошибка при удалении контакта');
    }
  };

  const handleSubmit = async (values: ContactDataType) => {
    try {
      if (editingContact) {
        await dispatch(updateContactThunk({ id: editingContact.id, data: values })).unwrap();
        message.success('Контакт обновлен');
      } else {
        await dispatch(createContactThunk(values)).unwrap();
        message.success('Контакт создан');
      }
      setIsModalVisible(false);
      setEditingContact(null);
      setIsCreating(false);
    } catch (error) {
      message.error('Ошибка при сохранении контакта');
    }
  };

  const columns = [
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Телефон', dataIndex: 'tel', key: 'tel' },
    { title: 'Адрес', dataIndex: 'address', key: 'address' },
    { title: 'WhatsApp', dataIndex: 'whatsapp', key: 'whatsapp' },
    { title: 'Telegram', dataIndex: 'telegram', key: 'telegram' },
    {
      title: 'Действия',
      key: 'actions',
      render: (_: any, record: ContactType) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      <Content style={{ width: '80%', margin: '120px auto', background: 'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)', padding: 16, borderRadius: 8 }}>
        <Typography.Title level={3} style={{ color: '#69b1ff' }}>Управление контактами</Typography.Title>

        <Table
          columns={columns}
          dataSource={contacts || []}
          loading={isLoading}
          rowKey={(record) => record.id.toString()}
          pagination={false}
          style={{ background: 'transparent', color: '#69b1ff' }}
        />

        <Modal
          title={<Text style={{ color: '#69b1ff' }}>{editingContact ? 'Редактировать контакт' : 'Создать контакт'}</Text>}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            setEditingContact(null);
            setIsCreating(false);
            form.resetFields();
          }}
          onOk={() => form.submit()}
          okText="Сохранить"
          cancelText="Отмена"
          style={{ borderRadius: 8 }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ color: '#69b1ff' }}
          >
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Введите email' }]}> <Input  defaultValue={editingContact?.email || ''}  /></Form.Item>
            <Form.Item name="tel" label="Телефон" rules={[{ required: true, message: 'Введите телефон' }]}> <Input  defaultValue={editingContact?.tel || ''} /></Form.Item>
            <Form.Item name="address" label="Адрес" rules={[{ required: true, message: 'Введите адрес' }]}> <Input defaultValue={editingContact?.address || ''} /></Form.Item>
            <Form.Item name="whatsapp" label="WhatsApp" rules={[{ required: true, message: 'Введите WhatsApp' }]}> <Input defaultValue={editingContact?.whatsapp || ''} /></Form.Item>
            <Form.Item name="telegram" label="Telegram" rules={[{ required: true, message: 'Введите Telegram' }]}> <Input defaultValue={editingContact?.telegram || ''} /></Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default ContactsManager;