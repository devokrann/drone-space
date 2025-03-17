'use client';

import React from 'react';
import Link from 'next/link';
import { Group, Anchor, Divider } from '@mantine/core';
import LayoutSection from '@/components/layout/section';
import DrawerNavbarMain from '@/components/common/drawers/navbar/main';
import MenuNavbar from '@/components/common/menus/navbar';
import classes from './main.module.scss';
import { usePathname } from 'next/navigation';
import links from '@/data/links';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';
import appData from '@/data/app';

export default function Main({
  options,
}: {
  options?: { absolute?: boolean };
}) {
  const pathname = usePathname();

  const matchesPath = (link: string) => {
    return pathname == link || (pathname != '/' && pathname.includes(link));
  };

  const navLinks = links.map((link, index) => {
    return (
      <MenuNavbar key={index} subLinks={link.subLinks}>
        {!link.subLinks ? (
          <Anchor
            component={Link}
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </Anchor>
        ) : (
          <Anchor
            component={Link}
            href={link.link}
            className={`${options?.absolute ? classes.linkAbsolute : classes.link} ${
              matchesPath(link.link) ? classes.linkActive : ''
            }`}
          >
            {link.label}
          </Anchor>
        )}
      </MenuNavbar>
    );
  });

  const imageBrand = (
    <ImageDefault
      src={images.brand.droneSpace.logo.landscape.default}
      alt={appData.name.app}
      height={{ base: 40 }}
      width={{ base: 200 }}
      fit="contain"
      mode="grid"
    />
  );

  return (
    <LayoutSection
      id={'partial-navbar-main'}
      pos={options?.absolute ? 'absolute' : undefined}
      left={options?.absolute ? 0 : undefined}
      top={options?.absolute ? 0 : undefined}
      right={options?.absolute ? 0 : undefined}
      style={{ zIndex: 1 }}
    >
      <Group justify="space-between">
        <Anchor component={Link} href={'/'} py={{ base: 5, md: 0 }}>
          {imageBrand}
        </Anchor>

        <Group gap={'md'} visibleFrom="md">
          {navLinks}
        </Group>

        <Group hiddenFrom="md" justify="end">
          <DrawerNavbarMain
            props={links}
            options={{ absolute: options?.absolute }}
          />
        </Group>
      </Group>

      {!options?.absolute && <Divider />}
    </LayoutSection>
  );
}
