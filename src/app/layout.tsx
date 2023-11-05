import type { Metadata } from 'next';
import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Windred',
  description:
    'Find anime easily. Quick, precise searches. Discover your favorites. Enjoy in seconds!',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
