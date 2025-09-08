import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
  BookMarked,
  Pencil,
  Server,
} from 'lucide-react';
import Image from 'next/image';

export const logo = (
  <>
    <Image
      alt="LANKO"
      src="/lanko-icon.png"
      sizes="100px"
      className="hidden w-20 md:w-24 [.uwu_&]:block"
      aria-label="LANKO"
      quality={100}
    />
  </>
);

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/LankoTeam/docs',
  nav: {
    title: (
      <>
        <img
          src="/LANKO.svg"
          className="inline-block mr-3 h-7 w-7"
          width={30}
          height={30}
          alt="LANKO Logo"
          aria-label="Logo"
        />
        LANKO
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: '首页',
      url: '/'
    },
    {
      type: 'menu',
      text: '文档',
      url: '/docs/getting-started',
      items: [
        {
          icon: <BookMarked />,
          text: '使用文档',
          description: '了解如何使用 LANKO 平台',
          url: '/docs/usage',
          menu: {
            className: 'lg:-span-2',
          },
        },
        {
          icon: <Server />,
          text: 'API服务',
          description: '了解如何使用 LANKO API 服务',
          url: '/docs/api',          
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          icon: <Pencil />,
          text: '贡献文档',
          description: '了解 LANKO 的文档撰写规范',
          url: '/docs/document',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        }
      ],
    }
  ],
};
