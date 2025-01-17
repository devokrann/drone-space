import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import LayoutHeroMain from '@/components/layout/hero/main';
import appData from '@/data/app';

export const metadata: Metadata = {
  title: {
    default: `Accessories`,
    template: `%s - Accessories - Drone Shop - ${appData.name.company}`,
  },
};

export default function AccessoriesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody hero={<LayoutHeroMain />}>
      <main>{children}</main>
    </LayoutBody>
  );
}
