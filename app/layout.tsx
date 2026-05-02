import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import CustomCursor from '@/components/ui/CustomCursor';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dubai Mall — Where the World Shops',
  description:
    'The world\'s most visited shopping and entertainment destination. 1,200+ brands, 105M+ annual visitors, 5.4M sq ft of iconic retail experience.',
  keywords: 'Dubai Mall, retail leasing, brand sponsorship, events, Fashion Avenue, luxury retail, Downtown Dubai',
  openGraph: {
    title: 'Dubai Mall — Where the World Shops',
    description: '1,200+ brands. 105M+ visitors. One iconic address.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} bg-dark text-white antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
