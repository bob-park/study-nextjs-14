'use client';

// nextjs
import { useRouter } from 'next/navigation';

// react icons
import { GoKebabHorizontal } from 'react-icons/go';
import { BsDot } from 'react-icons/bs';

// faker
import { faker } from '@faker-js/faker';

// timeago
import TimeAgo from 'timeago-react';
import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

type RoomProps = {
  id: string;
  user: { id: string; nickname: string; avatar: string };
  contents: { id: string; content: string; createdDate: Date };
};

export default function Room({ id, user, contents }: RoomProps) {
  // router
  const router = useRouter();

  // handle
  const handleClick = () => {
    router.push(`/room/${id}`);
  };

  return (
    <div
      className="transition-all duration-200 hover:bg-gray-300 p-2 m-3 rounded-2xl"
      onClick={handleClick}
    >
      <div className="flex gap-2 justify-between items-center">
        {/* avatar */}
        <div className="flex-none w-20">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={faker.image.avatar()} />
            </div>
          </div>
        </div>

        {/* message */}
        <div className="flex-1">
          <p className="text-lg font-bold">
            <span className="">{user.nickname}</span>
            <span className="ml-1 font-normal text-gray-500">@{user.id}</span>
            <BsDot className="inline mx-1 text-gray-500" />
            <span className="font-normal text-gray-500">
              <TimeAgo datetime={contents.createdDate} locale="ko" />
            </span>
          </p>
          <p className="mt-1">{contents.content}</p>
        </div>

        {/* action button */}
        <div className="flex-none w-10 mr-2">
          <button className="btn btn-ghost btn-circle" type="button">
            <GoKebabHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
