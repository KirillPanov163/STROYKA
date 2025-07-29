'use client';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { fetchFaqs, deleteFaq, updateFaq } from '@/entities/FAQ/api/faqThunkApi';
import { Faq } from '@/entities/FAQ/model/faqTypes';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { faqSchema } from './faqSchema';
import { z } from 'zod';
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
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Textarea,
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

type FaqFormValues = z.infer<typeof faqSchema>;

export const FaqListPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: faqs, status, error } = useAppSelector((state) => state.faq);
  const [editingFaq, setEditingFaq] = useState<Faq | null>(null);

  // Форма для редактирования
  const editForm = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answers: '',
    },
  });

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  // Сброс формы при изменении редактируемого FAQ
  useEffect(() => {
    if (editingFaq) {
      editForm.reset({
        question: editingFaq.question || '',
        answers: editingFaq.answers || '',
      });
    }
  }, [editingFaq, editForm]);

  const handleUpdate: SubmitHandler<FaqFormValues> = async (data) => {
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
    try {
      await dispatch(deleteFaq(id));
    } catch (error) {
      console.error('Ошибка при удалении:', error);
    }
  };

  const navigateToCreate = () => {
    router.push('/admin/menu/faq/add_answers');
  };

  if (status === 'loading') return <div className="p-4">Загрузка вопросов...</div>;
  if (error) return <div className="p-4 text-red-500">Ошибка: {error}</div>;

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Управление вопросами</h1>
        <Button onClick={navigateToCreate}>Добавить вопрос</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Вопрос</TableHead>
              <TableHead>Ответ</TableHead>
              <TableHead className="w-[150px]">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <TableRow key={faq.id}>
                  <TableCell className="font-medium">
                    {faq.question || '-'}
                  </TableCell>
                  <TableCell>
                    <div className="line-clamp-2">
                      {faq.answers || '-'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger >
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setEditingFaq(faq)}
                          >
                            Редактировать
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Редактирование вопроса</DialogTitle>
                            <DialogDescription>
                              Внесите изменения в форму ниже
                            </DialogDescription>
                          </DialogHeader>
                          <FormProvider {...editForm}>
                            <form
                              onSubmit={editForm.handleSubmit(handleUpdate)}
                              className="space-y-4"
                            >
                              <FormField
                                control={editForm.control}
                                name="question"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Вопрос</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Введите вопрос"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={editForm.control}
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
                              <div className="flex justify-end gap-2 pt-4">
                                <Button
                                  variant="ghost"
                                  type="button"
                                  onClick={() => setEditingFaq(null)}
                                >
                                  Отмена
                                </Button>
                                <Button
                                  type="submit"
                                  disabled={editForm.formState.isSubmitting}
                                >
                                  {editForm.formState.isSubmitting
                                    ? 'Сохранение...'
                                    : 'Сохранить'}
                                </Button>
                              </div>
                            </form>
                          </FormProvider>
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
                            <AlertDialogTitle>
                              Вы уверены?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Это действие нельзя отменить. Вопрос будет
                              удален.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Отмена</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(faq.id)}
                            >
                              Удалить
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="h-24 text-center py-2">
                  Нет данных
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};