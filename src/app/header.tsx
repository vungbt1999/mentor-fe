import { Avatar, LocaleChange, Notification } from '@/components/common';
import Logo from '@/components/logo';
import Link from 'next/link';

const Mock = {
  avatar: {
    name: 'Bui Thanh Vung'
  },
  navigation: [
    { title: 'Tổng quang', icon: '', href: '/' },
    { title: 'Mục tiêu', icon: '', href: '/' },
    { title: 'Tin chính sách', icon: '', href: '/' },
    { title: 'Chiến dịch', icon: '', href: '/' },
    { title: 'Báo cáo', icon: '', href: '/' },
    { title: 'Cài đặt', icon: '', href: '/' }
  ]
};

type HeaderMainProps = {
  className?: string;
};

export default function HeaderMain({ className }: HeaderMainProps) {
  const { avatar, navigation } = Mock;
  return (
    <header className={className}>
      {/** header info */}
      <div className="container mx-auto py-5 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <LocaleChange />
          <Notification />
          <Avatar name={avatar.name} />
        </div>
      </div>

      {/** main header */}
      <div className="bg-gradient-to-l to-primary from-info-200 min-h-[60px]">
        <div className="container mx-auto flex items-center h-full">
          {navigation.map((item, index) => {
            return (
              <div key={index} className='h-full flex items-center justify-center'>
                <Link href={item.href} >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
