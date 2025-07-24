export type ServiceType = {
  id?: string | null;
  service: string | null;
  description: string | null;
  image: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};



export type ServiceStateType = {
  service: ServiceType | null;
  services: ServiceType[]; 
  isLoading: boolean;
  error: string | null;
};

export const initialState: ServiceStateType = {
  service: null,
  services: [], 
  isLoading: false,
  error: null,
};