import {
  Anchor,
  Badge,
  Card,
  CardSection,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';
import classes from './main.module.scss';
import { typeDrone } from '@/types/static/product';
import { IconArrowRightDashed } from '@tabler/icons-react';
import { linkify } from '@/utilities/formatters/string';
import Link from 'next/link';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Main({ data }: { data: typeDrone }) {
  return (
    <Card className={classes.card}>
      <Stack justify="space-between" h={'100%'}>
        <Stack>
          <CardSection className={classes.imageSection}>
            <Anchor
              component={Link}
              inherit
              href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
            >
              <Flex
                direction={'column'}
                justify={'center'}
                className={classes.imageContainer}
                h={{ md: 280 }}
              >
                <Image
                  src={data.images.find((i) => i.includes('front'))}
                  alt={data.title.long}
                  loading="lazy"
                  component={NextImage}
                  width={1920}
                  height={1080}
                  className={classes.image}
                />
              </Flex>

              <div className={classes.overlay}>
                <Stack gap={'xs'} className={classes.overlayContent}>
                  {data.featured && <Badge size="xs">Featured</Badge>}
                  {data.starter && (
                    <Badge size="xs" color="sec.3" c={'pri'}>
                      Starter Pack
                    </Badge>
                  )}
                </Stack>
              </div>
            </Anchor>
          </CardSection>

          <Stack>
            <Title order={3} className={classes.title} fz={{ md: 'md' }}>
              <Anchor
                component={Link}
                inherit
                href={`/shop/drones/${data.category}/${linkify(data.title.long)}`}
                c={'var(--mantine-color-white)'}
              >
                {data.title.short ? data.title.short : data.title.long}
              </Anchor>
            </Title>

            {typeof data.specs.intro == 'string' ? (
              <Text lineClamp={3} fz={{ md: 'sm' }}>
                {data.specs.intro}
              </Text>
            ) : (
              <Stack gap={0}>
                <List
                  listStyleType="none"
                  icon={
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      radius={'xl'}
                      color="var(--mantine-color-sec-3)"
                      c={'var(--mantine-color-pri-9'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>
                  }
                >
                  {data.specs.intro.map(
                    (spec, index) =>
                      data.specs.intro.indexOf(spec) < 3 && (
                        <ListItem key={index}>
                          <Text
                            component="span"
                            inherit
                            fz={{ md: 'sm' }}
                            lineClamp={1}
                          >
                            {spec}
                          </Text>
                        </ListItem>
                      )
                  )}
                </List>

                <Text component="span" inherit fw={500} ml={32}>
                  ...
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>

        <Group mt={'xs'}>
          <Text>
            Kshs.{' '}
            <Text
              component="span"
              inherit
              fw={500}
              c={'var(--mantine-color-sec-3)'}
            >
              {data.price ? (
                <NumberFormatter value={data.price.former} thousandSeparator />
              ) : (
                'TBD'
              )}
            </Text>
          </Text>
        </Group>
      </Stack>
    </Card>
  );
}
