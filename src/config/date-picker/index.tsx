'use client';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import vi from 'date-fns/locale/vi';
import { Fragment, ReactNode } from 'react';
registerLocale('es', es);
registerLocale('vi', vi);
setDefaultLocale('vi');

export function DatePickerConfig({ children }: { children: ReactNode }) {
  return <Fragment>{children}</Fragment>;
}
