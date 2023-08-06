'use client';
import AgGridCustom from '@/components/common/TableContent';
import { WrapperContainer } from '@/components/layouts';
import { CampaignTableColumns } from '@/custom-views/campaigns';
import { mockCampaigns } from '@/mocks';
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
          rowData={mockCampaigns}
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
