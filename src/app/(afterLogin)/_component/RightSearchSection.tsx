'use client';

import { usePathname } from 'next/navigation';

import SearchZone from './SearchZone';

export default function RightSearchSection() {
  const pathname = usePathname();

  if (pathname === '/explore') {
    return null;
  }

  return <SearchZone />;
}
