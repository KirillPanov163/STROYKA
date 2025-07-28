'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { createFaq } from '@/entities/FAQ/api/faqThunkApi';
import {
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Textarea,
} from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { faqSchema } from './faqSchema';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';

// Определяем тип формы на основе схемы валидации
type FaqFormValues = z.infer<typeof faqSchema>;

export const FaqCreatePage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  // Типизируем форму с помощью FaqFormValues
  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: {
      question: '',
      answers: '',
    },
  });

  // Типизируем обработчик отправки формы
  const onSubmit: SubmitHandler<FaqFormValues> = async (data) => {
    try {
      await dispatch(createFaq(data)).unwrap();
      router.push('/faq/all_answers');
    } catch (error) {
      console.error('Ошибка при создании:', error);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Добавить новый вопрос</h1>
      
      {/* Передаем методы формы и обработчик onSubmit */}
      <Form methods={form} onSubmit={onSubmit} className="space-y-4">
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

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="primary"
              type="button"
              onClick={() => router.push('/faq')}
            >
              Отмена
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? 'Создание...' : 'Создать вопрос'}
            </Button>
          </div>
      </Form>
    </div>
  );
};