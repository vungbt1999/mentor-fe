'use client';
import { AreaCharts } from '@/components/common';
import { UserRank } from '@/components/common/UserRank';
import { mockEmployees } from '@/mocks';
import { ApexOptions } from 'apexcharts';

export default function CampaignDetailPage() {
  const series: ApexOptions['series'] = [
    {
      name: '01/03 - 07/03',
      type: 'area',
      data: [30, 40, 25, 50, 49, 21, 70, 51, 42]
    },
    {
      name: '20/02 - 25/02',
      type: 'area',
      data: [20, 30, 15, 40, 39, 11, 60, 41, 32]
    }
  ];

  return (
    <div>
      <AreaCharts
        title={{ text: 'Tỷ lệ trả lời đúng' }}
        series={series}
        options={{
          xaxis: {
            categories: [
              '06/08',
              '07/08',
              '09/08',
              '10/08',
              '11/08',
              '12/08',
              '13/08',
              '14/08',
              '15/08'
            ]
          }
        }}
      />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <AreaCharts
          title={{ text: 'Tỷ lệ tham gia bài kiểm tra' }}
          themeColor="secondary"
          series={series}
          className="col-span-8"
        />
        <UserRank className="col-span-4 overflow-y-scroll max-h-[446px]" items={mockEmployees} />
      </div>
    </div>
  );
}
