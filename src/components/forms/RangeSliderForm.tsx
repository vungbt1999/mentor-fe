import { Slider, SliderThumb } from '@mui/material';
import { TextareaHTMLAttributes } from 'react';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';

type InputFormProps = Partial<TextareaHTMLAttributes<HTMLTextAreaElement>> & {
  control: Control<any, any>;
  name: string;
  label?: string;
  setValue: (name: string, value: number) => void;
};

export function RangeSliderForm({ control, name, label, defaultValue }: InputFormProps) {
  const onChangeSlider = (value: number | number[], field: ControllerRenderProps<any, string>) => {
    field.onChange(value as number);
  };

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
          <Slider
            {...field}
            value={field.value}
            onChange={(_: any, value) => onChangeSlider(value, field)}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            step={1}
            slots={{ thumb: CustomSliderThumb }}
          />
          {error?.message && <p className="text-danger-100 text-xs mt-1">{error?.message}</p>}
        </>
      )}
    />
  );
}

type CustomSliderThumbProps = React.HTMLAttributes<unknown>;

function CustomSliderThumb(props: CustomSliderThumbProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb
      {...other}
      className="!rounded-5 !bg-white border border-solid border-gray-2 flex items-center justify-center gap-1"
    >
      {children}
      <span className="w-[1px] h-2 bg-gray-2" />
      <span className="w-[1px] h-2 bg-gray-2" />
    </SliderThumb>
  );
}
