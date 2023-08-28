import {
  DatePickerBase,
  InputBase,
  RangeSliderBase,
  DateRangePickerBase
} from '@/components/forms';
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
      <DatePickerBase className="max-w-xs" />
      <DateRangePickerBase />
    </MainLayout>
  );
}
