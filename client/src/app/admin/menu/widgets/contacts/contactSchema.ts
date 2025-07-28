import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().email('Некорректный email').optional().or(z.literal('')),
  tel: z.string().min(5, 'Телефон должен содержать минимум 5 символов').optional().or(z.literal('')),
  address: z.string().min(3, 'Адрес должен содержать минимум 3 символа').optional().or(z.literal('')),
  whatsapp: z.string().optional().or(z.literal('')),
  telegram: z.string().optional().or(z.literal(''))
});

export type ContactFormValues = z.infer<typeof contactSchema>;