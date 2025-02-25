'use client';

import React from 'react';
import { Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FormDownloadDocument from '@/components/form/download/document';

export default function Brochure({ children }: { children: React.ReactNode }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        title={
          <Text component="span" inherit fw={'bold'} c={'pri'}>
            Brochure Download
          </Text>
        }
      >
        <FormDownloadDocument params={{ document: 'brochure' }} />
      </Modal>

      <span style={{ display: 'inline' }} onClick={open}>
        {children}
      </span>
    </>
  );
}
