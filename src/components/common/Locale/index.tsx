import { Icons } from '@/components/icons'
import React from 'react'

export function LocaleChange() {
  return (
    <div className='flex items-center gap-1 text-gray-100 cursor-pointer'>
      <Icons name='locale' />
      <p className='text-xs font-bold'>Tiếng việt</p>
    </div>
  )
}
