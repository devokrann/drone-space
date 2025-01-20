import React from 'react';
import classes from './price.module.scss';
import {
  ActionIcon,
  Card,
  NumberFormatter,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import ModalShowPrice from '../../modals/show-price';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';

export default function Price({
  data,
}: {
  data: { title: string; desc: string; price: number };
}) {
  return (
    <Card
      className={classes.card}
      pos={'relative'}
      bg={'pri.9'}
      c={'var(--mantine-color-body)'}
    >
      <Stack align="center">
        <Stack align="center" gap={0}>
          <Text ta={'center'} component="sub" inherit fz={'xs'}>
            (starts from)
          </Text>

          <Text fw={'bold'} fz={{ md: 24 }} ta={'center'}>
            <Text component="span" inherit fw={'normal'} fz={'md'}>
              ${' '}
            </Text>
            <NumberFormatter value={data.price} thousandSeparator />
          </Text>
        </Stack>

        <Stack align="center">
          <Title ta={'center'} order={3} fz={'lg'} className={classes.title}>
            {data.title}
          </Title>

          <Text ta={'center'} fz={'sm'}>
            {data.desc}
          </Text>
        </Stack>
      </Stack>

      <ModalShowPrice>
        <Tooltip label="Learn More" withArrow color="sec.3" c="pri.9">
          <ActionIcon
            size={ICON_WRAPPER_SIZE / 1.5}
            pos={'absolute'}
            top={8}
            right={8}
            color="sec.3"
            variant="light"
          >
            <IconInfoCircle size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
          </ActionIcon>
        </Tooltip>
      </ModalShowPrice>
    </Card>
  );
}
