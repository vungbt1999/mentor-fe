'use client';
import { ReactNode, useState } from 'react';
import { SelectBase, SelectOptionItem } from '@/components/forms';
import { useTranslations } from 'next-intl';
import { Dropdown, DropdownOptionItem } from '@/components/common';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const t = useTranslations('Common');

  const options: SelectOptionItem[] = [
    { value: String(7), label: t('day', { number: 7 }) },
    { value: String(30), label: t('month', { number: 1 }) },
    { value: String(60), label: t('month', { number: 2 }) },
    { value: String(90), label: t('month', { number: 3 }) },
    { value: String(365), label: t('year', { number: 1 }) }
  ];

  const dropdownsOptions: DropdownOptionItem[] = [
    { value: String(7), label: 'Phòng ban 1' },
    { value: String(30), label: 'Phòng ban 2' },
    { value: String(60), label: 'Phòng ban 3' }
  ];

  const [dropdownActive, setDropdownActive] = useState<DropdownOptionItem>(dropdownsOptions[0]);

  return (
    <div>
      <div className="w-full shadow py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Dropdown
              options={dropdownsOptions}
              onChange={setDropdownActive}
              activeItem={dropdownActive}
            />
            <p className="font-medium">{t('member', { number: 30 })}</p>
          </div>
          <SelectBase
            className="!w-52"
            size="sm"
            iconRotate={false}
            options={options}
            icon="calender"
          />
        </div>
      </div>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
