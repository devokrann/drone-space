import React from 'react';

import Link from 'next/link';

import {
  Anchor,
  Card,
  CardSection,
  Group,
  NumberFormatter,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import classes from './main.module.scss';
import { PostRelations } from '@/types/models/post';
import { linkify, processUrl } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { IconMessageCircle } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
} from '@/data/constants';

export default function Main({ post }: { post: PostRelations }) {
  const path = `/resources/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Card className={classes.card} bg={'transparent'}>
      <Stack gap={'lg'}>
        <CardSection
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            overflow: 'hidden',
          }}
        >
          <Anchor
            component={Link}
            underline="hover"
            inherit
            href={path}
            title={post.title}
            pos={'relative'}
          >
            <ImageDefault
              src={processUrl(post.image, HOSTED_BASE_URL.DRONE_SPACE)}
              alt={post.title}
              height={200}
              mode="grid"
            />

            <div className={classes.overlay}></div>
          </Anchor>
        </CardSection>

        <CardSection>
          <Stack gap={'lg'} justify="space-between" h={'100%'}>
            <Stack>
              <Title
                order={3}
                fz={{ base: 'xl' }}
                className={classes.title}
                lineClamp={1}
              >
                <Anchor
                  component={Link}
                  underline="hover"
                  inherit
                  href={path}
                  c={'inherit'}
                  title={post.title}
                >
                  {post.title}
                </Anchor>
              </Title>
              <Text className={classes.desc} lineClamp={3}>
                {post.excerpt}
              </Text>
            </Stack>

            <Group justify="space-between" fz={'sm'}>
              <Text inherit>{getRegionalDate(post.createdAt).date}</Text>

              {post._count.comments && (
                <Group gap={4}>
                  <IconMessageCircle
                    size={ICON_SIZE - 4}
                    stroke={ICON_STROKE_WIDTH}
                  />

                  <NumberFormatter
                    thousandSeparator
                    value={post._count.comments}
                  />
                </Group>
              )}
            </Group>
          </Stack>
        </CardSection>
      </Stack>
    </Card>
  );
}
