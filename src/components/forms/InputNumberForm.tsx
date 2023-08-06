import { IconButton, SxProps, TextField, TextFieldProps, Theme, useTheme } from '@mui/material';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';
import { Icons } from '../icons';

type InputFormProps = TextFieldProps & {
  control: Control<any, any>;
  name: string;
  label?: string;
  min?: number;
  max?: number;
};

const styles: SxProps<Theme> = {
  '.MuiInputBase-root': {
    borderRadius: '5px',
    maxHeight: 40,
    height: 40,
    padding: 0,

    '& .MuiInputBase-input': {
      fontSize: 14,
      color: (theme) => (theme.palette as any).grey['200'],
      padding: '7px 10px',
      textAlign: 'center'
    },
    '& .MuiOutlinedInput-notchedOutline': { borderWidth: '1px !important' }
  }
};

export function InputNumberForm({
  control,
  name,
  label,
  min,
  max,
  defaultValue = 0,
  className,
  sx,
  ...props
}: InputFormProps) {
  const theme = useTheme();

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
          <TextField
            {...field}
            type="number"
            className={`${className} w-full`}
            InputProps={{
              inputProps: { min: min, max: max },
              startAdornment: (
                <ButtonIcon location="left" theme={theme} field={field} min={min} max={max}>
                  <Icons name="minus-line" />
                </ButtonIcon>
              ),
              endAdornment: (
                <ButtonIcon location="right" theme={theme} field={field} min={min} max={max}>
                  <Icons name="add-line" />
                </ButtonIcon>
              )
            }}
            sx={sx ?? { ...styles }}
            onChange={(e) => field.onChange(e.target?.value ? Number(e.target?.value) : undefined)}
            {...props}
          />
          {error?.message && <p className="ml-3 text-danger-100 text-xs mt-1">{error?.message}</p>}
        </>
      )}
    />
  );
}

const ButtonIcon = ({
  location,
  children,
  theme,
  field,
  min,
  max
}: {
  location: 'left' | 'right';
  children: JSX.Element;
  theme: Theme;
  field: ControllerRenderProps<any, string>;
  min?: number;
  max?: number;
}) => {
  const isRight = location === 'right';

  const handleOnChange = () => {
    let numberValue = Number(field.value);

    if (isRight) {
      if (max && numberValue >= max) return;
      numberValue += 1;
    } else {
      if ((min && numberValue <= min) || (min === 0 && numberValue <= min)) return;
      numberValue -= 1;
    }
    field.onChange(numberValue);
  };

  return (
    <IconButton
      style={{
        borderRadius: 'inherit',
        background: '#F3F3F3',
        borderTopRightRadius: isRight ? '5px' : 0,
        borderBottomRightRadius: isRight ? '5px' : 0,
        borderTopLeftRadius: !isRight ? '5px' : 0,
        borderBottomLeftRadius: !isRight ? '5px' : 0,
        borderLeft: isRight ? `1px solid ${theme.palette.grey[300]}` : undefined,
        borderRight: !isRight ? `1px solid ${theme.palette.grey[300]}` : undefined,
        color: '#ABABAB'
      }}
      onClick={handleOnChange}
    >
      {children}
    </IconButton>
  );
};
