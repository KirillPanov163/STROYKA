'use client';

import { useState } from 'react';
import { Button, Modal, Form, Input, Checkbox, message, theme } from 'antd';
import { PhoneOutlined, CloseOutlined } from '@ant-design/icons';
import { sendRecordingThunk } from '@/entities/recording/api/RecordingFormApi';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';

const { TextArea } = Input;

export const Feedback = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { token } = theme.useToken();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await dispatch(
        sendRecordingThunk({
          name: 'Форма обратной связи',
          tel: values.phone,
          message: `Предпочтительное время звонка: ${values.time ? 'с 9:00 до 20:00' : 'не указано'}. Дни: ${values.weekdays ? 'Не беспокоить в выходные' : 'не указаны'}`,
          personalData: 'true',
          oferta: 'true',
        })
      ).unwrap();

      message.success('Спасибо за заявку! Мы свяжемся с вами в указанное время');
      setSubmitted(true);
      form.resetFields();
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      message.error('Ошибка при отправке формы. Пожалуйста, попробуйте позже.');
      console.error('Ошибка отправки формы:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setOpen(!open);
    if (!open) {
      form.resetFields();
      setSubmitted(false);
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={toggleModal}
        style={{
          position: 'fixed',
          right: 40,
          bottom: 300,
          zIndex: 1000,
          transform: 'rotate(90deg)',
          transformOrigin: 'right bottom',
          backgroundColor: '#05040072',

          color: 'white',
          padding: '0 24px',
          height: 40,
          borderRadius: '4px 4px 0 0',
        }}
      >
        Оставить заявку
      </Button>

      <Modal
        title="Оставьте заявку на звонок"
        open={open}
        onCancel={toggleModal}
        footer={null}
        closeIcon={<CloseOutlined style={{ color:'#c19b26'}} />}
        width={400}
        styles={{
          header: {
            background: '#bfbfbf',
            borderBottom: `1px solid #c19b26`,
          },
          content: {
            background: '#bfbfbf',
          },
        }}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <p style={{ fontSize: 16, color: token.colorPrimary }}>
              Спасибо за заявку!
            </p>
            <p>Мы свяжемся с вами в указанное время</p>
          </div>
        ) : (
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ weekdays: false, time: false }}
          >
            <Form.Item name="weekdays" valuePropName="checked">
              <Checkbox style={{ color: token.colorTextSecondary }}>
                Не беспокоить в выходные дни
              </Checkbox>
            </Form.Item>

            <Form.Item name="time" valuePropName="checked">
              <Checkbox style={{ color: token.colorTextSecondary }}>
                с 9:00 до 20:00
              </Checkbox>
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                { required: true, message: 'Пожалуйста, введите ваш телефон' },
                {
                  pattern: /^\+?[0-9\s\-\(\)]+$/,
                  message: 'Пожалуйста, введите корректный номер телефона',
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined style={{ color: '#c19b26' }} />}
                placeholder="+7 (___) ___-__-__"
                style={{ background: 'white' }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{ height: 40, background: '#c19b26' }}
              >
                Заказать звонок
              </Button>
            </Form.Item>

            <p style={{ fontSize: 12, color: token.colorTextSecondary }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>

            <div style={{ textAlign: 'center', marginTop: 16,  color: '#c19b26' }}>
              <span style={{ color: '#c19b26' }}>ВентСтройМонтаж</span>
            </div>
          </Form>
        )}
      </Modal>
    </>
  );
};