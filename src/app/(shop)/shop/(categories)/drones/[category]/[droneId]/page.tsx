import React from 'react';

import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  Flex,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Stack,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import ModalContactShop from '@/components/common/modals/contact/shop';
import products from '@/data/products';
import CardShopAccessory from '@/components/common/cards/shop/accessory';
import CarouselImage from '@/components/common/carousels/image';
import { typeParams } from '../layout';
import {
  IconArrowRightDashed,
  IconBattery3,
  IconCirclePlus,
  IconCube,
  IconCubePlus,
  IconListDetails,
  IconTruckDelivery,
} from '@tabler/icons-react';
import classes from './drone.module.scss';
import { linkify } from '@/utilities/formatters/string';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
  SECTION_SPACING,
} from '@/data/constants';
import ImageDefault from '@/components/common/images/default';
import IntroPage from '@/components/layout/intro/page';

export default function AccessoryDetail({ params }: typeParams) {
  const product = products.find((p) => linkify(p.title.long) == params.droneId);

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `${product?.category} Drones`,
          title: product?.title.long || product?.title.short || 'Drone Shop',
        }}
      />

      <LayoutSection
        id="drone-category-intro"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={{ base: 32, lg: 64 }}>
          <GridCol span={{ base: 12, sm: 5.5 }} className={classes.card}>
            <Box pos={'sticky'} top={64}>
              {product?.images && <CarouselImage data={product.images} />}
            </Box>
          </GridCol>

          <GridCol span={{ sm: 6.5 }}>
            <Stack gap={'xl'}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ md: 'center' }}
                gap={{ base: 'xs', md: 'xl' }}
                mt={'md'}
              >
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
                    {product?.price ? (
                      <NumberFormatter
                        value={product?.price.former}
                        thousandSeparator
                      />
                    ) : (
                      'TBD'
                    )}
                  </Text>{' '}
                  {product?.kit?.flyMore && (
                    <Text component="sup" inherit fz={'xs'}>
                      (basic kit)
                    </Text>
                  )}
                </Text>
                {product?.price && product?.kit?.flyMore && (
                  <>
                    <Divider
                      orientation="vertical"
                      visibleFrom="xs"
                      color="sec.3"
                    />

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
                          value={
                            product.price.former +
                            product.kit.flyMore.price.former
                          }
                          thousandSeparator
                        />
                      </Text>{' '}
                      <Text component="sup" inherit fz={'xs'}>
                        (fly more kit)
                      </Text>
                    </Text>
                  </>
                )}
              </Flex>

              <div>
                <Text fz={'sm'}>
                  Import Permits:{' '}
                  <Text component="span" inherit fw={500}>
                    Kshs.{' '}
                    <Text component="span" inherit tt={'uppercase'}>
                      3,000
                    </Text>{' '}
                    <Text component="sup" inherit fz={'xs'}>
                      (included in drone price)
                    </Text>
                  </Text>
                </Text>

                <Text fz={'sm'} mt={'xs'}>
                  Facilitiation Fee:{' '}
                  <Text component="span" inherit fw={500}>
                    Kshs.{' '}
                    <Text component="span" inherit tt={'uppercase'}>
                      18,000
                    </Text>{' '}
                    <Text component="sup" inherit fz={'xs'}>
                      (included in drone price)
                    </Text>
                  </Text>
                </Text>
              </div>

              <div>
                {!product?.model && (
                  <Text mt={'xs'}>
                    Vendor:{' '}
                    <Text component="span" inherit fw={500} tt={'uppercase'}>
                      {product?.brand}
                    </Text>
                  </Text>
                )}

                <Text mt={'xs'}>
                  Make:{' '}
                  <Text component="span" inherit fw={500} tt={'capitalize'}>
                    {product?.make}
                  </Text>
                </Text>

                {product?.model && (
                  <Text mt={'xs'}>
                    Model:{' '}
                    <Text component="span" inherit fw={500} tt={'capitalize'}>
                      {product?.model}
                    </Text>
                  </Text>
                )}
              </div>
            </Stack>

            <Divider
              label={
                <Text
                  component="span"
                  inherit
                  c={
                    'light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))'
                  }
                >
                  Specification Overview
                </Text>
              }
              labelPosition="left"
              mt={'xl'}
            />

            {typeof product?.specs.intro == 'string' ? (
              <Text my={'xl'}>{product.specs.intro}</Text>
            ) : (
              <Grid my={'xl'}>
                {product?.specs.intro.map((spec, index) => (
                  <GridCol key={index} span={{ base: 12 }}>
                    <Group gap={'xs'}>
                      <ThemeIcon
                        size={ICON_WRAPPER_SIZE / 1.5}
                        radius={'xl'}
                        color="sec.4"
                        c={'pri.9'}
                      >
                        <IconArrowRightDashed
                          size={ICON_SIZE / 1.5}
                          stroke={ICON_STROKE_WIDTH}
                        />
                      </ThemeIcon>

                      <Text fz={{ md: 'xs', lg: 'sm' }}>{spec}</Text>
                    </Group>
                  </GridCol>
                ))}
              </Grid>
            )}
          </GridCol>
        </Grid>

        <Group justify="center" mt={SECTION_SPACING / 2}>
          <ModalContactShop>
            <Button
              miw={{ base: 240, sm: 480, md: 720, lg: 960 }}
              variant="light"
              color="gray"
              leftSection={
                <IconTruckDelivery
                  size={ICON_SIZE}
                  stroke={ICON_STROKE_WIDTH}
                />
              }
            >
              Order the{' '}
              {product?.title.short ? product.title.short : product?.title.long}
            </Button>
          </ModalContactShop>
        </Group>
      </LayoutSection>

      <LayoutSection id="drone-category-specs" padded shadowed>
        <Tabs defaultValue="specs">
          <TabsList fw={500}>
            <Grid gutter={0} w={'100%'}>
              <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                <TabsTab
                  w={'100%'}
                  value="specs"
                  leftSection={
                    <IconListDetails
                      size={ICON_SIZE}
                      stroke={ICON_STROKE_WIDTH}
                      color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                    />
                  }
                >
                  Specifications
                </TabsTab>
              </GridCol>
              {product?.kit?.basic && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="basic"
                    leftSection={
                      <IconCube
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    {product.kit.flyMore ? 'Basic Kit' : 'In the box'}
                  </TabsTab>
                </GridCol>
              )}
              {product?.kit?.flyMore && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="flyMore"
                    leftSection={
                      <IconCubePlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Fly More Kit
                  </TabsTab>
                </GridCol>
              )}
              {product?.accessories?.battery && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="battery"
                    leftSection={
                      <IconBattery3
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Intelligent Battery
                  </TabsTab>
                </GridCol>
              )}
              {product?.accessories?.other && (
                <GridCol span={{ base: 12, xs: 6, md: 'auto' }}>
                  <TabsTab
                    w={'100%'}
                    value="other"
                    leftSection={
                      <IconCirclePlus
                        size={ICON_SIZE}
                        stroke={ICON_STROKE_WIDTH}
                        color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
                      />
                    }
                  >
                    Other
                  </TabsTab>
                </GridCol>
              )}
            </Grid>
          </TabsList>

          <TabsPanel value="specs">
            <LayoutSection
              id="drone-category-specs-list"
              mt={SECTION_SPACING / 2}
              containerized={false}
            >
              <Grid gutter={{ base: 12, md: 'md' }}>
                <GridCol span={{ md: 5 }}>
                  <Card withBorder bg={'var(--mantine-color-body)'}>
                    <ImageDefault
                      src={
                        product?.kit?.basic.image
                          ? product?.kit.basic.image
                          : product?.images[0] || ''
                      }
                      alt={'Specs'}
                      loading="lazy"
                      height={{ base: 320, xs: 400, md: 320, lg: 360 }}
                    />
                  </Card>
                </GridCol>

                <GridCol span={{ md: 1 }}>
                  <Center h={'100%'}>
                    <Divider orientation="vertical" />
                  </Center>
                </GridCol>

                <GridCol span={{ md: 6 }}>
                  <Title order={3} fz={{ md: 'xl' }}>
                    {product?.title.short} Aircraft Specifications
                  </Title>

                  <Grid gutter={'xs'} mt={'xl'}>
                    {product?.specs.aircraft.map((item, index) => (
                      <GridCol key={index} span={{ md: 12 }}>
                        <Group gap={'xs'}>
                          <ThemeIcon
                            size={ICON_WRAPPER_SIZE / 1.5}
                            radius={'xl'}
                            color="sec.4"
                            c={'pri.9'}
                            visibleFrom="xs"
                          >
                            <IconArrowRightDashed
                              size={ICON_SIZE / 1.5}
                              stroke={ICON_STROKE_WIDTH}
                            />
                          </ThemeIcon>

                          <Text fz={{ md: 'sm' }}>
                            <Text component="span" inherit fw={500}>
                              {item.label}
                            </Text>
                            : {item.desc}
                          </Text>
                        </Group>
                      </GridCol>
                    ))}
                  </Grid>
                </GridCol>
              </Grid>
            </LayoutSection>
          </TabsPanel>

          {product?.kit?.basic && (
            <TabsPanel value="basic">
              <LayoutSection
                id="drone-category-specs-contents"
                mt={SECTION_SPACING / 2}
                containerized={false}
              >
                <Grid>
                  <GridCol
                    span={{ base: 12, md: 6 }}
                    order={{ base: 3, md: 1 }}
                  >
                    <Grid>
                      {product?.kit.basic.contents.map((item, index) => (
                        <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                          <Card withBorder bg={'var(--mantine-color-body)'}>
                            <ImageDefault
                              src={item.image}
                              alt={item.item}
                              loading="lazy"
                              height={{
                                base: 120,
                                xs: 240,
                                sm: 160,
                                md: 120,
                                lg: 160,
                              }}
                            />
                          </Card>

                          <Text
                            fz={{ md: 'xs', lg: 'sm' }}
                            ta={'center'}
                            mt={'md'}
                          >
                            <Text component="span" inherit fw={500}>
                              x{item.qty}
                            </Text>{' '}
                            - {item.item}
                          </Text>
                        </GridCol>
                      ))}
                    </Grid>
                  </GridCol>

                  <GridCol span={{ md: 1 }} order={2} visibleFrom="md">
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={12} order={2} hiddenFrom="md">
                    <Divider my={'xl'} />
                  </GridCol>

                  <GridCol
                    span={{ base: 12, md: 5 }}
                    order={{ base: 1, md: 3 }}
                  >
                    <Box pos={'sticky'} top={64}>
                      <Title order={3} fz={{ md: 'xl' }}>
                        {product?.title.short}{' '}
                        {product?.kit?.flyMore ? 'Basic Kit' : 'Box Contents'}
                      </Title>

                      <Grid gutter={'xs'} mt={'xl'}>
                        {product?.kit.basic.contents.map((item, index) => (
                          <GridCol key={index} span={{ md: 12 }}>
                            <Text fz={{ md: 'sm' }}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
                          </GridCol>
                        ))}
                      </Grid>

                      <Text mt={'xl'}>
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
                          {product.price ? (
                            <NumberFormatter
                              value={product.price.former}
                              thousandSeparator
                            />
                          ) : (
                            'TBD'
                          )}
                        </Text>
                      </Text>
                    </Box>
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.kit?.flyMore && (
            <TabsPanel value="flyMore">
              <LayoutSection
                id="drone-category-specs-flymore"
                mt={SECTION_SPACING / 2}
                containerized={false}
              >
                <Grid>
                  <GridCol
                    span={{ base: 12, md: 6 }}
                    order={{ base: 3, md: 1 }}
                  >
                    <Text
                      fw={'bold'}
                      variant="gradient"
                      gradient={{ from: 'pri.9', to: 'sec.3', deg: 135 }}
                    >
                      Everything in the basic kit plus:
                    </Text>

                    <Grid mt={'xl'}>
                      {product?.kit.flyMore.contents.map((item, index) => (
                        <GridCol key={index} span={{ base: 6, sm: 4, md: 4 }}>
                          <Card withBorder bg={'var(--mantine-color-body)'}>
                            <ImageDefault
                              src={item.image}
                              alt={item.item}
                              loading="lazy"
                              height={{
                                base: 120,
                                xs: 240,
                                sm: 160,
                                md: 120,
                                lg: 160,
                              }}
                            />
                          </Card>

                          <Text
                            fz={{ md: 'xs', lg: 'sm' }}
                            ta={'center'}
                            mt={'xl'}
                          >
                            <Text component="span" inherit fw={500}>
                              x{item.qty}
                            </Text>{' '}
                            - {item.item}
                          </Text>
                        </GridCol>
                      ))}
                    </Grid>
                  </GridCol>

                  <GridCol span={{ md: 1 }} order={2} visibleFrom="md">
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={12} order={2} hiddenFrom="md">
                    <Divider my={'xl'} />
                  </GridCol>

                  <GridCol
                    span={{ base: 12, md: 5 }}
                    order={{ base: 1, md: 3 }}
                  >
                    <Box pos={'sticky'} top={64}>
                      <Title order={3} fz={{ md: 'xl' }}>
                        {product?.title.short} Fly More Kit
                      </Title>

                      <Grid mt={'xl'} gutter={'xs'}>
                        <GridCol span={{ md: 12 }}>
                          <Text
                            fw={'bold'}
                            variant="gradient"
                            gradient={{ from: 'pri.9', to: 'sec.3', deg: 135 }}
                          >
                            Everything in the basic kit plus:
                          </Text>
                        </GridCol>

                        {product?.kit.flyMore.contents.map((item, index) => (
                          <GridCol key={index} span={{ md: 12 }}>
                            <Text fz={{ md: 'sm' }}>
                              <Text component="span" inherit fw={500}>
                                x{item.qty}
                              </Text>{' '}
                              - {item.item}
                            </Text>
                          </GridCol>
                        ))}
                      </Grid>

                      <Text mt={'xl'}>
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
                          {product.price && product?.kit.flyMore.price ? (
                            <NumberFormatter
                              value={
                                product.price.former +
                                product.kit.flyMore.price.former
                              }
                              thousandSeparator
                            />
                          ) : (
                            'TBD'
                          )}
                        </Text>
                      </Text>
                    </Box>
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.accessories?.battery && (
            <TabsPanel value="battery">
              <LayoutSection
                id="drone-category-specs-battery"
                mt={SECTION_SPACING / 2}
                containerized={false}
              >
                <Grid>
                  <GridCol span={{ md: 5 }}>
                    <CarouselImage data={product.accessories.battery.images} />
                  </GridCol>

                  <GridCol span={{ md: 1 }}>
                    <Center h={'100%'}>
                      <Divider orientation="vertical" />
                    </Center>
                  </GridCol>

                  <GridCol span={{ md: 6 }}>
                    <Title order={3} fz={{ md: 'xl' }}>
                      {product?.title.short} Intelligent Flight Battery
                    </Title>

                    <Grid mt={'xl'} gutter={'xs'}>
                      {product?.accessories?.battery?.specs.map(
                        (item, index) => (
                          <GridCol key={index} span={{ md: 12 }}>
                            <Group gap={'xs'}>
                              <ThemeIcon
                                size={ICON_WRAPPER_SIZE / 1.5}
                                radius={'xl'}
                                color="sec.4"
                                c={'pri.9'}
                                visibleFrom="xs"
                              >
                                <IconArrowRightDashed
                                  size={ICON_SIZE / 1.5}
                                  stroke={ICON_STROKE_WIDTH}
                                />
                              </ThemeIcon>

                              <Text fz={{ md: 'sm' }}>
                                <Text component="span" inherit fw={500}>
                                  {item.label}
                                </Text>
                                : {item.desc}
                              </Text>
                            </Group>
                          </GridCol>
                        )
                      )}
                    </Grid>

                    {product?.accessories.battery.price && (
                      <Text mt={'xl'}>
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
                            value={product?.accessories.battery.price.former}
                            thousandSeparator
                          />
                        </Text>
                      </Text>
                    )}
                  </GridCol>
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}

          {product?.accessories?.other && (
            <TabsPanel value="other">
              <LayoutSection
                id="drone-category-specs-other"
                mt={SECTION_SPACING / 2}
                containerized={false}
              >
                <Grid>
                  {product.accessories.other.map((accessory, index) => (
                    <GridCol
                      key={index}
                      span={{ base: 12, sm: 6, md: 4, lg: 3 }}
                    >
                      {accessory && <CardShopAccessory data={accessory} />}
                    </GridCol>
                  ))}
                </Grid>
              </LayoutSection>
            </TabsPanel>
          )}
        </Tabs>
      </LayoutSection>
    </LayoutPage>
  );
}
