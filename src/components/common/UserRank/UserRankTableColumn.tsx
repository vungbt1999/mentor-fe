import { IUser } from '@/types/common';
import { Tooltip } from '@mui/material';
import { CellStyle, ColDef } from 'ag-grid-community';
import { Avatar } from '..';
import clsx from 'clsx';
import { Icons } from '@/components/icons';

export const UserRankTableColumn: ColDef<IUser>[] = [
  {
    flex: 2,
    headerName: 'BXH',
    cellStyle: { justifyContent: 'center' } as CellStyle,
    cellRenderer: (params: { rowIndex: number }) => {
      const rowIndex = params.rowIndex;

      return (
        <div className={`font-bold w-6 h-6 bg-white flex justify-center items-center rounded-full`}>
          {rowIndex + 1}
        </div>
      );
    }
  },
  {
    flex: 65,
    cellStyle: { fontSize: 14 },
    headerName: 'Nhân viên',
    cellRenderer: (params: { data: IUser; rowIndex: number }) => {
      const { data, rowIndex } = params;

      return (
        <div className="flex items-center space-x-1 truncate">
          <div className="flex flex-col truncate">
            <Avatar name={data.name} avatar={data.avatar} />
            <Tooltip title={data.name}>
              <span className="font-bold text-sm leading-[22px] truncate text-white">
                {data.name}
              </span>
            </Tooltip>

            <Tooltip title={data.email}>
              <span
                className={clsx(
                  ' font-normal text-sm truncate',
                  rowIndex < 3 ? 'text-white' : 'text-gray-200'
                )}
              >
                {data.email}
              </span>
            </Tooltip>
          </div>
        </div>
      );
    }
  },
  {
    flex: 19,
    field: 'score',
    headerName: 'Điểm',
    sortable: true,
    initialSort: 'desc',
    sortingOrder: ['desc', 'asc'],
    valueFormatter: (params) => `${parseFloat(params.value).toFixed(1)}%`
  },
  {
    flex: 18,
    field: 'performance',
    headerName: 'Hiệu suất',
    sortable: true,
    sortingOrder: ['desc', 'asc'],
    cellRenderer: (params: { data: IUser }) => {
      const performanceUp = params.data.performanceUp;
      const performanceDown = params.data.performanceDown;
      const performance = params.data.performance;

      return (
        <div className="flex items-center space-x-1">
          <Icons
            name="arrow-up"
            className={clsx(
              'mb-0.5',
              `${!performanceUp && !performanceDown && 'text-gray-200'}`,
              `${performanceUp && 'text-success-200'}`,
              `${performanceDown && ' text-danger-100 rotate-180'}`
            )}
          />
          <div className="font-bold text-base text-body">{Math.abs(performance)}</div>
        </div>
      );
    }
  }
];
