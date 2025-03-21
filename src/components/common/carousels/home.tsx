'use client';

import React from 'react';
import { useRef } from 'react';
import NextImage from 'next/image';
import {
  AspectRatio,
  Box,
  Button,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { IconExternalLink, IconFileDownload } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { images } from '@/assets/images';
import videos from '@/assets/videos';
import ModalAdvertisment from '../modals/advertisment';
import LayoutSection from '@/components/layout/section';
// import ModalPoster from '../modals/poster';
// import ModalCamp from '../modals/camp';
// import ModalShows from '../modals/shows';
import ModalDownloadDocument from '@/components/common/modals/download/document';
import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import classes from './home.module.scss';

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 8000 }));

  const anchors = (
    <Group gap={'xs'}>
      <ModalDownloadDocument props={{ type: 'brochure' }}>
        <Button
          size="xs"
          leftSection={
            <IconFileDownload size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />
          }
        >
          Brochure
        </Button>
      </ModalDownloadDocument>

      {/* <ModalPoster /> */}
    </Group>
  );

  const slides = data.map((slide, index) => (
    <CarouselSlide
      key={index}
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.75) 100%), url('${slide.image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <LayoutSection id={`carousel-home-slide-${index}`}>
        <Stack align={'center'} justify="center" mih={600}>
          <Title order={1} ta={'center'} className={classes.title}>
            {slide.title}
          </Title>

          <Text w={{ base: '100%', md: '50%' }} ta={'center'} fz={'sm'}>
            {slide.desc}
          </Text>

          <Group gap={'xs'}>
            {anchors} <ModalAdvertisment />
          </Group>

          <Group gap={'xs'}>
            {/* <ModalAdvertisment /> */}
            {/* <ModalShows /> */}
          </Group>
        </Stack>
      </LayoutSection>
    </CarouselSlide>
  ));

  return (
    <Carousel
      withIndicators
      loop
      withControls={false}
      classNames={{
        slide: classes.slide,
        control: classes.control,
        indicator: classes.indicator,
      }}
      plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      <CarouselSlide
        key={'slide-conference'}
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 100%), url('${images.posters.conference.poster1.landscape}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <LayoutSection id="carousel-slide" containerized={'lg'}>
          <Stack align={'center'} justify="center" mih={600}>
            <Stack className={classes.imageContainer} h={80}>
              <Image
                src={images.brand.conference.logo.landscape.light}
                alt={'AI Conference'}
                loading="lazy"
                h={80}
                component={NextImage}
                width={1920}
                height={1080}
              />
            </Stack>

            <Text
              inherit
              fz={{ base: 'xs', xs: 'sm', sm: 'md', md: 'lg' }}
              ta={'center'}
            >
              Following the success of the first 2024 AI Conference Nairobi,
              which attracted over 900 attendees, Drone Space is excited to
              announce that it will host the second AI Conference Nairobi on
              September 16th and 17th, 2025.
            </Text>

            <Text
              w={{ base: '100%', md: '75%' }}
              ta={'center'}
              fz={{ base: 'xs', xs: 'lg', sm: 'xl' }}
              c={'yellow.4	'}
              fw={'bold'}
            >
              Explore the Fusion of AI, Drones, and Data Analytics
            </Text>

            <Title
              order={1}
              className={classes.title}
              ta={'center'}
              fz={{ base: 'lg', xs: 'xl', sm: 24, md: 32 }}
            >
              JW Marriott Hotel, Westlands <br />
              Tue 16th - Wed 17th September, 2025
            </Title>

            <Text
              w={{ base: '100%', md: '75%', lg: '60%' }}
              ta={'center'}
              fz={'sm'}
            >
              Drone Space hosted Kenya&apos;s first public AI Conference on
              March 26th - 27th, 2024, and will hold the 2nd AI Conference
              Nairobi on September 16th - 17th, 2025
            </Text>

            <Group gap={'xs'}>
              <Button
                component={'a'}
                href="https://aiconference.co.ke"
                target="_blank"
                color="white"
                variant="outline"
                radius={'xl'}
                size="xs"
                rightSection={
                  <IconExternalLink
                    size={ICON_SIZE / 1.5}
                    stroke={ICON_STROKE_WIDTH}
                  />
                }
              >
                <Text component="span" inherit>
                  Visit Our AI Conference Website
                </Text>
              </Button>
            </Group>
          </Stack>
        </LayoutSection>
      </CarouselSlide>

      <CarouselSlide key={'slide-video'} pos={'relative'}>
        <div className={classes.underlay}>
          <AspectRatio ratio={1920 / 1080} h={'100%'}>
            <video
              // controls={false}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              // poster={images.gallery.innovation.jamuhuri.yr2020.image9}
              height={'100%'}
            >
              <source src={videos.hero.home.video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </AspectRatio>
        </div>

        <Box
          pos={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.75) 100%)`,
            zIndex: -1,
          }}
        ></Box>
        <LayoutSection id="carousel-slide-2">
          <Stack align={'center'} justify="center" mih={600}>
            <Title order={1} className={classes.title} ta={'center'}>
              Empowering Drone Professionals in Kenya
            </Title>

            <Text w={{ base: '100%', md: '50%' }} ta={'center'} fz={'sm'}>
              Whether you&apos;re looking to start a new career or expand your
              skillset, our Remote Pilot License (RPL) training program is the
              perfect place to begin your journey. Join us and become a licensed
              drone operator today!
            </Text>

            <Group gap={'xs'}>
              <ModalDownloadDocument props={{ type: 'brochure' }}>
                <Button
                  size="xs"
                  leftSection={
                    <IconFileDownload
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                    />
                  }
                >
                  Brochure
                </Button>
              </ModalDownloadDocument>

              {/* <ModalPoster active={true} /> */}
              <ModalAdvertisment active={true} />
            </Group>

            <Group gap={'xs'}>
              {/* <ModalAdvertisment /> */}
              {/* <ModalShows active={true} /> */}
            </Group>
          </Stack>
        </LayoutSection>
      </CarouselSlide>

      {slides}
    </Carousel>
  );
}

const data = [
  {
    image: images.gallery.graduation.yr2022.image8,
    title: 'Over 250 RPL Certifications',
    desc: 'The Remote Pilot Licence (RPL) Training is the initial license required for a delegate/student to start their professional drone pilot career. Join us today and experience the power of flight.',
  },
  {
    image: images.gallery.expo.yr2022.image7,
    title: 'Host of First Ever Drone Tech and Data Expo in the Region',
    desc: 'Drone Space through its spaces and hub will develop different innovative spaces as well as training courses to meet the needs of drone operators, developers and innovators and to build strategic partnerships between them so as to support their innovations and developments.',
  },
  {
    image: images.gallery.projects.project1.image5,
    title: '100+ Drone Operations Completed',
    desc: 'Our skilled personnel are adept at spotting issues and verifying drone operations follow client specifications and regulatory standards. When problems arise, Drone Space provides instant reaction and communication to all parties.',
  },
];
