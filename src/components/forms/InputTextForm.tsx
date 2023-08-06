import { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

type InputFormProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  control: Control<any, any>;
  name: string;
  label?: string;
};

export function InputTextForm({
  control,
  name,
  label,

  defaultValue,
  placeholder,
  disabled,
  required,
  className,
  onChange,

  ...props
}: InputFormProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <>
          {label && (
            <label htmlFor={name} className="mb-1 text-sm font-bold text-body block w-fit">
              {label}:
            </label>
          )}
          <input
            {...field}
            type="text"
            id={field.name}
            value={field.value}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            defaultValue={field.value ? undefined : defaultValue}
            className={`${className} min-h-[134px] border border-solid border-gray-2 rounded-5 py-2 px-[10px] bg-white text-sm leading-[22px] text-gray-5 placeholder:text-gray-3 w-full outline-none hover:border-primary transition-all resize-none`}
            onChange={(value) => {
              field.onChange(value);
              onChange && onChange(value);
            }}
            {...props}
          />
          {error?.message && <p className="ml-3 text-danger-100 text-xs mt-1">{error?.message}</p>}
        </>
      )}
    />
  );
}
