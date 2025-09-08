import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <HomeLayout {...baseOptions}>
      {children}
      <Footer />
    </HomeLayout>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-semibold">LANKO </p>
          <p className="text-xs">
             Built with ❤️ by 2025 by{' '}
            <a
              href="https://github.com/LankoTeam"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              LANKO Team from Nexaorion
            </a>
          </p>
          <p className="text-xs">
            This documentation is licensed under CC BY 4.0.
          </p>
        </div>
      </div>
    </footer>
  );
}