import { createContext } from 'react';
import { AlertContextType } from '../model';


export const AlertContext = createContext<AlertContextType | undefined>(undefined);
