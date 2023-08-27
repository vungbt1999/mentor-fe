import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import HeaderMain from './header';

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Generated by create next app'
};

const getMessages = async (locale: string) => {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} data-theme="light">
      <body id="__next" suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <HeaderMain />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
