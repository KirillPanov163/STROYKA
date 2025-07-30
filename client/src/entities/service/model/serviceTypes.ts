export interface Service {
  id: number;
  service?: string;
  description?: string;
  images?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ServiceState {
  services: Service[];
  currentService: Service | null;
  loading: boolean;
  error: string | null;
  imageLoading: boolean;
}