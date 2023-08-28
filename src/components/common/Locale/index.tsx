'use client';
import { Icons } from '@/components/icons';
import { useRouter } from 'next-intl/client';

export function LocaleChange() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <Icons name="locale" />
      <p className="text-xs font-bold" onClick={() => router.replace('/', { locale: 'en' })}>
        Tiếng việt
      </p>
    </div>
  );
}
