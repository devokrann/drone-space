import React from 'react';

import Link from 'next/link';

import {
  Anchor,
  Grid,
  GridCol,
  Group,
  NumberFormatter,
  Text,
  Title,
} from '@mantine/core';

import { PostRelations } from '@/types/models/post';
import { linkify, processUrl } from '@/utilities/formatters/string';
import { getRegionalDate } from '@/utilities/formatters/date';
import { IconCircleFilled, IconMessageCircle } from '@tabler/icons-react';
import ImageDefault from '@/components/common/images/default';
import {
  HOSTED_BASE_URL,
  ICON_SIZE,
  ICON_STROKE_WIDTH,
} from '@/data/constants';

export default function Aside({ post }: { post: PostRelations }) {
  const path = `/resources/blog/${linkify(post.title)}-${post.id}`;

  return (
    <Grid>
      <GridCol span={4}>
        <Anchor
          component={Link}
          underline="hover"
          inherit
          href={path}
          title={post.title}
        >
          <ImageDefault
            src={processUrl(post.image, HOSTED_BASE_URL.DRONE_SPACE)}
            alt={post.title}
            height={80}
            radius={'sm'}
            mode="grid"
          />
        </Anchor>
      </GridCol>

      <GridCol span={8}>
        <Title order={3} fz={'md'} lineClamp={1}>
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

        <Text lineClamp={1} fz={'sm'} mt={4}>
          {post.excerpt}
        </Text>

        <Group gap={'xs'} fz={'xs'} mt={'xs'}>
          <Text inherit>{getRegionalDate(post.createdAt).date}</Text>

          {post._count.comments && (
            <>
              <IconCircleFilled size={4} />

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
            </>
          )}
        </Group>
      </GridCol>
    </Grid>
  );
}
