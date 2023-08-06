import React, { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import styles from './styles.module.scss';
import { Icons } from '@/components/icons';

type CheckboxFormProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  control: Control<any, any>;
  name: string;
  label?: string;
};

export function CheckboxForm({
  control,
  name,
  value,
  label,

  ...props
}: CheckboxFormProps) {
  return (
    <label
      htmlFor={`${name}_${value}`}
      className={`${styles.checkboxContainer} flex items-center w-fit`}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => {
          return (
            <input
              type="checkbox"
              value={value}
              id={`${name}_${value}`}
              className={styles.checkboxCustom}
              hidden
              onChange={(e) => {
                const { checked, value } = e.target;
                const currentValue = field.value || [];
                const updatedValue = checked
                  ? [...currentValue, value]
                  : currentValue.filter((item: any) => item !== value);
                field.onChange(updatedValue);
              }}
              checked={field.value.includes(String(value))}
              {...props}
            />
          );
        }}
      />
      <div
        className={`${styles.checkboxShadow} w-6 h-6 border rounded border-solid border-gray-2 bg-white z-[1] relative flex items-center justify-center cursor-pointer`}
      >
        <Icons name="check-line" className="text-white" />
      </div>
      <p className="ml-[10px] cursor-pointer font-bold text-sm leading-[22px]">{label}</p>
    </label>
  );
}
