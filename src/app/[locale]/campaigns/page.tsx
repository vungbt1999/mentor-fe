'use client';
import AgGridCustom from '@/components/common/TableContent';
import { WrapperContainer } from '@/components/layouts';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef } from 'react';

export default function CampaignsPage() {
  const gridRef = useRef<AgGridReact | null>(null);
  const tableColumns = useMemo(() => CampaignTableColumns, []);

  return (
    <WrapperContainer
      title="Quy trình xây dựng Chatbot"
      actions={{
        outlined: {
          label: 'Xem lịch sử',
          iconLeft: 'history-line',
          href: '/'
        },
        contained: {
          label: 'Thêm chiến dịch',
          iconLeft: 'add-line',
          onClick: () => console.log('go')
        }
      }}
    >
      <div className="mt-5">
        <AgGridCustom
          ref={gridRef}
          rowData={[
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' },
            { name: 'Test', phone: '0383007243' }
          ]}
          columnDefs={tableColumns}
          total={100}
          currentPage={1}
          pageSize={10}
          onPageChange={(pagination) => console.log('pagination:', pagination)}
        />
      </div>
    </WrapperContainer>
  );
}

export const CampaignTableColumns: any = [
  {
    headerName: 'Tên',
    width: 300,
    maxWidth: 300,
    valueGetter: (params: any) => params.data?.name
  },
  {
    headerName: 'Phone',
    width: 300,
    maxWidth: 300,
    valueGetter: (params: any) => params.data?.phone
  },
  {
    headerName: 'Địa chỉ',
    width: 200,
    maxWidth: 200,
    valueGetter: (params: any) => params.data?.phone
  },
  {
    headerName: 'Email',
    width: 200,
    maxWidth: 200,
    valueGetter: (params: any) => params.data?.phone
  }
];
