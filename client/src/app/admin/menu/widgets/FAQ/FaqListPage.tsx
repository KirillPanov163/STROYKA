'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { fetchFaqs, deleteFaq, updateFaq } from '@/entities/FAQ/api/faqThunkApi';
import { Faq } from '@/entities/FAQ/model/faqTypes'; // Импортируем тип
import { useRouter } from 'next/navigation';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faqSchema } from './faqSchema';
import { z } from 'zod';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
} from '@/shared/ui';

// Определяем тип формы на основе схемы валидации
type FaqFormValues = z.infer<typeof faqSchema>;

export const FaqListPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: faqs, status, error } = useAppSelector((state) => state.faq);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null); // Явная типизация

  const form = useForm<FaqFormValues>({
    // Типизация формы
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answers: '',
    },
  });

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  useEffect(() => {
    if (editingFaq) {
      form.reset({
        question: editingFaq.question || '',
        answers: editingFaq.answers || '',
      });
    }
  }, [editingFaq, form]);

  const handleUpdate = async (data: FaqFormValues) => {
    // Типизация данных
    if (!editingFaq) return;

    try {
      await dispatch(
        updateFaq({
          id: editingFaq.id,
          ...data,
        }),
      ).unwrap();
      setEditingFaq(null);
    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  const handleDelete = async (id: number) => {
    // Типизация ID
    try {
      await dispatch(deleteFaq(id));
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const navigateToCreate = () => {
    router.push('/faq/add_answers');
  };

  if (status === 'loading') return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Управление вопросами</h1>
        <Button onClick={navigateToCreate}>Добавить вопрос</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Вопрос</TableHead>
            <TableHead>Ответ</TableHead>
            <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {faqs.map(
            (
              faq: Faq, // Явная типизация элемента
            ) => (
              <TableRow key={faq.id}>
                <TableCell className="max-w-[300px] truncate">
                  {faq.question || '-'}
                </TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {faq.answers || '-'}
                </TableCell>
                <TableCell className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditingFaq(faq)}
                      >
                        Редактировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Редактирование вопроса</DialogTitle>
                      </DialogHeader>
                      <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(handleUpdate)}
                          className="space-y-4"
                        >
                          <FormField
                            control={form.control}
                            name="question"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Вопрос</FormLabel>
                                <FormControl>
                                  <Input placeholder="Введите вопрос" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="answers"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ответ</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Введите ответ"
                                    rows={5}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" disabled={form.formState.isSubmitting}>
                            {form.formState.isSubmitting ? 'Сохранение...' : 'Сохранить'}
                          </Button>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>

                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="danger" size="sm">
                        Удалить
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Это действие нельзя отменить. Вопрос будет удален.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Отмена</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(faq.id)}>
                          Удалить
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};
