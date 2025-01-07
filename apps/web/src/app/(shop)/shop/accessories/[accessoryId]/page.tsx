import React from 'react';

import {
  Center,
  Divider,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import accessories from '@/data/accessories';
import { linkify } from '@repo/utils/formatters';
import CarouselImage from '@/components/common/carousels/image';

import { typeParams } from './layout';
import { IconCheck } from '@tabler/icons-react';
import classes from './drone.module.scss';

export default function AccessoryDetails({ params }: typeParams) {
  const product = accessories.find(
    (a) => linkify(a.title.long) == params.accessoryId
  );

  return (
    <LayoutPage>
      <LayoutSection id="accessories-intro" padded shadowed>
        <Grid>
          <GridCol span={{ md: 5 }} className={classes.card}>
            {product?.images && <CarouselImage data={product.images} />}
          </GridCol>
          <GridCol span={{ md: 1 }}>
            <Center h={'100%'}>
              <Divider orientation="vertical" />
            </Center>
          </GridCol>
          <GridCol span={{ md: 6 }}>
            <Stack gap={'xl'}>
              <Stack>
                <Title order={2} fz={{ md: 32 }}>
                  {product?.title.long}
                </Title>

                {product?.price && (
                  <Text>
                    Kshs.{' '}
                    <Text
                      component="span"
                      inherit
                      fw={500}
                      c={
                        'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                      }
                      fz={{ md: 'xl' }}
                    >
                      <NumberFormatter
                        value={product.price.former}
                        thousandSeparator
                      />
                    </Text>
                  </Text>
                )}
              </Stack>

              {typeof product?.specs == 'string' ? (
                <Text>{product.specs}</Text>
              ) : (
                <Grid>
                  {product?.specs.map((spec) => (
                    <GridCol key={spec.label} span={12}>
                      <Group gap={'xs'}>
                        <ThemeIcon
                          size={16}
                          radius={'xl'}
                          color="green.6"
                          c={'white'}
                          visibleFrom="xs"
                        >
                          <IconCheck size={12} stroke={3} />
                        </ThemeIcon>

                        <Text fz={{ base: 'xs', xs: 'sm' }}>
                          <Text component="span" inherit fw={500}>
                            {spec.label}
                          </Text>
                          : {spec.desc}
                        </Text>
                      </Group>
                    </GridCol>
                  ))}
                </Grid>
              )}
            </Stack>
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
