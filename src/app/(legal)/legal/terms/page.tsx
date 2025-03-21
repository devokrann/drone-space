import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Divider, List, ListItem, Text, Title } from '@mantine/core';
import legal from '@/data/legal';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';
import IntroPage from '@/components/layout/intro/page';

const metaTitle = `Terms and Conditions - ${appData.name.app} Kenya`;
const metaDesc = `Review the terms and conditions governing the use of ${appData.name.app} services, training, and products. Stay informed about our policies and commitments.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/legal/terms`,
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

export default async function TermsConditions() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `T & C`,
          title: 'Terms and Conditions',
          desc: `Review the terms and conditions governing the use of ${appData.name.app} services, training, and products.`,
        }}
      />

      <LayoutSection id="children" padded bg={'var(--mantine-color-gray-1)'}>
        <>
          <LayoutSection id="page-legal-privacy-header" containerized={'sm'}>
            <Text
              inherit
              c={'dimmed'}
              fz={'xs'}
              fw={500}
              mt={'xs'}
              ta={'center'}
            >
              Last Updated:{' '}
              <Text component="span" inherit>
                Sep 26, 2024
              </Text>
            </Text>

            <Divider mt={'md'} />
          </LayoutSection>

          {legal.terms.map((t, index) => (
            <LayoutSection
              key={index}
              id="page-legal-privacy-list"
              margined={40}
              containerized={'sm'}
            >
              <Title order={2} fz={'lg'}>
                {legal.terms.indexOf(t) + 1}. {t.title}
              </Title>

              {t.prose.map((p, index) => (
                <Text key={index} mt={'xs'}>
                  {p.content}
                </Text>
              ))}

              {t.list && (
                <List size="sm" withPadding spacing={4} mt={'xs'}>
                  {t.list.map((i, index) => (
                    <ListItem key={index}>{i.content}</ListItem>
                  ))}
                </List>
              )}
            </LayoutSection>
          ))}
        </>
      </LayoutSection>
    </LayoutPage>
  );
}
