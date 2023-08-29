import { notFound } from 'next/navigation';
import 'server-only';

export enum ELocale {
  EN = 'en',
  VI = 'vi'
}

export const getDictionary = async (locale: ELocale) => {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
};
