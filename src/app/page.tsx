'use client';

// Package
import useSWR from 'swr';
import { BadgeDollarSign, BadgePercent, ReceiptText, TriangleAlert } from 'lucide-react';

// Hooks and libs
import fetcher from '@/lib/fetcher';
import { formatBigNumbers } from '@/lib/number';

// Config
import { FEE_MOON, FEE_MOON_PROFIT } from '@/config/constants';

// Components
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CardTotalCards } from '@/components/card-total-cards';

export default function Page() {
  // MOCK DATA
  const totalSales = 0;
  const totalProfit = totalSales * FEE_MOON * FEE_MOON_PROFIT;
  const totalTransactions = 0;
  const errorRate = 0;

  const { data: cards, isLoading } = useSWR('/api/cards', fetcher, {
    refreshInterval: 60000, // 60 seconds
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex w-full items-center justify-between px-4'>
            <div className='flex items-center gap-2'>
              <SidebarTrigger className='-ml-1' />
              <Separator orientation='vertical' className='mr-2 h-4' />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className='hidden md:block'>
                    <BreadcrumbLink href='#'>Aqua Wallet</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className='hidden md:block' />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Debit Cards</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-sm text-muted-foreground'>Currency:</p>
              <Select defaultValue='USD'>
                <SelectTrigger className='w-[80px]'>
                  <SelectValue placeholder='Currency' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='USD'>USD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <CardTotalCards cards={cards} loading={isLoading} />
            <Card>
              <CardHeader>
                <BadgeDollarSign className='mb-2' />
                <CardTitle>Total Consumition</CardTitle>
                <CardDescription>Total consumition over the last month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 items-center'>
                    <span>$</span>
                    <h1 className='text-3xl'>{formatBigNumbers(totalSales, true)}</h1>
                  </div>
                  {/* <Badge>+10%</Badge> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BadgePercent className='mb-2' />
                <CardTitle>Total Profit</CardTitle>
                <CardDescription>Total profit over the last month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 items-center'>
                    <span>$</span>
                    <h1 className='text-3xl'>{formatBigNumbers(totalProfit, true)}</h1>
                  </div>
                  {/* <Badge>+10%</Badge> */}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <ReceiptText className='mb-2' />
                <CardTitle>Total Transactions</CardTitle>
                <CardDescription>Total transactions over the last month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 items-center'>
                    {/* <span>$</span> */}
                    <h1 className='text-3xl'>{formatBigNumbers(totalTransactions)}</h1>
                  </div>
                  {/* <Badge>+10%</Badge> */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TriangleAlert className='mb-2' />
                <CardTitle>Error Rate</CardTitle>
                <CardDescription>Error rate over the last month.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex gap-2 items-center'>
                  <div className='flex gap-2 items-center'>
                    <h1 className='text-3xl'>{errorRate.toFixed(1)}</h1>
                    <span>%</span>
                  </div>
                  {/* <Badge>+10%</Badge> */}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
