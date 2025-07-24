export interface Faq {
  id: number;
  question: string | null;
  answers: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface FAQState {
  data: Faq[];
  loading: boolean;
  error: string | null;
}
