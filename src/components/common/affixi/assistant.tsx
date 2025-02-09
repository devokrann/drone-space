'use client';
import React, { useEffect, useState } from 'react';
import { Affix, Center, Text, Tooltip, Transition } from '@mantine/core';
import ModalClaudeMain from '../modals/claude/main';
import { useHeadroom, useTimeout, useWindowScroll } from '@mantine/hooks';
import { usePathname } from 'next/navigation';

export default function Assistant() {
  const pathname = usePathname();

  const [menuOpened, setMenuOpened] = useState(false);
  const { start, clear } = useTimeout(() => setMenuOpened(true), 7000);

  const [scroll] = useWindowScroll();
  const pinned = useHeadroom({ fixedAt: 120 });

  const routes = ['drone-solutions', '/drone-training', '/shop'];
  const routeIncluded = routes.find((r) => pathname.includes(r));

  const getRoute = () => {
    switch (routeIncluded) {
      case routes[0]:
        return 'If you would like to know more about our services, ';
      case routes[1]:
        return 'For course details, course prices or any other training inquiries, ';
      case routes[2]:
        return 'To see available drones and drone prices or if you have drone purchase inquiries, ';
      default:
        return "If you're short for time and need to go through the website's content quickly, ";
    }
  };

  useEffect(() => {
    // sessionStorage.clear();

    if (pathname == '/' || routeIncluded) {
      try {
        const count = sessionStorage.getItem('modalClaudeCount');

        if (!count) {
          start();
          setTimeout(() => setMenuOpened(false), 14000);

          sessionStorage.setItem('modalClaudeCount', '0');
        } else {
          if (Number(count) <= routes.length) {
            start();
            setTimeout(() => setMenuOpened(false), 14000);

            sessionStorage.setItem(
              'modalClaudeCount',
              (Number(count) + 1).toString()
            );
          }
        }
      } catch (e) {
        console.error(
          "Couldn't fetch from local storage",
          (e as Error).message
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Affix
      position={{ bottom: 'calc(var(--mantine-spacing-xl) * 1.5)', right: 0 }}
    >
      <Transition transition="slide-left" mounted={scroll.y > 0 && !pinned}>
        {(transitionStyles) => (
          <div style={transitionStyles}>
            <Tooltip
              color="pri"
              withArrow
              position="bottom-end"
              multiline
              opened={menuOpened}
              events={{ hover: true, focus: true, touch: false }}
              w={220}
              label={
                <Text inherit fz={'xs'}>
                  {getRoute()} ask our AI
                </Text>
              }
            >
              <Center
                onClick={() => {
                  clear();
                  setMenuOpened(false);
                }}
              >
                <ModalClaudeMain />
              </Center>
            </Tooltip>
          </div>
        )}
      </Transition>
    </Affix>
  );
}
