import React from 'react';
import LayoutSection from '@/components/layout/section';
import CardBlogAside from '@/components/common/cards/blog/aside';
import { postsGet } from '@/handlers/requests/database/post';
import { Divider, Grid, GridCol, Stack, Title } from '@mantine/core';
import { PostRelations } from '@/types/models/post';
import { typeParams } from '@/app/(marketing)/resources/blog/layout';
import { extractUuidFromParam } from '@/utilities/helpers/string';

export default async function Blog({ params }: { params: typeParams }) {
  const postId = extractUuidFromParam(params['postTitle-postId']);

  const { posts }: { posts: PostRelations[] } = await postsGet();

  const postsFiltered = posts.filter((p) => p.id != postId);

  return (
    <LayoutSection
      id={'partial-aside-blog'}
      padded
      containerized={false}
      pos={'sticky'}
      top={32}
    >
      <Stack gap={'xl'}>
        <Stack>
          <Title order={2} fz={'xl'}>
            Recent Posts
          </Title>

          <Grid>
            {postsFiltered.map(
              (post, index) =>
                postsFiltered.indexOf(post) < 3 && (
                  <GridCol key={index} span={12}>
                    <Stack>
                      {postsFiltered.indexOf(post) != 0 && <Divider />}
                      <CardBlogAside post={post} />
                    </Stack>
                  </GridCol>
                )
            )}
          </Grid>
        </Stack>
      </Stack>
    </LayoutSection>
  );
}
