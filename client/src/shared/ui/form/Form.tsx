import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps {
  children: React.ReactNode;
  className?: string;
  methods: UseFormReturn<any>;
  onSubmit?: (data: any) => void;
}

export const Form = ({ children, className, methods, onSubmit }: FormProps) => {
  return (
    <FormProvider {...methods}>
      <form 
        className={className} 
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  );
};