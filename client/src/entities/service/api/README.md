# Redux Async Thunks для работы с сервисами

Документация для асинхронных действий (thunks) работы с сервисами в Redux-приложении.

## Импорты

```typescript
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '@/shared/lib/axiosInstance';
import type { ServerResponseType } from '@/shared/types';
import type { IService } from '../model/serviceTypes';
import { SERVICE_THUNK_TYPES } from '@/shared/enums/serviceThunkTypes';
import { SERVICE_API_ROUTES } from '@/shared/enums/serviceApiRoutes';
```

### Комментарии:
1. `AxiosError` - тип для обработки ошибок Axios
2. `createAsyncThunk` - функция для создания асинхронных действий в Redux Toolkit
3. `axiosInstance` - предварительно настроенный экземпляр Axios
4. `ServerResponseType` - общий тип для ответов сервера
5. `IService` - интерфейс типа сервиса
6. `SERVICE_THUNK_TYPES` - перечисление типов thunk-действий
7. `SERVICE_API_ROUTES` - перечисление API-роутов для сервисов

## Получение всех сервисов

```typescript
export const getAllServices = createAsyncThunk<
  ServerResponseType<IService[]>, // Тип возвращаемого значения при успехе
  void, // Тип аргументов (нет аргументов)
  { rejectValue: ServerResponseType<null> } // Тип возвращаемого значения при ошибке
>(SERVICE_THUNK_TYPES.ALL_SERVICE, async (_, { rejectWithValue }) => {
  try {
    // Выполняем GET-запрос для получения всех сервисов
    const { data } = await axiosInstance.get<ServerResponseType<IService[]>>(
      SERVICE_API_ROUTES.SERVICE
    );
    return data; // Возвращаем полученные данные
  } catch (error) {
    // Обработка ошибок
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    // Возвращаем ошибку через rejectWithValue
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});
```

## Получение одного сервиса

```typescript
export const getOneService = createAsyncThunk<
  ServerResponseType<IService>, // Тип возвращаемого значения (один сервис)
  number, // Тип аргумента (ID сервиса)
  { rejectValue: ServerResponseType<null> } // Тип ошибки
>(SERVICE_THUNK_TYPES.ONE_SERVICE, async (id, { rejectWithValue }) => {
  try {
    // GET-запрос для получения конкретного сервиса по ID
    const { data } = await axiosInstance.get<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${id}`
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});
```

## Обновление сервиса

```typescript
export const updateService = createAsyncThunk<
  ServerResponseType<IService>, // Тип возвращаемого значения
  IService, // Тип аргумента (объект сервиса)
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.UPDATE_SERVICE, async (service, { rejectWithValue }) => {
  try {
    // PUT-запрос для обновления сервиса
    const { data } = await axiosInstance.put<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${service.id}`, // URL с ID сервиса
      service // Данные для обновления
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});
```

## Удаление сервиса

```typescript
export const deleteService = createAsyncThunk<
  ServerResponseType<IService>, // Тип возвращаемого значения
  number, // Тип аргумента (ID сервиса)
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.DELETE_SERVICE, async (id, { rejectWithValue }) => {
  try {
    // DELETE-запрос для удаления сервиса
    const { data } = await axiosInstance.delete<ServerResponseType<IService>>(
      `${SERVICE_API_ROUTES.SERVICE}/${id}`
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});
```

## Создание сервиса

```typescript
export const createService = createAsyncThunk<
  ServerResponseType<IService>, // Тип возвращаемого значения
  IService, // Тип аргумента (объект сервиса)
  { rejectValue: ServerResponseType<null> }
>(SERVICE_THUNK_TYPES.CREATE_SERVICE, async (service, { rejectWithValue }) => {
  try {
    // POST-запрос для создания нового сервиса
    const { data } = await axiosInstance.post<ServerResponseType<IService>>(
      SERVICE_API_ROUTES.SERVICE, // Базовый URL
      service // Данные нового сервиса
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<ServerResponseType<null>>;
    console.error('getAllMetaData error:', err.response?.data);
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка получения METADATA',
        data: null,
        error: err.message || 'Unknown error',
      },
    );
  }
});
```

## Общие замечания

1. Все thunks используют единый подход к обработке ошибок
2. Для всех запросов используется предварительно настроенный `axiosInstance`
3. Типизация строго соблюдается на всех уровнях:
   - Тип возвращаемого значения при успехе
   - Тип аргументов
   - Тип возвращаемого значения при ошибке
4. Все API-роуты и типы thunks вынесены в перечисления для удобства поддержки
5. Ошибки логируются в консоль перед возвратом

## Шаблон обработки ошибок

Все thunks используют одинаковый шаблон обработки ошибок:

```typescript
catch (error) {
  const err = error as AxiosError<ServerResponseType<null>>;
  console.error('getAllMetaData error:', err.response?.data);
  return rejectWithValue(
    err.response?.data || {
      statusCode: 500,
      message: 'Ошибка получения METADATA',
      data: null,
      error: err.message || 'Unknown error',
    },
  );
}
```

Это обеспечивает:
1. Приведение типа ошибки к `AxiosError`
2. Логирование ошибки
3. Возврат либо ошибки от сервера, либо стандартного объекта ошибки
4. Единообразие обработки ошибок во всем приложении