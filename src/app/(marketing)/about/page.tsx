import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import {
  Anchor,
  AspectRatio,
  Divider,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import { images } from '@/assets/images';
import videos from '@/assets/videos';
import CardStat from '@/components/common/cards/stat';
import stats from '@/data/stats';
import { SECTION_SPACING } from '@/data/constants';
import appData from '@/data/app';
import CarouselTestimonials from '@/components/common/carousels/testimonials';
import { studentsGet } from '@/handlers/requests/database/student';
import { shuffleArray } from '@/utilities/helpers/array';
import IntroSection from '@/components/layout/intro/section';
import ImageDefault from '@/components/common/images/default';
import TabSpacesHub from '@/components/common/tabs/spaces-hub';
import CardTeamMain from '@/components/common/cards/team/main';
import team from '@/data/team';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: `About ${appData.name.app} - Kenya's Leading Drone Training Academy`,
  description:
    'Learn more about Drone Space, our mission, and how we empower drone enthusiasts in Kenya with top-notch training and innovative drone solutions.',
};

export default async function About() {
  const { students } = await studentsGet();

  return (
    <LayoutPage>
      <LayoutSection id="our-story" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid gutter={{ base: 'xl', md: 48 }}>
          <GridCol span={{ base: 12, md: 6 }} visibleFrom="sm">
            <AspectRatio ratio={1920 / 1080} h={'100%'}>
              <video
                width="100%"
                height="100%"
                controls
                autoPlay
                loop
                muted
                style={{
                  borderRadius: 'var(--mantine-radius-sm)',
                  overflow: 'hidden',
                }}
                poster={images.gallery.airfield.image1}
              >
                <source src={videos.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap={'xl'}>
              <Group pr={{ md: 40 }}>
                <IntroSection
                  props={{
                    subTitle: 'Who Are We',
                    title:
                      'Approved Unmanned Aircraft Systems Training Organization',
                  }}
                  options={{ alignment: 'start' }}
                />
              </Group>

              <Stack gap={'xs'}>
                <Text>
                  {appData.name.app} is one of the first certified UTO, ROC and
                  Drone distributors in Kenya. Established in 2018,{' '}
                  {appData.name.app} is approved and certified by{' '}
                  <Anchor
                    inherit
                    underline="hover"
                    href="https://kcaa.or.ke/"
                    target="_blank"
                  >
                    Kenya Civil Aviation Authority (KCAA)
                  </Anchor>{' '}
                  to offer Remote Pilot License (RPL) course in multi-rotor and
                  fixed wing, RPL instructor rating and soon Beyond Visual Line
                  of Sight (BVLOS) rating. The Academy provides Kenya&apos;s
                  highest quality drone training with a simple yet comprehensive
                  model for corporate clients, government agencies, public
                  safety departments, and individuals.
                </Text>

                <Text>
                  {appData.name.app} is a holder of Remote Operator&apos;s
                  Certificate (ROC) approved by KCAA to conduct drone operations
                  in search and rescue, power lines inspection, agricultural
                  spraying, photography and cinematography, solar inspection,
                  runway calibration among other operations.
                </Text>

                <Text>
                  {appData.name.app} is also a certified distributor and a
                  reseller of Unmanned Aircraft Vehicles/drones.{' '}
                  {appData.name.app} is one of the few approved importers of UAS
                  into Kenya having supplied the United Nations-WFP, Museums of
                  Kenya and Ericson&apos;s
                </Text>
              </Stack>
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="stats"
        padded={24}
        bg={'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'}
        c={'light-dark(var(--mantine-color-white),var(--mantine-color-white))'}
      >
        <Grid justify="center">
          {stats.map((stat, index) => (
            <GridCol key={index} span={{ base: 12, xs: 4, md: 'auto' }}>
              <CardStat data={stat} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection id="mission-vision" padded>
        <Stack gap={SECTION_SPACING}>
          <Grid align="center" gutter={'xl'}>
            <GridCol span={{ base: 12, xs: 7 }} order={{ base: 2, xs: 1 }}>
              <Stack pr={{ md: 'xl' }}>
                <IntroSection
                  props={{
                    subTitle: 'Our',
                    title: 'Mission',
                  }}
                  options={{ alignment: 'start' }}
                />

                <Divider w={{ md: '20%' }} size={2} color="sec.4" />

                <Text>
                  Our mission is to be the preferred drone training and
                  commercial operations organization for Government, corporates,
                  and industry sector by providing quality, high standards, and
                  reliable services.
                </Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 5 }} order={{ base: 1, xs: 2 }}>
              <ImageDefault
                src={
                  'https://cdn.pixabay.com/photo/2023/08/13/17/54/drone-8188144_1280.jpg'
                }
                alt={'Mission'}
                height={{ base: 240, md: 280 }}
                mode="grid"
                radius={'sm'}
              />
            </GridCol>
          </Grid>

          <Grid align="center" gutter={'xl'}>
            <GridCol span={{ base: 12, xs: 7 }} order={{ base: 2 }}>
              <Stack pl={{ md: 'xl' }}>
                <IntroSection
                  props={{
                    subTitle: 'Our',
                    title: 'Vision',
                  }}
                  options={{ alignment: 'start' }}
                />

                <Divider w={{ md: '20%' }} size={2} color="sec.4" />

                <Text>
                  Our long-term vision is to contribute and empower to the
                  ever-growing youth in Kenya by equipping them with the drone
                  technology skill and realization of economic prosperity for
                  young entrepreneurs who in turn would be able to make a living
                  through entrepreneurship.
                </Text>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, xs: 5 }} order={{ base: 1 }}>
              <ImageDefault
                src={
                  'https://cdn.pixabay.com/photo/2016/11/29/02/07/drone-1866742_1280.jpg'
                }
                alt={'Mission'}
                height={{ base: 240, md: 280 }}
                mode="grid"
                radius={'sm'}
              />
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection id="team" padded>
        <IntroSection
          props={{
            subTitle: 'Our Team',
            title: 'Meet The Team',
            desc: `Our team is dedicated to delivering exceptional results and pushing boundaries. Get to know the people who bring our vision to life, one step at a time.`,
          }}
          options={{ spacing: true }}
        />

        <Grid justify="center">
          {team.map((item, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6, md: 3 }}>
              <CardTeamMain data={item} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="spaces-and-hub"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <IntroSection
          props={{
            subTitle: 'Spaces & Hub',
            title: 'Drone Spaces & Hub Mission',
            desc: 'The Drone Spaces & Hub will strive to strengthen and accelerate development in technology and innovation through creation of platforms that will enable job creation and entrepreneurship.',
          }}
          options={{ spacing: true }}
        />

        <TabSpacesHub />
      </LayoutSection>

      <LayoutSection
        id="about-testimonials"
        padded
        bg={
          'light-dark(var(--mantine-color-pri-light),var(--mantine-color-pri-light))'
        }
        // c={'light-dark(var(--mantine-color-white),var(--mantine-color-white))'}
      >
        <Stack gap={'xl'}>
          <IntroSection
            props={{
              subTitle: 'Testimonials',
              title: 'What Our Clients Say',
              desc: `At ${appData.name.app}, we take pride in delivering exceptional
              results that exceed expectations. Take a moment to hear directly from the people who
              matter most: our valued clients.`,
            }}
            options={{ spacing: true }}
          />

          <CarouselTestimonials props={shuffleArray(students)} />
        </Stack>
      </LayoutSection>
    </LayoutPage>
  );
}
