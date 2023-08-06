'use client';
import { ReactNode, useState } from 'react';
import { Icons } from '@/components/icons';
import { IconButton, Tooltip } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SelectOption, SelectOptionItem } from '../common';

type EditType = {
  title: string;
  href?: string;
  onClick?: () => void;
};

type MainLayoutProps = {
  title: string;
  children: JSX.Element | ReactNode;
  isBack?: boolean;
  description?: string;
  edit?: EditType;
  subtitle?: string;
  container?: boolean;
  onChangeRangeSelect?: (value: string) => void;
};

const SelectOptions: SelectOptionItem[] = [
  { value: 7, label: '7 ngày' },
  { value: 60, label: '60 ngày' },
  { value: 90, label: '90 ngày' },
  { value: 365, label: '365 ngày' }
];

export function MainLayout({
  title,
  isBack = true,
  description,
  edit,
  subtitle,
  children,
  container = true,
  onChangeRangeSelect
}: MainLayoutProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<string>();

  const renderEditButton = (edit: EditType) => {
    if (edit.href)
      return (
        <Link href={edit.href} className="text-primary flex items-center">
          <Icons name="edit-line" className="!w-5 !h-5" />
          <p className="text-sm font-bold ml-1">{edit.title}</p>
        </Link>
      );

    return (
      <IconButton onClick={edit?.onClick} className="hover:bg-transparent text-primary p-0">
        <Icons name="edit-line" className="!w-5 !h-5" />
        <p className="text-sm font-bold ml-1">{edit.title}</p>
      </IconButton>
    );
  };

  return (
    <div>
      {/** Main Header */}
      <div className="bg-white py-5 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {isBack && (
              <IconButton onClick={() => router.back()} className="mr-3">
                <Icons name="back" className="text-gray-100" />
              </IconButton>
            )}
            <h1 className="font-bold text-2xl text-body my-0">{title}</h1>
            {description && (
              <Tooltip title={description}>
                <IconButton className="ml-1">
                  <Icons name="information" className="!w-4 !h-4 text-gray-100" />
                </IconButton>
              </Tooltip>
            )}
          </div>

          {/** Left Content */}
          <div className="flex items-center gap-7">
            {subtitle && <p className="font-bold text-gray-100 text-sm">{subtitle}</p>}
            {edit && renderEditButton(edit)}
            <SelectOption options={SelectOptions} selected={selected} onChange={setSelected} />
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-full py-5">
        <div className={`${container ? 'container mx-auto' : ''}`}>{children}</div>
      </div>
    </div>
  );
}
