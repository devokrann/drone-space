import React from 'react';

import { Grid, GridCol } from '@mantine/core';

import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import CardBlogMain from '@/components/common/cards/blog/main';
import IntroPage from '@/components/layout/intro/page';

import { typeParams } from '../../layout';
import { tagGet } from '@/handlers/requests/database/tag';
import { TagRelations } from '@repo/types/models';

export default async function Tag({ params }: { params: typeParams }) {
  const { tag }: { tag: TagRelations } = await tagGet({
    tagId: params.tagId,
  });

  return (
    <LayoutPage>
      <IntroPage
        props={{
          path: `Tags`,
          title: tag.title,
        }}
      />

      <LayoutSection id={'page-blog'} margined>
        <Grid gutter={'xl'}>
          {tag.posts.map((post) => (
            <GridCol key={post.title} span={{ base: 12, sm: 6, md: 4, xl: 3 }}>
              <CardBlogMain post={post} />
            </GridCol>
          ))}
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}
