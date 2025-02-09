import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Grid, GridCol } from '@mantine/core';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import products from '@/data/products';

export const metadata: Metadata = {
  title: 'Enterprise Drones - High-Performance Drones for Business',
  description: `Explore enterprise-grade drones built for commercial applications like surveying, inspections, and logistics. Reliable solutions for your business needs.`,
};

export default async function Enterprise() {
  const drones = products.filter((p) => p.category == 'enterprise');

  return (
    <LayoutPage>
      <LayoutSection id="page-drones-agri" padded containerized={'responsive'}>
        <Grid>
          {drones.map((drone, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
              <CardShopDronesMain data={drone} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
