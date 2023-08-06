import { Icons } from '@/components/icons';
import React from 'react';

export function Notification() {
  return (
    <div className="text-gray-100 relative cursor-pointer">
      <Icons name="notification" />

      <div className="bg-danger-100 border-solid border-2 border-white w-4 h-4 rounded-full text-[8px] font-bold text-white flex items-center justify-center absolute -bottom-1 -right-1">
        99
      </div>
    </div>
  );
}
