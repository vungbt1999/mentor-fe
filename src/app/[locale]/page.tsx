import { MainLayout } from '@/components/layouts';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return <MainLayout title="Phòng Solution">MainLayout</MainLayout>;
}
