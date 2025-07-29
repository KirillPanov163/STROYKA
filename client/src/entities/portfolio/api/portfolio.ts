import { createAsyncThunk } from '@reduxjs/toolkit';
import type { MyWorkType, MyWorkResponseType, MyWorksResponseType } from '../model';
import { ServerResponseType } from '@/shared/types';
import { handleAxiosError } from '@/shared/utils/handleAxiosError';
import { axiosInstance } from '@/shared/lib/axiosInstance';

enum MY_WORK_THUNK_TYPES {
  CREATE = 'myWork/create',
  GET_ALL = 'myWork/getAll',
  GET_BY_ID = 'myWork/getById',
  UPDATE = 'myWork/update',
  DELETE = 'myWork/delete',
}

enum MY_WORK_API_URLS {
  CREATE = 'my-work',
  GET_ALL = 'my-work',
  GET_BY_ID = 'my-work',
  UPDATE = 'my-work',
  DELETE = 'my-work',
}

export const createMyWorkThunk = createAsyncThunk<
  MyWorkType,
  FormData,
  { rejectValue: ServerResponseType<null> }
>(MY_WORK_THUNK_TYPES.CREATE, async (formData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<ServerResponseType<MyWorkResponseType>>(
      MY_WORK_API_URLS.CREATE,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data.data.work;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getAllMyWorksThunk = createAsyncThunk<
  MyWorkType[],
  void,
  { rejectValue: ServerResponseType<null> }
>(MY_WORK_THUNK_TYPES.GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ServerResponseType<MyWorksResponseType>>(
      MY_WORK_API_URLS.GET_ALL,
    );
    console.log(response.data.data.works);
    return response.data.data.works;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getMyWorkByIdThunk = createAsyncThunk<
  MyWorkType,
  number,
  { rejectValue: ServerResponseType<null> }
>(MY_WORK_THUNK_TYPES.GET_BY_ID, async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get<ServerResponseType<MyWorkResponseType>>(
      `${MY_WORK_API_URLS.GET_BY_ID}/${id}`,
    );
    return response.data.data.work;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const updateMyWorkThunk = createAsyncThunk<
  MyWorkType,
  { id: number; formData: FormData },
  { rejectValue: ServerResponseType<null> }
>(MY_WORK_THUNK_TYPES.UPDATE, async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.put<ServerResponseType<MyWorkResponseType>>(
      `${MY_WORK_API_URLS.UPDATE}/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data.data.work;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const deleteMyWorkThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: ServerResponseType<null> }
>(MY_WORK_THUNK_TYPES.DELETE, async (id, { rejectWithValue }) => {
  try {
    await axiosInstance.delete<ServerResponseType<null>>(
      `${MY_WORK_API_URLS.DELETE}/${id}`,
    );
    return id;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
