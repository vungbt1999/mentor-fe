'use client';
import { Avatar, LocaleChange, Notification } from '@/components/common';
import { ToggleDarkMode } from '@/components/forms';
import { IconName, Icons } from '@/components/icons';
import Logo from '@/components/logo';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Mock = {
  avatar: {
    name: 'Bui Thanh Vung'
  },
  navigation: [
    { title: 'Tổng quang', icon: 'home-line', href: '/' },
    { title: 'Mục tiêu', icon: 'target-line', href: '/target' },
    { title: 'Tin chính sách', icon: 'article-line', href: '/articles' },
    { title: 'Chiến dịch', icon: 'star-line', href: '/campaigns' },
    { title: 'Khóa học', icon: 'lesson-line', href: '/courses' },
    { title: 'Báo cáo', icon: 'chart-line', href: '/report' },
    { title: 'Cài đặt', icon: 'setting-line', href: '/setting' }
  ]
};

type HeaderMainProps = {
  className?: string;
};

export default function HeaderMain({ className }: HeaderMainProps) {
  const { avatar, navigation } = Mock;
  const pathname = usePathname();

  return (
    <header className={className}>
      {/** header info */}
      <div className="container mx-auto py-5 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <ToggleDarkMode />
          <LocaleChange />
          <Notification />
          <Avatar name={avatar.name} />
        </div>
      </div>

      {/** main header */}
      <div className="bg-gradient-to-l from-secondary to-primary">
        <div className="container mx-auto flex items-center h-14 flex-wrap">
          {navigation.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.title}
                className={clsx(
                  'h-full flex items-center justify-center flex-1 text-base-300 font-bold hover:bg-opacity-30 hover:bg-base-content transition-all',
                  {
                    'bg-base-content bg-opacity-30': pathname === item.href
                  }
                )}
              >
                <Icons name={item.icon as IconName} className="mr-2" />
                <div>{item.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
