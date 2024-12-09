'use client';

import TrandSection from './TrandSection';

// nextjs
import { usePathname } from 'next/navigation';

export default function RightTrandSection() {
  const pathname = usePathname();

  if (pathname === '/explore') {
    return null;
  }

  return <TrandSection />;
}
