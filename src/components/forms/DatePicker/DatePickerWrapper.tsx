import { ReactNode } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import vi from 'date-fns/locale/vi';
registerLocale('es', es);
registerLocale('vi', vi);
setDefaultLocale('vi');

interface IDatePickerWrapperProps {
  children: ReactNode;
}
export function DatePickerWrapper({ children }: IDatePickerWrapperProps) {
  return <>{children}</>;
}
