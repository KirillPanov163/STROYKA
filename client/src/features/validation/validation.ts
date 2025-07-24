import * as yup from 'yup';

const noOnlySpaces = (value: string | undefined) => {
  return value ? value.trim().length > 0 : false;
};

const noForbiddenWords = (value: string | undefined) => {
  const forbiddenWords = ['спам', 'реклама', 'плохо'];
  return value
    ? !forbiddenWords.some((word) =>
        value.toLowerCase().includes(word.toLowerCase())
      )
    : true;
};

export const recordingForm = yup.object().shape({
  title: yup
    .string()
    .required('Заголовок обязателен')
    .min(3, 'Заголовок должен содержать минимум 3 символа')
    .max(50, 'Заголовок не должен превышать 50 символов')
    .test(
      'no-only-spaces',
      'Заголовок не может содержать только пробелы',
      noOnlySpaces
    )
    .test(
      'no-forbidden-words',
      'Заголовок содержит недопустимые слова',
      noForbiddenWords
    )
    .trim(),
  desc: yup
    .string()
    .required('Описание обязательно')
    .min(5, 'Описание должно содержать минимум 5 символов')
    .max(200, 'Описание не должно превышать 200 символов')
    .test(
      'no-only-spaces',
      'Описание не может содержать только пробелы',
      noOnlySpaces
    )
    .test(
      'no-forbidden-words',
      'Описание содержит недопустимые слова',
      noForbiddenWords
    )
    .trim(),
});

export type RecordingFormDataType = yup.InferType<typeof recordingForm>;