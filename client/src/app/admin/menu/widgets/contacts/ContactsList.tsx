'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import {
  getAllContactsThunk,
  updateContactThunk,
  deleteContactThunk,
} from '@/entities/contacts/api/ContactsApi';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/shared/ui';
import { ContactDataType, ContactType } from '@/entities/contacts/model';
import { contactSchema } from './contactSchema';

export const ContactsList = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading } = useAppSelector((state) => state.contacts);
  const [editingContact, setEditingContact] = useState<ContactType | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

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

  // Загружаем контакты при монтировании
  useEffect(() => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaa');
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  // Установка значений формы при редактировании
  useEffect(() => {
    if (editingContact) {
      form.reset({
        email: editingContact.email || '',
        tel: editingContact.tel || '',
        address: editingContact.address || '',
        whatsapp: editingContact.whatsapp || '',
        telegram: editingContact.telegram || '',
      });
    }
  }, [editingContact, form]);

  const handleUpdate = async (data: ContactDataType) => {
    if (!editingContact) return;

    try {
      await dispatch(
        updateContactThunk({
          id: editingContact.id,
          data,
        }),
      ).unwrap();
      setEditingContact(null);
      alert('Контакт успешно обновлен!');
    } catch (error) {
      console.error('Ошибка при обновлении контакта:', error);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await dispatch(deleteContactThunk(deleteId)).unwrap();
      setDeleteId(null);
      alert('Контакт успешно удален!');
    } catch (error) {
      console.error('Ошибка при удалении контакта:', error);
    }
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (!contacts?.length) return <div>Контакты не найдены</div>;

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Телефон</TableHead>
            <TableHead>Адрес</TableHead>
            <TableHead>WhatsApp</TableHead>
            <TableHead>Telegram</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.email || '-'}</TableCell>
              <TableCell>{contact.tel || '-'}</TableCell>
              <TableCell>{contact.address || '-'}</TableCell>
              <TableCell>{contact.whatsapp || '-'}</TableCell>
              <TableCell>{contact.telegram || '-'}</TableCell>
              <TableCell className="flex space-x-2">
                <Dialog>
                  <DialogTrigger>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setEditingContact(contact)}
                    >
                      Редактировать
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Редактирование контакта</DialogTitle>
                      <DialogDescription>
                        Внесите изменения в форму ниже
                      </DialogDescription>
                    </DialogHeader>
                    <Form methods={form} onSubmit={handleUpdate} className="space-y-4">
                      {/* Поле Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Введите email"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Поле Телефон */}
                      <FormField
                        control={form.control}
                        name="tel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Телефон</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Введите телефон"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Поле Адрес */}
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

                      {/* Поле WhatsApp */}
                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Введите WhatsApp"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Поле Telegram */}
                      <FormField
                        control={form.control}
                        name="telegram"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telegram</FormLabel>
                            <FormControl>
                              <Input placeholder="Введите Telegram username" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end gap-2 pt-4">
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                          {form.formState.isSubmitting
                            ? 'Сохранение...'
                            : 'Сохранить изменения'}
                        </Button>
                      </div>
                    </Form>
                  </DialogContent>
                </Dialog>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => setDeleteId(contact.id)}
                    >
                      Удалить
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Это действие нельзя отменить. Контакт будет удален.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Отмена</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>
                        Удалить
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
