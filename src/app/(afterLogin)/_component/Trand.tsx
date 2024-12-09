'use client';

// nextjs
import { useRouter } from 'next/navigation';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';

export default function Trand() {
  //router
  const router = useRouter();

  // handle
  const handleClick = () => {
    router.push(`/search?q=${'test'}`);
  };

  return (
    <div
      className="flex gap-1 px-4 py-1 justify-between transition-all duration-200 hover:bg-gray-300 rounded-xl"
      onClick={handleClick}
    >
      <div className="">
        <p className="text-gray-500 text-sm">실시간 트랜드</p>
        <p className="text-lg">밥퐠</p>
        <p className="text-sm text-gray-500">1,264 posts</p>
      </div>
      <div className="">
        <button className="btn btn-ghost btn-circle">
          <GoKebabHorizontal className="w-5 h-6" />
        </button>
      </div>
    </div>
  );
}
