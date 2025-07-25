import { RecordingFormData } from '../model/index';
import {
  RECORDINGFORM_API_URLS,
  RECORDINGFORM_THUNK_TYPES,
} from '@/shared/enums/RecordingFormRoutes';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import { ServerResponseType } from '@/shared/types';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendRecordingThunk = createAsyncThunk<
  ServerResponseType<null>,
  RecordingFormData,
  { rejectValue: ServerResponseType<null> }
>(
  RECORDINGFORM_THUNK_TYPES.RECORDINGFORM,
  async (recordingFormData, { rejectWithValue }) => {
    console.log('Начало выполнения thunk', recordingFormData); // Добавьте это
    try {
      console.log('Попытка отправки запроса...'); // И это
      const response = await axiosInstance.post<ServerResponseType<null>>(
        RECORDINGFORM_API_URLS.RECORDINGFORM,
        recordingFormData,
      );

      console.log('Ответ сервера:', response.data); // И это
      return response.data;
    } catch (error) {
      console.error('Ошибка в thunk:', error); // И это
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
