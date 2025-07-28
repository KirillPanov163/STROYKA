'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { createContactThunk } from '@/entities/contacts/api/ContactsApi';
import {
  Button,
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/shared/ui';
import { ContactDataType } from '@/entities/contacts/model';
import { contactSchema } from './contactSchema';

export const CreateContactForm = () => {
  const dispatch = useAppDispatch();
  const form = useForm<ContactDataType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      tel: '',
      address: '',
      whatsapp: '',
      telegram: '',
    },
  });

  const onSubmit = async (data: ContactDataType) => {
    try {
      await dispatch(createContactThunk(data)).unwrap();
      form.reset();
      alert('Контакт успешно создан!');
    } catch (error) {
      console.error('Ошибка при создании контакта:', error);
    }
  };

  return (
    <Form methods={form} onSubmit={onSubmit} className="space-y-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Введите email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="tel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Телефон</FormLabel>
            <FormControl>
              <Input placeholder="Введите телефон" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Адрес</FormLabel>
            <FormControl>
              <Input placeholder="Введите адрес" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="whatsapp"
        render={({ field }) => (
          <FormItem>
            <FormLabel>WhatsApp</FormLabel>
            <FormControl>
              <Input placeholder="Введите WhatsApp" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="telegram"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telegram</FormLabel>
            <FormControl>
              <Input placeholder="Введите Telegram" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" disabled={form.formState.isSubmitting}>
        {form.formState.isSubmitting ? 'Создание...' : 'Создать контакт'}
      </Button>
    </Form>
  );
};
