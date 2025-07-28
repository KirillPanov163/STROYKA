import React from 'react';
import styles from './Table.module.css';

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <table className={`${styles.table} ${className}`}>
      {children}
    </table>
  );
};

export const TableHeader = ({ children, className }: TableProps) => {
  return (
    <thead className={`${styles.tableHeader} ${className}`}>
      {children}
    </thead>
  );
};

export const TableBody = ({ children, className }: TableProps) => {
  return (
    <tbody className={`${styles.tableBody} ${className}`}>
      {children}
    </tbody>
  );
};

export const TableRow = ({ children, className }: TableProps) => {
  return (
    <tr className={`${styles.tableRow} ${className}`}>
      {children}
    </tr>
  );
};

export const TableHead = ({ children, className }: TableProps) => {
  return (
    <th className={`${styles.tableHead} ${className}`}>
      {children}
    </th>
  );
};

export const TableCell = ({ children, className }: TableProps) => {
  return (
    <td className={`${styles.tableCell} ${className}`}>
      {children}
    </td>
  );
};