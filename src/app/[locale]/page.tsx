import { DatePickerBase, InputBase, RangeSliderBase } from '@/components/forms';
import { DateRangePickerBase } from '@/components/forms/DatePicker/DateRangePickerBase';
import MainLayout from '@/components/layouts/MainLayout';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <MainLayout>
      <br />
      <InputBase />
      <InputBase size="sm" />
      <InputBase size="xs" />
      <br />
      <RangeSliderBase className="mt-10" />

      <br />
      <DatePickerBase />
      <br />
      <DatePickerBase size="sm" />
      <br />
      <DatePickerBase size="xs" />
      <br />
      <DateRangePickerBase />
    </MainLayout>
  );
}
