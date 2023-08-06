import { Icons } from '@/components/icons';

type RewardCoinProps = {
  coin: number;
};

export function RewardCoin({ coin }: RewardCoinProps) {
  return (
    <div className='flex items-center text-sm font-bold h-full'>
      <Icons name="reward" />
      <p className='ml-2'>{coin} Golds</p>
    </div>
  );
}
