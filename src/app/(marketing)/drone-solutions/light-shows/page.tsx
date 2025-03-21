import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import HeroShows from '@/components/layout/hero/shows';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridCol,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import CardShowsAdvantages from '@/components/common/cards/shows/advantages';
import CardShowsApplications from '@/components/common/cards/shows/applications';
import AccordionShows from '@/components/common/accordions/shows';
import CardShowsPrice from '@/components/common/cards/shows/price';
import TableShows from '@/components/common/tables/shows';
import ModalContactShows from '@/components/common/modals/contact/shows';
import CardShowsUnderstand from '@/components/common/cards/shows/understand';
import {
  IconCalendarPlus,
  IconChevronsRight,
  IconPhone,
} from '@tabler/icons-react';
import { images } from '@/assets/images';
import videos from '@/assets/videos';
import appData from '@/data/app';
import shows from '@/data/shows';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
} from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import IntroSection from '@/components/layout/intro/section';

const metaTitle = 'Drone Light Shows - Stunning Aerial Displays by Drone Space';
const metaDesc =
  'Experience breathtaking drone light shows for events and celebrations. Discover how Drone Space creates unforgettable aerial art.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDesc,
  openGraph: {
    title: metaTitle,
    description: metaDesc,
    url: `${HOSTED_BASE_URL.DRONE_SPACE}/drone-solutions/light-shows`,
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

export default async function LighShow() {
  const data = shows;

  return (
    <LayoutPage>
      <HeroShows />

      <LayoutSection id="page-lightshow-intro" containerized={false}>
        <Grid gutter={0}>
          <GridCol span={{ base: 12, md: 6 }} p={'xs'}>
            <ImageDefault
              src={images.shows.talk}
              alt={"Let's Talk Drone Light Shows"}
              loading="lazy"
              height={{ base: 240, xs: 360, md: 490, lg: 420 }}
              radius={'sm'}
            />
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Container size={'sm'} py={64} px={{ md: 'xl' }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', md: 'start' }}
                fz={{ md: 24 }}
              >
                Let&apos;s Talk Drone Light Shows
              </Title>

              <Divider color="sec.3" size={2} mt={'md'} />

              <List
                mt={'md'}
                spacing={'xs'}
                icon={
                  <IconChevronsRight
                    size={ICON_SIZE * 1.5}
                    stroke={ICON_STROKE_WIDTH}
                    color="var(--mantine-color-pri-9)"
                  />
                }
              >
                {data.talk.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Container>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-understand"
        bg={'var(--mantine-color-gray-1)'}
        containerized={false}
      >
        <Grid gutter={0}>
          <GridCol
            span={{ base: 12, md: 6 }}
            order={{ base: 1, md: 2 }}
            p={'xs'}
          >
            <ImageDefault
              src={images.shows.understanding}
              alt={'Understanding Drone Light Shows'}
              loading="lazy"
              height={{ base: 240, xs: 360, md: 580, lg: 500 }}
              radius={'sm'}
            />
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
            <Container size={'sm'} py={64} px={{ md: 'xl' }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', sm: 'start' }}
                fz={{ md: 24 }}
              >
                Understanding Drone Light Shows
              </Title>

              <Grid mt={'xl'}>
                {data.understand.map((item, index) => (
                  <GridCol key={index} span={{ base: 12, md: 6 }}>
                    <CardShowsUnderstand data={item} />
                  </GridCol>
                ))}
              </Grid>
            </Container>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="page-lightshow-video" containerized={false}>
        <Grid gutter={0}>
          <GridCol span={{ base: 12, md: 6 }} p={'xs'}>
            <AspectRatio
              ratio={1920 / 1080}
              h={'100%'}
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--mantine-radius-md)',
              }}
            >
              <video
                width="100%"
                controls
                autoPlay
                muted
                loop
                // style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}
                // poster={images.gallery.innovation.jamuhuri.yr2020.image9}
                height={'100%'}
              >
                <source src={videos.hero.lightShow.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AspectRatio>
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }}>
            <Container size={'sm'} py={64} px={{ md: 'xl' }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', sm: 'start' }}
                fz={{ md: 24 }}
                w={{ md: '75%' }}
              >
                Advantages of Drone Space Light Shows
              </Title>

              <Grid mt={'xl'}>
                {data.advantages.map((advantage, index) => (
                  <GridCol key={index} span={{ base: 12 }}>
                    <CardShowsAdvantages
                      data={{
                        ...advantage,
                        icon: data.icons[data.advantages.indexOf(advantage)],
                      }}
                    />
                  </GridCol>
                ))}
              </Grid>
            </Container>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-why"
        containerized={false}
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={0}>
          <GridCol
            span={{ base: 12, md: 6 }}
            order={{ base: 1, md: 2 }}
            p={'xs'}
          >
            <ImageDefault
              src={images.shows.hny}
              alt={'Why Choose Drone Light Shows?'}
              loading="lazy"
              height={{ base: 240, xs: 360, md: 680, lg: 620 }}
              radius={'sm'}
            />
          </GridCol>

          <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
            <Container size={'sm'} py={64} px={{ md: 'xl' }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', sm: 'start' }}
                fz={{ md: 24 }}
                w={{ md: '80%' }}
              >
                Why Choose Drone Light Shows Over Fireworks?
              </Title>

              <List spacing={'xs'} listStyleType="none" mt={'xl'}>
                {data.why.map((item) => (
                  <>
                    {data.why.indexOf(item) > 0 && (
                      <Divider
                        size={3}
                        color="sec.3"
                        variant="dotted"
                        my={'md'}
                      />
                    )}

                    <ListItem mt={'md'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.label}
                      </Text>
                      : {item.item}
                    </ListItem>
                  </>
                ))}
              </List>
            </Container>
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-applications"
        padded
        shadowed
        containerized={'responsive'}
      >
        <IntroSection
          props={{
            subTitle: 'Use Cases',
            title: 'Versatile Applications',
            desc: `Drone Space light shows are perfect for a wide range of events and
          celebrations, adding a unique and memorable touch to any occasion`,
          }}
        />

        <Grid mt={48}>
          {data.applications.map((application, index) => (
            <GridCol key={index} span={{ base: 12, xs: 6, md: 3 }}>
              <CardShowsApplications data={application} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-cta1"
        padded={96}
        containerized={'responsive'}
        c={'light-dark(var(--mantine-color-white),var(--mantine-color-white))'}
        style={{
          backgroundImage: `url(${images.shows.ready})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        pos={'relative'}
      >
        <Box
          pos={'absolute'}
          left={0}
          top={0}
          right={0}
          bottom={0}
          style={{ backgroundColor: 'rgba(0,0,0,0.40)' }}
        ></Box>

        <Stack pos={'relative'}>
          <Grid align="center">
            <GridCol span={{ base: 12, md: 8, lg: 9 }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: 'lg', sm: 'xl', md: 28 }}
                c={
                  'light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))'
                }
              >
                Your Brand, Your Story, Our Drones:
                <br />
                Be the First to Make a Statement in Kenya!
              </Title>

              <Text
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: 'xs', md: 'sm' }}
                mt={'xs'}
              >
                As one of the leading providers of drone light shows in Kenya,
                Drone Space is at the forefront of this innovative technology.
                Join the ranks of innovative brands by booking your exclusive
                drone light show with us.
              </Text>
            </GridCol>

            <GridCol span={{ base: 12, md: 4, lg: 3 }}>
              <Flex
                direction={{ base: 'column', sm: 'row', md: 'column' }}
                justify={'center'}
                align={{ base: 'center', md: 'end' }}
                gap={'md'}
              >
                <ModalContactShows>
                  <Button
                    miw={200}
                    color="sec.3"
                    c={'pri'}
                    leftSection={
                      <IconCalendarPlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    Book Show
                  </Button>
                </ModalContactShows>
                <Button
                  component="a"
                  href={`tel:${appData.phones.main}`}
                  miw={200}
                  color="sec.3"
                  c={'pri'}
                  leftSection={
                    <IconPhone size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                  }
                >
                  {appData.phones.main}
                </Button>
              </Flex>
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-faq"
        padded
        containerized={'responsive'}
      >
        <Grid gutter={{ base: 'xl', md: 'md' }}>
          <GridCol span={{ base: 12, md: 5.5 }}>
            <IntroSection
              props={{
                subTitle: `FAQ's`,
                title: `Most Asked`,
                desc: `Below are some general questions to familiarize yourself`,
              }}
              options={{ spacing: true }}
            />

            <AccordionShows variant="default" />
          </GridCol>

          <GridCol span={{ md: 1 }} visibleFrom="md">
            <Center h={'100%'}>
              <Divider orientation="vertical" color="sec.3" />
            </Center>
          </GridCol>

          <GridCol span={{ base: 12, md: 5.5 }}>
            <IntroSection
              props={{
                subTitle: `Cost`,
                title: `Factors Affecting the Cost`,
                desc: `The following are some factors that determine the pricing`,
              }}
              options={{ spacing: true }}
            />

            <AccordionShows variant="factors" />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-pricing"
        padded
        containerized={'responsive'}
        bg={'var(--mantine-color-gray-1)'}
      >
        <IntroSection
          props={{
            subTitle: `Pricing`,
            title: `Typical Pricing Ranges`,
            desc: `Here are some general considerations and typical pricing ranges`,
          }}
        />

        <Grid justify="center" mt={48}>
          {data.pricing.map(
            (price, index) =>
              data.pricing.indexOf(price) < 3 && (
                <GridCol key={index} span={{ base: 12, xs: 6, md: 4 }}>
                  <CardShowsPrice data={price} />
                </GridCol>
              )
          )}

          {data.pricing.map(
            (price, index) =>
              data.pricing.indexOf(price) > 2 && (
                <GridCol key={index} span={{ base: 12, xs: 6, md: 5 }}>
                  <CardShowsPrice data={price} />
                </GridCol>
              )
          )}
        </Grid>

        <Text ta={'center'} mt={48}>
          <Text component="span" inherit fw={500} c={'pri'}>
            Note:
          </Text>{' '}
          All our drone light shows take 12-15 minutes.
        </Text>
      </LayoutSection>

      <LayoutSection
        id="page-lightshow-timeline"
        padded
        containerized={'responsive'}
      >
        <IntroSection
          props={{
            subTitle: `Logistics`,
            title: `Project Timeline`,
            desc: `See the stages of the project from planning to execution`,
          }}
        />

        <Grid mt={48}>
          {data.timeline.map((item, index) => (
            <GridCol key={index} span={{ base: 12, md: 6 }}>
              <Card withBorder h={'100%'} pt={'xl'} pb={0}>
                <Title
                  order={3}
                  fw={'bold'}
                  ta={'center'}
                  fz={{ md: 'lg' }}
                  mb={'md'}
                >
                  <Text component="span" inherit visibleFrom="md">
                    {data.timeline.indexOf(item) + 1}.{' '}
                  </Text>
                  {item.title}
                </Title>

                <TableShows data={item.desc} />
              </Card>
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>

      {/* <LayoutSection
        id="page-lightshow-cta2"
        padded={96}
        containerized={'responsive'}
        c={'light-dark(var(--mantine-color-white),var(--mantine-color-white))'}
        style={{
          backgroundImage: `url(${images.shows.talk})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
        pos={'relative'}
      >
        <Box
          pos={'absolute'}
          left={0}
          top={0}
          right={0}
          bottom={0}
          style={{ backgroundColor: 'rgba(0,0,0,0.40)' }}
        ></Box>

        <Stack gap={48} pos={'relative'}>
          <Grid align="center">
            <GridCol span={{ base: 12, md: 8, lg: 9 }}>
              <Title
                order={2}
                fw={'bold'}
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: 'lg', sm: 'xl', md: 28 }}
                c={
                  'light-dark(var(--mantine-color-sec-3),var(--mantine-color-sec-3))'
                }
              >
                Book Your Drone Light Show Today
              </Title>

              <Text
                ta={{ base: 'center', md: 'start' }}
                fz={{ base: 'xs', md: 'sm' }}
                mt={'xs'}
              >
                Drone Space&apos;s commitment to excellence and innovation
                ensures that our drone light shows will not only meet but exceed
                the expectations of our clients and audiences. As we continue to
                lead the way in drone technology, we invite you to experience
                the magic and wonder of our drone light shows, setting new
                standards for entertainment in Kenya and beyond.
              </Text>
            </GridCol>

            <GridCol span={{ base: 12, md: 4, lg: 3 }}>
              <Flex
                direction={{ base: 'column', sm: 'row', md: 'column' }}
                justify={'center'}
                align={{ base: 'center', md: 'end' }}
                gap={'md'}
              >
                <ModalContactShows>
                  <Button
                    miw={200}
                    color="sec.3"
                    c={'pri'}
                    leftSection={
                      <IconCalendarPlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    }
                  >
                    Book Show
                  </Button>
                </ModalContactShows>
                <Button
                  component="a"
                  href={`tel:${appData.phones.main}`}
                  miw={200}
                  color="sec.3"
                  c={'pri'}
                  leftSection={
                    <IconPhone size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
                  }
                >
                  {appData.phones.main}
                </Button>
              </Flex>
            </GridCol>
          </Grid>
        </Stack>
      </LayoutSection> */}
    </LayoutPage>
  );
}
