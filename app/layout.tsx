import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dubai Mall — The World\'s Premier Retail Destination',
  description:
    'Explore unmatched leasing, sponsorship, and event opportunities at Dubai Mall — home to 1,200+ stores and 105 million annual visitors.',
  keywords: 'Dubai Mall, retail leasing, brand sponsorship, events, Fashion Avenue, luxury retail',
  openGraph: {
    title: 'Dubai Mall — Partner With The World\'s Best',
    description: '1,200+ stores. 105M visitors. One iconic address.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} bg-[#0A0A0A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
