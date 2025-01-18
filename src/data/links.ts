import { linkify } from '@/utilities/formatters/string';
import services from './services';
import {
  IconArticle,
  IconBubble,
  IconCash,
  IconCell,
  IconCertificate,
  IconCertificate2,
  IconCirclePlus,
  IconCopyright,
  IconDeviceCameraPhone,
  IconHelp,
  IconInfoCircle,
  IconLibraryPhoto,
  IconPlant2,
  IconSchool,
  IconSpaces,
  IconSun,
  IconUsersGroup,
} from '@tabler/icons-react';
import { courseList } from './courses';

export const shopLinks = [
  {
    link: '/shop/drones/camera',
    label: 'Camera Drones',
    leftSection: IconDeviceCameraPhone,
    desc: 'Capture stunning aerial photos and videos with state-of-the-art camera drones.',
  },
  {
    link: '/shop/drones/enterprise',
    label: 'Enterprise Drones',
    leftSection: IconCell,
    desc: 'Powerful drones designed for industrial and commercial applications.',
  },
  {
    link: '/shop/drones/agriculture',
    label: 'Agriculture Drones',
    leftSection: IconPlant2,
    desc: 'Transform farming with innovative drones for precision agriculture and crop management.',
  },
  {
    link: '/shop/accessories',
    label: 'Drone Accessories',
    leftSection: IconCirclePlus,
    desc: 'Enhance your drone experience with high-quality accessories and add-ons.',
  },
];

const links = [
  {
    link: '/about',
    label: 'About',
    subLinks: [
      {
        link: '/about/#our-story',
        label: 'Our Story',
        leftSection: IconCopyright,
        desc: 'Discover our story, mission, and the values that drive us forward.',
      },
      {
        link: '/about/#spaces-and-hub',
        label: 'Spaces & Hub',
        leftSection: IconSpaces,
        desc: 'Striving to accelerate development in technology and innovation.',
      },
      // {
      //   link: '/about/#team',
      //   label: 'Team',
      //   leftSection: IconUsersGroup,
      //   desc: 'Meet the passionate individuals behind our vision and success.',
      // },
      {
        link: '/about/gallery',
        label: 'Gallery',
        leftSection: IconLibraryPhoto,
        desc: 'See a visual showcase of our journey and achievements.',
      },
      {
        link: '/about/contact',
        label: 'Contact Us',
        leftSection: IconInfoCircle,
        desc: 'Reach out for any inquiries about drone training, drone reselling and drone services.',
      },
      {
        link: '/about/#team',
        label: 'Team',
        leftSection: IconUsersGroup,
        desc: 'Discover the talented individuals driving our mission forward.',
      },
      // {
      //   link: '/about/#success-stories',
      //   label: 'Success Stories',
      //   leftSection: IconBubble,
      //   desc: 'Discover the talented individuals driving our mission forward.',
      // },
    ],
  },
  {
    link: '/training',
    label: 'Drone Training',
    subLinks: [
      ...courseList.map((course) => {
        return {
          link: `/training#${linkify(course.title)}`,
          label: course.title,
          leftSection: course.leftSection,
          desc: course.linkDesc,
        };
      }),
    ],
  },
  {
    link: '/services',
    label: 'Drone Solutions',
    subLinks: [
      {
        label: 'Drone Light Shows',
        link: '/services/light-shows',
        leftSection: IconSun,
        desc: 'Experience mesmerizing aerial displays that light up the skies with creativity and precision.',
      },

      ...services.map((service) => {
        return {
          link: `/services#${linkify(service.title)}`,
          label: service.title,
          leftSection: service.leftSection,
          desc: service.linkDesc,
        };
      }),
    ],
  },
  {
    link: '/shop',
    label: 'Shop',
    subLinks: shopLinks,
  },
  {
    link: '/resources',
    label: 'Resources',
    subLinks: [
      {
        link: '/resources/blog',
        label: 'Blog',
        leftSection: IconArticle,
        desc: 'Stay updated with insights, stories, and news from our community.',
      },
      {
        link: '/resources/faq',
        label: 'FAQ',
        leftSection: IconHelp,
        desc: 'Find quick answers to common questions about our services, products, and policies.',
      },
    ],
  },
];

export default links;
