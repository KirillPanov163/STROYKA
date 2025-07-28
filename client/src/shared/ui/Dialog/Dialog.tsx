import React, { useState } from 'react';
import styles from './Dialog.module.css';

interface DialogProps {
  children: React.ReactNode;
  className?: string;
}

export const Dialog = ({ children, className }: DialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<DialogTriggerProps>(child) && child.type === DialogTrigger) {
          return React.cloneElement(child, { setIsOpen } as Partial<DialogTriggerProps>);
        }
        if (isOpen && React.isValidElement<DialogContentProps>(child) && child.type === DialogContent) {
          return React.cloneElement(child, { setIsOpen } as Partial<DialogContentProps>);
        }
        return null;
      })}
    </>
  );
};

interface DialogTriggerProps {
  children: React.ReactNode;
  setIsOpen?: (open: boolean) => void;
}

export const DialogTrigger = ({ children, setIsOpen }: DialogTriggerProps) => {
  return (
    <div onClick={() => setIsOpen?.(true)}>
      {children}
    </div>
  );
};

interface DialogContentProps {
  children: React.ReactNode;
  setIsOpen?: (open: boolean) => void;
  className?: string;
}

export const DialogContent = ({ children, setIsOpen, className }: DialogContentProps) => {
  return (
    <div className={`${styles.dialogOverlay}`} onClick={() => setIsOpen?.(false)}>
      <div 
        className={`${styles.dialogContent} ${className}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export const DialogHeader = ({ children, className }: DialogProps) => {
  return (
    <div className={`${styles.dialogHeader} ${className}`}>
      {children}
    </div>
  );
};

export const DialogTitle = ({ children, className }: DialogProps) => {
  return (
    <h2 className={`${styles.dialogTitle} ${className}`}>
      {children}
    </h2>
  );
};

export const DialogDescription = ({ children, className }: DialogProps) => {
  return (
    <p className={`${styles.dialogDescription} ${className}`}>
      {children}
    </p>
  );
};