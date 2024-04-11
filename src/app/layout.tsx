import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MSWComponent } from './_component/MSWComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B',
  description: 'Bob com',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        {children}
      </body>
    </html>
  );
}
