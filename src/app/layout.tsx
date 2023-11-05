import type { Metadata } from 'next';
import '@/styles/globals.css';
import Favicon from '/public/favicon.ico';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Windred',
  description:
    'Find anime easily. Quick, precise searches. Discover your favorites. Enjoy in seconds!',
  icons: [{ rel: 'icon', url: Favicon.src }],
  openGraph: {
    images: {
      url: Favicon.src,
      width: 1200,
      height: 630,
      alt: 'Windred',
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
