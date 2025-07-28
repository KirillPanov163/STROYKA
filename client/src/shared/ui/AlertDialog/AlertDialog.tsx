import React, { useState } from 'react';
import styles from './AlertDialog.module.css';

interface AlertDialogProps {
  children: React.ReactNode;
  className?: string;
}

export const AlertDialog = ({ children }: AlertDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement<AlertDialogTriggerProps>(child) &&
          child.type === AlertDialogTrigger
        ) {
          return React.cloneElement(child, {
            setIsOpen,
          } as Partial<AlertDialogTriggerProps>);
        }
        if (
          isOpen &&
          React.isValidElement<AlertDialogContentProps>(child) &&
          child.type === AlertDialogContent
        ) {
          return React.cloneElement(child, {
            setIsOpen,
          } as Partial<AlertDialogContentProps>);
        }
        return null;
      })}
    </>
  );
};

interface AlertDialogTriggerProps {
  children: React.ReactNode;
  setIsOpen?: (open: boolean) => void;
}

export const AlertDialogTrigger = ({ children, setIsOpen }: AlertDialogTriggerProps) => {
  return <div onClick={() => setIsOpen?.(true)}>{children}</div>;
};

interface AlertDialogContentProps {
  children: React.ReactNode;
  setIsOpen?: (open: boolean) => void;
  className?: string;
}

export const AlertDialogContent = ({
  children,
  setIsOpen,
  className,
}: AlertDialogContentProps) => {
  return (
    <div className={`${styles.alertDialogOverlay}`} onClick={() => setIsOpen?.(false)}>
      <div
        className={`${styles.alertDialogContent} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export const AlertDialogHeader = ({ children, className }: AlertDialogProps) => {
  return <div className={`${styles.alertDialogHeader} ${className}`}>{children}</div>;
};

export const AlertDialogTitle = ({ children, className }: AlertDialogProps) => {
  return <h2 className={`${styles.alertDialogTitle} ${className}`}>{children}</h2>;
};

export const AlertDialogDescription = ({ children, className }: AlertDialogProps) => {
  return <p className={`${styles.alertDialogDescription} ${className}`}>{children}</p>;
};

export const AlertDialogFooter = ({ children, className }: AlertDialogProps) => {
  return <div className={`${styles.alertDialogFooter} ${className}`}>{children}</div>;
};

interface AlertDialogActionProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AlertDialogAction = ({
  children,
  onClick,
  className,
}: AlertDialogActionProps) => {
  return (
    <button className={`${styles.alertDialogAction} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

interface AlertDialogCancelProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AlertDialogCancel = ({
  children,
  onClick,
  className,
}: AlertDialogCancelProps) => {
  return (
    <button className={`${styles.alertDialogCancel} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
