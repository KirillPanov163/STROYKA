export type MyWorkType = {
  id: number;
  title?: string;
  square?: string;
  quantity?: string;
  time?: string;
  success_work?: string;
  image?: string;
  imagePath?: string;
  imageFile?: File;
  createdAt?: string;
  updatedAt?: string;
};

export type MyWorkResponseType = {
  work: MyWorkType;
};

export type MyWorksResponseType = {
  works: MyWorkType[];
};

export type MyWorkStateType = {
  works: MyWorkType[];
  currentWork: MyWorkType | null;
  error: string | null;
  isLoading: boolean;
};

export const initialState: MyWorkStateType = {
  works: [],
  currentWork: null,
  error: null,
  isLoading: false,
};
