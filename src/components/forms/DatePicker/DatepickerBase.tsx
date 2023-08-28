'use client';
import { Icons } from '@/components/icons';
import clsx from 'clsx';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from './DatePickerWrapper';

interface IDatePickerBaseProps {
  size?: 'md' | 'sm' | 'xs';
}

export function DatePickerBase({ size = 'md' }: IDatePickerBaseProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <DatePickerWrapper>
      <label
        className={clsx(
          'datepicker-custom inline-flex border border-solid hover:border-primary transition-all rounded items-center border-base-content',
          {
            'pl-4 h-12 text-sm': size === 'md',
            'pl-3 h-8 text-sm': size === 'sm',
            'pl-2 h-6 text-xs': size === 'xs'
          }
        )}
      >
        <DatePicker
          locale="vi"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="outline-none bg-transparent"
        />
        <div className="icon-datepicker bg-base-300 h-full aspect-square rounded-tr rounded-br flex items-center justify-center border-l border-solid border-base-content transition-all ease-in-out">
          <Icons
            name="calender"
            className={clsx('icon-calendar text-gray-300 transition-all ease-in-out', {
              '!w-5 !h-5': size === 'sm',
              '!w-4 !h-4': size === 'xs'
            })}
          />
        </div>
      </label>
    </DatePickerWrapper>
  );
}
