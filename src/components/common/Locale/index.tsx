'use client';
import { Icons } from '@/components/icons';
import clsx from 'clsx';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export function LocaleChange() {
  const t = useTranslations('Common');
  const options = useMemo(() => {
    return [
      { value: 'vi', label: t('vietnam') },
      { value: 'en', label: t('english') }
    ];
  }, [t]);

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [localeActive, setLocalActive] = useState<{ value: string; label: string }>(options[0]);

  useEffect(() => {
    if (!locale) return;
    const active = options.find((x) => x.value === locale);
    if (active) {
      setLocalActive(active);
    }
  }, [locale, options]);

  useOnClickOutside(ref, () => setShowMenu(false));

  const onChangeLocale = (locale: { value: string; label: string }) => {
    setLocalActive(locale);
    setShowMenu(false);
    router.replace('/', { locale: locale.value });
  };

  return (
    <div ref={ref} className="flex items-center gap-1 cursor-pointer relative">
      <div onClick={() => setShowMenu(!showMenu)} className="flex items-center">
        <Icons name="locale" />
        <p className="text-xs font-bold ml-1" onClick={() => setShowMenu(!showMenu)}>
          {localeActive.label}
        </p>
      </div>
      <ul
        className={clsx(
          'absolute top-7 left-0 right-0 w-full bg-base-100 border border-solid border-base-200 rounded shadow min-w-[9rem] z-10',
          {
            block: showMenu,
            hidden: !showMenu
          }
        )}
      >
        {options.map((item) => (
          <li
            key={item.value}
            onClick={() => onChangeLocale(item)}
            className=" first:rounded-tl first:rounded-tr last:rounded-bl last:rounded-br px-2 py-2 border-b border-solid border-base-300 last:border-0 transition-all ease-in-out hover hover:bg-primary hover:bg-opacity-20 cursor-pointer flex items-center justify-between"
          >
            <Image
              src={`/locale/${item.value}.png`}
              alt={`locale-${item.value}`}
              width={24}
              height={24}
            />
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
