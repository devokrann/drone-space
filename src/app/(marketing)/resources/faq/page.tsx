import React from 'react';

import { Metadata } from 'next';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
// import IntroPage from '@/components/layout/intro/page';
import ModalContactTraining from '@/components/common/modals/contact/training';
import ModalContactShop from '@/components/common/modals/contact/shop';
import AccordionFaq, { faqs } from '@/components/common/accordions/faq';
import TooltipWhatsApp from '@/components/common/tooltips/whatsapp';
import { Anchor, Text, Title } from '@mantine/core';
import Link from 'next/link';
import appData from '@/data/app';
import { HOSTED_BASE_URL } from '@/data/constants';
import { images } from '@/assets/images';

const metaTitle = `${appData.name.app} FAQ - Answers to Your Drone Training Questions`;
const metaDesc =
  'Get quick answers to common questions about drone training, services, and requirements in Kenya. Your guide to Drone Space resources.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/resources/faq`,
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

export default async function Faq() {
  return (
    <LayoutPage>
      {/* <IntroPage
        props={{
          path: `Q & A`,
          title: 'Frequently Asked Questions',
          desc: `Need a help with something? Here are our most frequently asked questions.`,
        }}
      /> */}

      <LayoutSection id="training" padded containerized={'sm'} shadowed>
        <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
          {faqs.training.title}
        </Title>

        <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'} my={'xl'}>
          For further information, please visit our training section, for course
          prices go to{' '}
          <Anchor
            component={Link}
            href="/drone-training/pricing"
            inherit
            fw={500}
          >
            pricing
          </Anchor>{' '}
          and for any other training inquiries, please send us a{' '}
          <ModalContactTraining>
            <Anchor inherit fw={500}>
              training inquiry
            </Anchor>
          </ModalContactTraining>
          .
        </Text>

        <AccordionFaq section="training" />
      </LayoutSection>

      <LayoutSection id="reselling" padded containerized={'sm'} shadowed>
        <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
          {faqs.shop.title}
        </Title>

        <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'} my={'xl'}>
          To see available drones and drone prices please visit our{' '}
          <Anchor component={Link} href="/shop" inherit fw={500}>
            shop section
          </Anchor>
          , for drone importation or other drone purchase inquiries, please send
          us a{' '}
          <ModalContactShop>
            <Anchor inherit fw={500}>
              product/purchase inquiry
            </Anchor>
          </ModalContactShop>
          .
        </Text>

        <AccordionFaq section="shop" />
      </LayoutSection>

      <LayoutSection id="general" padded containerized={'sm'} shadowed>
        <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
          {faqs.general.title}
        </Title>

        <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'} my={'xl'}>
          For any other questions,{' '}
          <Anchor component={Link} inherit fw={500} href={'/about/contact'}>
            submit an inquiry
          </Anchor>{' '}
          or{' '}
          <TooltipWhatsApp>
            <Anchor
              inherit
              fw={500}
              href={`${appData.socials.whatsapp.link}`}
              target="_blank"
            >
              start a chat with us
            </Anchor>
          </TooltipWhatsApp>
          .
        </Text>

        <AccordionFaq />
      </LayoutSection>

      <LayoutSection id="considerations" padded containerized={'sm'} shadowed>
        <Title ta={'center'} order={2} fz={'xl'} fw={'bold'}>
          {faqs.considerations.title}
        </Title>

        <Text w={{ md: '75%' }} mx={'auto'} ta={'center'} fz={'sm'} my={'xl'}>
          The factors to consider and potential risks involved.
        </Text>

        <AccordionFaq section="considerations" />
      </LayoutSection>
    </LayoutPage>
  );
}
