'use client';
import { Icons } from '@/components/icons';
import clsx from 'clsx';
import { ReactNode, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export type DropdownOptionItem = {
  value: string | number;
  label: string;
};

type DropdownProps = {
  className?: string;
  options: DropdownOptionItem[];
  onChange?: (value: DropdownOptionItem) => void;
  showIcon?: boolean;
  activeItem: DropdownOptionItem;
  children?: ReactNode;
};

export function Dropdown({
  className,
  onChange,
  showIcon = true,
  options,
  activeItem,
  children
}: DropdownProps) {
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useOnClickOutside(ref, () => setShowMenu(false));

  const onHandleChange = (item: DropdownOptionItem) => {
    setShowMenu(false);
    if (onChange) {
      onChange(item);
    }
  };

  return (
    <label ref={ref} className={clsx('relative w-auto min-w-[10rem] block', className)}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        <p className="font-bold text-xl">{activeItem.label}</p>
        {showIcon && (
          <Icons
            name="chevron-down"
            className={clsx('text-gray-300 transition-all ease-linear', {
              'rotate-180': showMenu
            })}
          />
        )}
      </div>
      {!children ? (
        <ul
          className={clsx(
            'absolute left-0 right-0 w-full bg-base-100 border border-solid border-base-200 rounded shadow',
            {
              block: showMenu,
              hidden: !showMenu
            }
          )}
        >
          {options.map((item) => (
            <li
              className=" first:rounded-tl first:rounded-tr last:rounded-bl last:rounded-br px-2 py-2 border-b border-solid border-base-300 last:border-0 font-medium transition-all ease-in-out hover hover:bg-primary hover:bg-opacity-20 cursor-pointer"
              key={item.value}
              onClick={() => onHandleChange(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : (
        children
      )}
    </label>
  );
}
