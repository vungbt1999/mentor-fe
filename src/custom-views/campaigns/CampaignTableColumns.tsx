import { ColDef } from 'ag-grid-community';
import { ICampaign } from '.';
import { Process, RewardCoin, StatusRate } from '@/components/common';
import { formatDate } from '@/utils/common';

export const CampaignTableColumns: ColDef<ICampaign>[] = [
  {
    headerName: 'Tên',
    width: 258 ,
    maxWidth: 258 ,
    cellClass: 'font-bold',
    valueGetter: (params) => params.data?.name
  },
  {
    headerName: 'Từ ngày',
    width: 150,
    maxWidth: 150,
    cellClass: 'flex items-center justify-start text-body',
    valueGetter: (params) => formatDate(params.data?.fromDate ?? new Date())
  },
  {
    headerName: 'Đến ngày',
    width: 150,
    maxWidth: 150,
    cellClass: 'flex items-center justify-start text-body',
    valueGetter: (params) => formatDate(params.data?.toDate ?? new Date())
  },
  {
    headerName: 'Tiến độ',
    width: 150,
    maxWidth: 150,
    cellRenderer: (params: { data: ICampaign }) => Process({ process: params.data?.process ?? 0 })
  },
  {
    headerName: 'Trạng thái',
    width: 230,
    maxWidth: 230,
    cellRenderer: (params: { data: ICampaign }) =>
      StatusRate({
        participateRate: params.data?.participateRate ?? 0,
        passRate: params.data?.passRate ?? 0
      })
  },
  {
    headerName: 'Điểm thưởng',
    width: 160,
    maxWidth: 160,
    cellRenderer: (params: { data: ICampaign }) => RewardCoin({ coin: params.data?.reward ?? 0 })
  }
];
