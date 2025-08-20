export interface ResponseFormat {
  status: number;
  message: string;
  data?: any;
}

const formatResponse = (status: number, message: string, data?: any): ResponseFormat => ({
  status,
  message,
  ...(data && { data }),
});

export default formatResponse;
