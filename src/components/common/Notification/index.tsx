import { Icons } from '@/components/icons';
import React from 'react';

export function Notification() {
  return (
    <div className="relative cursor-pointer">
      <Icons name="notification" />

      <div className="bg-error border-solid border-2 border-base-100 w-4 h-4 rounded-full text-[8px] font-bold text-base-100 flex items-center justify-center absolute -bottom-1 -right-1">
        99
      </div>
    </div>
  );
}
