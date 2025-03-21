import { ICON_SIZE, ICON_STROKE_WIDTH } from '@/data/constants';
import { Button, Group } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import React from 'react';

export default function Footer({ props }: { props: { submitted: boolean } }) {
  return (
    <Group justify="end">
      <Button
        type="submit"
        loading={props.submitted}
        rightSection={<IconSend size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
      >
        Submit
      </Button>
    </Group>
  );
}
