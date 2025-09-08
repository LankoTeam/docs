import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
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
      text: '快速上手',
      url: '/getting-start',
    },
    {
      text: 'API',
      url: '/api/',
    }
  ],
};
