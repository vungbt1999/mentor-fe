'use client';
import AgGridCustom from '@/components/common/TableContent';
import { IUser } from '@/types/common';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef } from 'react';
import { UserRankTableColumn } from './UserRankTableColumn';
import clsx from 'clsx';

type UserRankProps = {
  items: IUser[];
  title?: string;
  className?: string;
};

export function UserRank({ items, className, title = 'Bảng xếp hạng' }: UserRankProps) {
  const gridRef = useRef<AgGridReact | null>(null);
  const tableColumns = useMemo(() => UserRankTableColumn, []);

  return (
    <div className={clsx(className, 'p-5 bg-white rounded-lg border border-solid border-gray-400')}>
      <AgGridCustom ref={gridRef} rowData={items} columnDefs={tableColumns} />
    </div>
  );
}
