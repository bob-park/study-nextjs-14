import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MSWComponent } from './_component/MSWComponent';
import AuthSession from './_component/AuthSession';

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
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
