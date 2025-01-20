'use client';

import * as React from 'react';
import { ArrowDownUp, CreditCard } from 'lucide-react';

import { NavMenu } from '@/components/nav-menu';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'Satoshi',
    email: 'satoshi@jan3.com',
    avatar: '/avatars/shadcn.jpg',
  },
  features: [
    {
      name: 'Swaps',
      url: '#',
      icon: ArrowDownUp,
      disabled: true,
    },
    {
      name: 'Debit Card',
      url: '#',
      icon: CreditCard,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMenu items={data.features} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
