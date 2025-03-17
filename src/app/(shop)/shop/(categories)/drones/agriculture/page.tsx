import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardShopDronesMain from '@/components/common/cards/shop/drones/main';
import products from '@/data/products';
import { Grid, GridCol } from '@mantine/core';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import appData from '@/data/app';
import IntroPage from '@/components/layout/intro/page';

const metaTitle = 'Agriculture Drones - Optimize Farming with Drone Space';
const metaDesc = `Discover agricultural drones for precision farming, crop monitoring, and spraying. Advanced tools to boost productivity and sustainability.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/shop/drones/agriculture`,
    type: 'website',
    images: [
      {
        url: images.brand.droneSpace.logo.potrait.meta,
        width: 1200,
        height: 1200,
        alt: appData.name.company,
      },
    ],
  },
};

export default async function Agriculture() {
  const drones = products.filter((p) => p.category == 'agriculture');

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: 'Shop',
          title: 'Agriculture Drones',
          desc: metaDesc,
        }}
      />

      <LayoutSection
        id="page-drones-agri"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
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
