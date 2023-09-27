import { AreaCharts } from '@/components/common/Chart';
import {
  DatePickerBase,
  InputBase,
  RangeSliderBase,
  DateRangePickerBase
} from '@/components/forms';
import MainLayout from '@/components/layouts/MainLayout';
import { ApexOptions } from 'apexcharts';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

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
    <MainLayout>
      <br />
      <InputBase />
      <InputBase size="sm" />
      <InputBase size="xs" />
      <br />
      <RangeSliderBase className="mt-10" />

      <br />
      <DatePickerBase className="max-w-xs" />
      <DateRangePickerBase />
      <br />
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
        color='success'
      />
      <h1>Test</h1>
    </MainLayout>
  );
}
