export type ServiceType = {
  id: string;
  service: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export type ServiceApiType = {
  services: ServiceType[];
};

export type ServiceApiResponseType = {
  service: ServiceApiType;
};

export type ServiceStateType = {
  service: ServiceType | null;
  currentService: ServiceType | null;
  isLoading: boolean;
  error: string | null;
};

export const initialState: ServiceStateType = {
  service: null,
  currentService: null,
  isLoading: false,
  error: null,
};