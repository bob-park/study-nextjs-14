'use client';

// nextjs
import { usePathname } from 'next/navigation';

import Trand from './Trand';

export default function TrandSection() {
  const pathname = usePathname();

  if (pathname === '/explore') {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 m-2 p-4 bg-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-3">나를 위한 트랜드</h2>

      {new Array(6).fill('*').map((value, index) => (
        <Trand key={`trand-id-${index}`} />
      ))}
    </div>
  );
}
