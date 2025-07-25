# Redux Slice для работы с сервисами

Документация для Redux slice, который управляет состоянием сервисов в приложении.

## Импорты

```typescript
import { createSlice } from '@reduxjs/toolkit';
import {
  getAllServices,
  createService,
  getOneService,
  updateService,
  deleteService,
} from '../api/serviceThunkApi';
import type { IService } from '../model/serviceTypes';
```

### Комментарии:
1. `createSlice` - функция из Redux Toolkit для создания слайса состояния
2. Импортируем все thunk-действия для работы с сервисами
3. `IService` - интерфейс типа сервиса

## Интерфейс состояния

```typescript
interface IServiceState {
  services: IService[];    // Массив всех сервисов
  service: IService;       // Текущий выбранный сервис
  isLoading: boolean;      // Флаг загрузки
  error: string;           // Сообщение об ошибке
}
```

### Комментарии:
1. `services` - хранит список всех сервисов
2. `service` - хранит данные одного выбранного сервиса
3. `isLoading` - индикатор выполнения запроса
4. `error` - строка с сообщением об ошибке

## Начальное состояние

```typescript
const initialState: IServiceState = {
  services: [],           // Изначально пустой массив сервисов
  service: {} as IService, // Пустой объект сервиса с приведением типа
  isLoading: false,       // По умолчанию не в состоянии загрузки
  error: '',              // Пустая строка ошибки
};
```

## Создание слайса

```typescript
export const serviceSlice = createSlice({
  name: 'service',        // Уникальное имя слайса
  initialState,          // Начальное состояние
  reducers: {},          // Пустой объект редюсеров (используем только extraReducers)
  extraReducers: (builder) => {
    builder
```

### Комментарии:
1. `name` - идентификатор слайса в хранилище Redux
2. `initialState` - начальное состояние, определенное выше
3. `reducers` - не используем, так как вся логика в extraReducers
4. `builder` - объект для построения редюсеров

## Обработка действий для получения всех сервисов

```typescript
// Начало запроса на получение всех сервисов
.addCase(getAllServices.pending, (state) => {
  state.isLoading = true; // Устанавливаем флаг загрузки
})

// Успешное получение всех сервисов
.addCase(getAllServices.fulfilled, (state, action) => {
  state.isLoading = false; // Сбрасываем флаг загрузки
  state.services = action.payload.data; // Записываем полученные данные в хранилище
})

// Ошибка при получении сервисов
.addCase(getAllServices.rejected, (state, action) => {
  state.isLoading = false; // Сбрасываем флаг загрузки
  // Записываем сообщение об ошибке или стандартное сообщение
  state.error = action.payload?.message || 'Ошибка при получении списка услуг';
})
```

## Обработка действий для создания сервиса

```typescript
// Начало запроса на создание сервиса
.addCase(createService.pending, (state) => {
  state.isLoading = true;
})

// Успешное создание сервиса
.addCase(createService.fulfilled, (state, action) => {
  state.isLoading = false;
  // Добавляем новый сервис в массив
  state.services.push(action.payload.data);
})

// Ошибка при создании сервиса
.addCase(createService.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || 'Ошибка при создании услуги';
})
```

## Обработка действий для получения одного сервиса

```typescript
// Начало запроса на получение сервиса
.addCase(getOneService.pending, (state) => {
  state.isLoading = true;
})

// Успешное получение сервиса
.addCase(getOneService.fulfilled, (state, action) => {
  state.isLoading = false;
  // Сохраняем полученный сервис в поле service
  state.service = action.payload.data;
})

// Ошибка при получении сервиса
.addCase(getOneService.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || 'Ошибка при получении услуги';
})
```

## Обработка действий для обновления сервиса

```typescript
// Начало запроса на обновление сервиса
.addCase(updateService.pending, (state) => {
  state.isLoading = true;
})

// Успешное обновление сервиса
.addCase(updateService.fulfilled, (state, action) => {
  state.isLoading = false;
  // Обновляем сервис в массиве services
  state.services = state.services.map((service) => {
    // Находим сервис по ID и заменяем его обновленной версией
    if (service.id === action.payload.data.id) {
      return action.payload.data;
    }
    return service;
  });
})

// Ошибка при обновлении сервиса
.addCase(updateService.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || 'Ошибка при обновлении услуги';
})
```

## Обработка действий для удаления сервиса

```typescript
// Начало запроса на удаление сервиса
.addCase(deleteService.pending, (state) => {
  state.isLoading = true;
})

// Успешное удаление сервиса
.addCase(deleteService.fulfilled, (state, action) => {
  state.isLoading = false;
  
  // Получаем ID удаленного сервиса
  const deletedId = action.payload?.data;
  if (deletedId) {
    // Фильтруем массив, удаляя сервис с соответствующим ID
    state.services = state.services.filter(
      (service) => service.id && service.id !== deletedId?.id,
    );
  }
})

// Ошибка при удалении сервиса
.addCase(deleteService.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload?.message || 'Ошибка при удалении услуги';
});
```

## Экспорт действий и редюсера

```typescript
export const { actions: servicesActions } = serviceSlice;
export const servicesReducer = serviceSlice.reducer;
```

### Комментарии:
1. `servicesActions` - экспорт действий (в данном случае пустой объект)
2. `servicesReducer` - экспорт редюсера для подключения в хранилище

## Общие замечания

1. Все состояния загрузки обрабатываются единообразно
2. Ошибки обрабатываются с возможностью использования как кастомных сообщений, так и стандартных
3. Для обновления состояния используются иммутабельные операции
4. Все обработчики следуют одинаковой структуре: pending → fulfilled → rejected
5. Состояние нормализовано: отдельно хранится список сервисов и текущий выбранный сервис