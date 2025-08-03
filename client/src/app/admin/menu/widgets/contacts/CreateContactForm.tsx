'use client';

import { Form, Input, Button, message, Modal } from 'antd/es';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { createContactThunk } from '@/entities/contacts/api/ContactsApi';
import { ContactDataType } from '@/entities/contacts/model';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';

export const CreateContactFormAntd = () => {
  const [form] = useForm();
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFinish = async (data: ContactDataType) => {
    try {
      await dispatch(createContactThunk(data)).unwrap();
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
      message.success('Контакт успешно создан!');
      form.resetFields();
    } catch (error) {
      message.error('Ошибка при создании контакта');
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 400, margin: '0 auto', padding: 16 }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Введите email' }]}
        >
          <Input placeholder="Введите email" />
        </Form.Item>

        <Form.Item name="tel" label="Телефон">
          <Input placeholder="Введите телефон" />
        </Form.Item>

        <Form.Item name="address" label="Адрес">
          <Input placeholder="Введите адрес" />
        </Form.Item>

        <Form.Item name="whatsapp" label="WhatsApp">
          <Input placeholder="Введите WhatsApp" />
        </Form.Item>

        <Form.Item name="telegram" label="Telegram">
          <Input placeholder="Введите Telegram" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать контакт
          </Button>
        </Form.Item>
      </Form>

      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null}>
        <p>Контакт успешно создан!</p>
        <Button type="primary" onClick={() => setIsModalOpen(false)}>Закрыть</Button>
      </Modal>
    </>
  );
};
