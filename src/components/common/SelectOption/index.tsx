import { Icons } from '@/components/icons';
import { MenuItem, Select, SxProps, Theme } from '@mui/material';
import { forwardRef } from 'react';

export type SelectOptionItem = { value: string | number; label: string };

type SelectOptionProps = {
  options: SelectOptionItem[];
  selected?: string;
  sx?: SxProps<Theme>;
  onChange?: (value: string) => void;
};

const styles: SxProps<Theme> = {
  width: 200,
  '& .MuiSelect-icon': {
    transform: 'none',
    top: 0,
    position: 'initial'
  }
};

export const SelectOption = forwardRef(function SelectOption(props: SelectOptionProps, ref) {
  const { selected, options, sx, onChange, ...resets } = props;
  return (
    <Select
      ref={ref}
      value={selected}
      onChange={(e) => onChange && onChange(e.target.value)}
      displayEmpty
      size="small"
      IconComponent={(iconProps) => (
        <div className="h-10 w-10 bg-gray-500 absolute top-0 right-0 flex items-center justify-center border-l border-t-0 border-r-0 border-b-0 border-solid border-gray-400">
          <Icons name="calender" {...iconProps} className="text-gray-100" />
        </div>
      )}
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{ ...styles, ...sx }}
      {...resets}
    >
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
});
