import { WalletCards } from 'lucide-react';

import { formatBigNumbers } from '@/lib/number';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from './ui/skeleton';

export function CardTotalCards({ cards, loading }: { cards: any; loading: boolean }) {
  return (
    <Card>
      <CardHeader>
        <WalletCards className='mb-2' />
        <CardTitle>Total Cards</CardTitle>
        <CardDescription>Total cards over the last month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-2 items-center'>
          <div className='flex gap-2 items-center'>
            <h1 className='text-3xl'>
              {loading ? (
                <Skeleton className='w-[100px] h-[40px] rounded-full bg-muted' />
              ) : (
                formatBigNumbers(cards?.pagination?.total)
              )}
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
