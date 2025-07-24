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
