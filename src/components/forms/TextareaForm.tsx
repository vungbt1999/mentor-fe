import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

type InputFormProps = Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> & {
  control: Control<any, any>;
  name: string;
  label?: string;
};

export function TextareaForm({
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
      render={({ field, fieldState: { error } }) => {
        const isError = !!error?.message;

        return (
          <>
            {label && (
              <label htmlFor={name} className="mb-1 text-sm font-bold text-body block w-fit">
                {label}:
              </label>
            )}
            <textarea
              {...field}
              id={field.name}
              value={field.value}
              placeholder={placeholder}
              required={required}
              disabled={disabled}
              defaultValue={field.value ? undefined : defaultValue}
              className={clsx(
                'min-h-[134px] border rounded border-solid rounded-5 py-2 px-[10px] bg-white text-sm text-body placeholder:text-gray-100 w-full outline-none hover:border-primary transition-all resize-none',
                {
                  'border-danger-100': isError,
                  'border-gray-400': !isError
                }
              )}
              onChange={(value) => {
                field.onChange(value);
                onChange && onChange(value);
              }}
              {...props}
            />
            {isError && <p className="text-danger-100 text-xs">{error?.message}</p>}
          </>
        );
      }}
    />
  );
}
