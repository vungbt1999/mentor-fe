import { IconButton, MenuItem, Select, SxProps, Theme } from '@mui/material';
import { PAGINATION_DEFAULT } from '.';
import { useMemo } from 'react';
import { Icons } from '@/components/icons';

export type PaginationTableProps = {
  total?: number;
  currentPage?: number;
  pageSize?: number;
  onPageChange?: (pagination: { page: number; pageSize: number }) => void;
};

const SIZE_OPTIONS_PAGE = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
  { value: 50, label: '50' }
];

export function PaginationTable({
  total = 0,
  currentPage = PAGINATION_DEFAULT.currentPage,
  pageSize = PAGINATION_DEFAULT.pageSize,
  onPageChange
}: PaginationTableProps) {
  const totalPage = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const fromNumber = useMemo(() => pageSize * (currentPage - 1) + 1, [pageSize, currentPage]);
  const toNumber = useMemo(() => currentPage * pageSize, [pageSize, currentPage]);
  const pagesOptions = useMemo(() => {
    const options = [];
    for (let i = 1; i <= totalPage; i++) {
      options.push({
        value: i,
        label: `${i}`
      });
    }
    return options;
  }, [totalPage]);

  const handlePrevious = (currentPage: number) => {
    if (currentPage === 1 || currentPage <= PAGINATION_DEFAULT.currentPage) return;
    onPageChange && onPageChange({ page: currentPage - 1, pageSize: pageSize });
  };

  const handleNext = (currentPage: number, totalPage: number) => {
    if (currentPage === totalPage) return;
    onPageChange && onPageChange({ page: currentPage + 1, pageSize: pageSize });
  };

  return (
    <div className="flex items-center justify-between bg-gray-600 rounded-md px-3 text-sm">
      <div className="flex items-center">
        <p className="mr-3 text-gray-700">Items per page:</p>
        <SelectOptions
          options={SIZE_OPTIONS_PAGE}
          selected={pageSize}
          onChange={(value) => onPageChange && onPageChange({ page: currentPage, pageSize: value })}
        />
        <div className="ml-3 text-gray-700">
          {fromNumber}-{toNumber} of {total} items
        </div>
      </div>
      <div className="flex items-center">
        <SelectOptions
          options={pagesOptions}
          selected={currentPage}
          onChange={(value) => onPageChange && onPageChange({ page: value, pageSize: pageSize })}
        />
        <p className="text-gray-700 mx-3">of {totalPage} pages</p>
        <IconButton onClick={() => handlePrevious(currentPage)}>
          <Icons name="chevron-left" className="text-gray-300" />
        </IconButton>
        <IconButton onClick={() => handleNext(currentPage, totalPage)}>
          <Icons name="chevron-right" className="text-gray-300" />
        </IconButton>
      </div>
    </div>
  );
}

const styles: SxProps<Theme> = {
  '& .MuiSelect-icon': {
    top: 0,
    position: 'initial'
  },
  '& .MuiOutlinedInput-input': {
    padding: '10px',
    paddingRight: '4px !important'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none !important'
  }
};

const SelectOptions = ({
  options,
  selected,
  onChange
}: {
  options: { value: number; label: string }[];
  selected: number;
  onChange: (value: number) => void;
}) => {
  return (
    <Select
      onChange={(e) => onChange(e.target.value as number)}
      value={selected}
      sx={{ ...styles }}
    >
      {options.map((item) => (
        <MenuItem value={item.value} key={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};
