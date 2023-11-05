import type { Metadata } from 'next';
import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Windred',
  description:
    'Find anime easily. Quick, precise searches. Discover your favorites. Enjoy in seconds!',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen max-w-5xl bg-background antialiased m-auto', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
