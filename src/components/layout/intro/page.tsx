'use client';

import React from 'react';
import LayoutSection from '../section';
import { usePathname } from 'next/navigation';
import { Container, Group, Stack, Text, Title } from '@mantine/core';
// import BreadcrumbMain from '@/components/common/breadcrumbs/main';
import { crumbify } from '@/utilities/formatters/string';

export default function Page({
  props,
  options,
}: {
  props: { path?: string | React.ReactNode; title: string; desc?: string };
  options?: { spacing?: 'margin' | 'padding' };
}) {
  const pathname = usePathname();
  const segments = crumbify(pathname);

  return (
    <LayoutSection
      id={'layout-intro-page'}
      padded={options?.spacing == 'padding' || undefined}
      margined={options?.spacing == 'margin' || true}
    >
      <Stack>
        {/* <Group justify={'center'}>
          <BreadcrumbMain props={segments} />
        </Group> */}

        {typeof props.path == 'string' ? (
          <Text
            fw={'bold'}
            ta={'center'}
            c={'sec.4'}
            tt={'uppercase'}
            fz={'sm'}
          >
            {props.path ? props.path : segments[segments.length - 1].label}
          </Text>
        ) : (
          <Group justify="center">{props.path}</Group>
        )}

        <Container size={'sm'}>
          <Stack>
            <Title order={1} ta={'center'}>
              {props.title}
            </Title>

            {props.desc && <Text ta={'center'}>{props.desc}</Text>}
          </Stack>
        </Container>
      </Stack>
    </LayoutSection>
  );
}
