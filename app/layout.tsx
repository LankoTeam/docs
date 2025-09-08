import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next'
const baseUrl = 'https://docs.lanko.space';
const metaDescription = `LANKO 是一个更适合中国人的一站式活动服务平台。支持API接入平台，助力开发者轻松构建自己的BOT。无论是线上活动还是线下聚会，LANKO都能为你提供便捷的活动管理和参与体验。`;
const metaTitle = 'LANKO 文档 - 一站式活动服务平台'

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: metaTitle, template: '%s - LANKO 文档' },
  description: metaDescription,
  keywords: `LANKO, Next.js, React, TypeScript, Python, 活动管理, 活动组织, 活动平台, 社交平台, 交友, 聚会, 线上活动, 线下活动, API, 开发者, BOT`,
  creator: '@LANKO Team',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/lanko-icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.svg',
    apple: [
      { url: '/lanko-icon.png' },
    ],
  },
  openGraph: {
    url: baseUrl,
    title: metaTitle,
    description: metaDescription,
    siteName: 'LANKO 文档',
    type: 'website',
  },
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
