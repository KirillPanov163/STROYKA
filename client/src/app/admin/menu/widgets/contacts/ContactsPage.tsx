'use client';

import React, { useEffect, useState } from 'react';
import { Button, Modal, Table, Form, Input, message, Space, Typography, Layout, Tabs, Card } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, AlignCenterOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import {
  getAllContactsThunk,
  updateContactThunk,
  deleteContactThunk,
  createContactThunk,
} from '@/entities/contacts/api/ContactsApi';
import { ContactDataType, ContactType } from '@/entities/contacts/model';

const { Text, Title } = Typography;
const { Content } = Layout;

const ContactsPage  = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading } = useAppSelector((state) => state.contacts);
  const [form] = Form.useForm();
  const [editingContact, setEditingContact] = useState<ContactType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleEdit = (contact: ContactType) => {
    setEditingContact(contact);
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
    <Layout style={{ minHeight: '100vh', background: 'transparent', marginTop: '100px' }}>
      <Content style={{ width: '80%', margin: '40px auto' }}>
        <Card>
          <Tabs defaultActiveKey="list">
            <Tabs.TabPane icon={<AlignCenterOutlined />} tab="Все контакты" key="list">
              <Title level={3}>Управление контактами</Title>
              <Table
                columns={columns}
                dataSource={contacts || []}
                loading={isLoading}
                rowKey={(record) => record.id.toString()}
                pagination={false}
              />
            </Tabs.TabPane>
            <Tabs.TabPane icon={<PlusOutlined />} tab="Создать контакт" key="create">
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                style={{ maxWidth: 600, margin: '0 auto' }}
              >
                <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Введите email' }]}> <Input /></Form.Item>
                <Form.Item name="tel" label="Телефон"> <Input /></Form.Item>
                <Form.Item name="address" label="Адрес"> <Input /></Form.Item>
                <Form.Item name="whatsapp" label="WhatsApp"> <Input /></Form.Item>
                <Form.Item name="telegram" label="Telegram"> <Input /></Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Сохранить контакт
                  </Button>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </Card>

        <Modal
          title={<Text>{editingContact ? 'Редактировать контакт' : 'Создать контакт'}</Text>}
          open={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
            setEditingContact(null);
            form.resetFields();
          }}
          onOk={() => form.submit()}
          okText="Сохранить"
          cancelText="Отмена"
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Введите email' }]}> <Input /></Form.Item>
            <Form.Item name="tel" label="Телефон"> <Input /></Form.Item>
            <Form.Item name="address" label="Адрес"> <Input /></Form.Item>
            <Form.Item name="whatsapp" label="WhatsApp"> <Input /></Form.Item>
            <Form.Item name="telegram" label="Telegram"> <Input /></Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default ContactsPage ;