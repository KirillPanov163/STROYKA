import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Faq } from '../model/faqTypes';

export const fetchFaqs = createAsyncThunk<Faq[]>(
  'faq/fetchFaqs',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Faq[]>('/api/faq');
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Ошибка запроса на FAQ');
    }
  },
);

export const createFaq = createAsyncThunk<Faq, { question?: string; answers?: string }>(
  'faq/createFaq',
  async (faqData, { rejectWithValue }) => {
    try {
      const response = await axios.post<Faq>('/api/faq', faqData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Ошибка создания FAQ');
    }
  },
);

export const getFaqById = createAsyncThunk<Faq, number>(
  'faq/getFaqById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get<Faq>(`/api/faq/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message || 'Ошибка получения FAQ по id');
    }
  },
);
