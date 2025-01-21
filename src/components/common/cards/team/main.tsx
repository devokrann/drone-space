import React from 'react';
import { Avatar, Card, Stack, Text, Title } from '@mantine/core';
import { typeTeam } from '@/types/static/team';
import { ICON_WRAPPER_SIZE } from '@/data/constants';

export default function Main({ data }: { data: typeTeam }) {
  return (
    <Card
      bg={'var(--mantine-color-white)'}
      withBorder
      shadow="xs"
      padding={'xl'}
      h={'100%'}
    >
      <Stack align="center" gap={'xl'}>
        <Avatar
          src={data.image}
          color="sec.3"
          alt={'Drone Shop'}
          size={ICON_WRAPPER_SIZE * 4}
          style={{ border: '4px solid var(--mantine-color-pri-light)' }}
        />

        <Stack gap={6}>
          <Title order={2} fz={'md'} fw={'bold'} ta={'center'}>
            {data.name}
          </Title>

          <Text
            fz={'sm'}
            fw={500}
            ta={'center'}
            c={'var(--mantine-color-sec-3)'}
          >
            {data.position}
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
