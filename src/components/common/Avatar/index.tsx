import { ImageObjType } from '@/types/common';
import Image from 'next/image';
import Link from 'next/link';

type AvatarProps = {
  name: string;
  avatar?: ImageObjType;
};
export function Avatar({ name, avatar }: AvatarProps) {
  const detectName = () => {
    if (avatar) return '';
    const nameMapping = name.split(' ');
    let nameDetect = nameMapping;
    if (nameMapping.length >= 3) {
      const first = nameMapping.shift() ?? '';
      const last = nameMapping.pop() ?? '';
      nameDetect = [first, last];
    }
    return nameDetect.map((x) => x.charAt(0));
  };

  return (
    <Link href="/profile" className="flex items-center">
      {avatar ? (
        <Image
          width={40}
          height={40}
          src={avatar.url}
          alt={avatar?.alt ?? 'avatar'}
          className="rounded-full"
        />
      ) : (
        <div className="w-10 h-10 aspect-square rounded-full bg-gray-100 text-white font-bold flex items-center justify-center">
          {detectName()}
        </div>
      )}
      <p className="text-sm font-bold ml-2">{name}</p>
    </Link>
  );
}
