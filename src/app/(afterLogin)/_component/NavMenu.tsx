'use client';

// nextjs
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

import {
  IoHome,
  IoHomeOutline,
  IoSearch,
  IoSearchOutline,
} from 'react-icons/io5';
import { BiSolidMessage, BiMessageDetail } from 'react-icons/bi';
import { RiUser6Fill, RiUser6Line } from 'react-icons/ri';

export default function NavMenu() {
  // next
  const segment = useSelectedLayoutSegment();

  const me = {
    id: 'bob-park',
  };

  return (
    <ul className="flex-1">
      <li className="">
        <Link className="" href="/home">
          <div className="flex w-full h-[50px p-3 items-center hover:bg-gray-300 rounded-full">
            {segment === 'home' ? (
              <IoHome className="w-6 h-6" />
            ) : (
              <IoHomeOutline className="w-6 h-6" />
            )}
            <div
              className={`ml-2 text-xl ${segment === 'home' && 'font-bold'}`}
            >
              홈
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore" style={{ textDecoration: 'none' }}>
          <div className="flex w-full h-[50px p-3 items-center hover:bg-gray-300 rounded-full">
            {segment === 'explore' ? (
              <IoSearch className="w-6 h-6" />
            ) : (
              <IoSearchOutline className="w-6 h-6" />
            )}
            <div
              className={`ml-2 text-xl ${segment === 'explore' && 'font-bold'}`}
            >
              탐색하기
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages" style={{ textDecoration: 'none' }}>
          <div className="flex w-full h-[50px p-3 items-center hover:bg-gray-300 rounded-full">
            {segment === 'messages' ? (
              <BiSolidMessage className="w-6 h-6" />
            ) : (
              <BiMessageDetail className="w-6 h-6" />
            )}
            <div
              className={`ml-2 text-xl ${
                segment === 'messages' && 'font-bold'
              }`}
            >
              쪽지
            </div>
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me.id}`} style={{ textDecoration: 'none' }}>
            <div className="flex w-full h-[50px p-3 items-center hover:bg-gray-300 rounded-full">
              {segment === `${me.id}` ? (
                <RiUser6Fill className="w-6 h-6" />
              ) : (
                <RiUser6Line className="w-6 h-6" />
              )}
              <div
                className={`ml-2 text-xl ${segment === me.id && 'font-bold'}`}
              >
                프로필
              </div>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}
