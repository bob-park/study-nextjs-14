'use client';

// react
import {} from 'react';

// nextjs
import Link from 'next/link';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';
import { BsDot } from 'react-icons/bs';

import ActionButtons, { type ActionButtonsProps } from './ActionButtons';
import PostImages, { type PostImage } from './PostImages';

// timeago
import TimeAgo from 'timeago-react';
import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

type PostProps = {
  id: string;
  user: {
    id: string;
    nickname: string;
    name: string;
    avatar: string;
  };
  content: string;
  images: PostImage[];
  date: Date;
} & ActionButtonsProps;

export default function Post({
  id,
  user,
  content,
  images,
  date,
  comment,
  like,
  view,
  repost,
}: PostProps) {
  return (
    <article className="w-full p-4 border-b-[1px] border-b-gray-200">
      <div className="flex gap-2">
        <div className="flex-none">
          <figure className="flex-none w-16 ">
            <img src={user.avatar} alt="avatar" />
          </figure>
        </div>
        <div className="flex-1 ml-2">
          <div className="flex flex-col">
            <div className="">
              <div className="flex gap-2 relative">
                <div className="flex-1">
                  <p className="">
                    <Link
                      className="text-base font-bold hover:underline"
                      href={`/${user.id}`}
                    >
                      {user.nickname}
                    </Link>
                    <span className="text-sm text-gray-500 ml-2">
                      @{user.id}
                    </span>
                    <span className="ml-2 text-gray-400">
                      <BsDot className="inline" />
                      <TimeAgo datetime={date} locale="ko" />
                    </span>
                  </p>
                </div>
                <div className="flex-none absolute top-0 right-0">
                  <button className="btn btn-ghost btn-circle text-gray-400">
                    <GoKebabHorizontal className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 my-3">
              <p>{content}</p>
            </div>
            {/* contents */}

            {images && images.length > 0 && (
              <div className="flex-1">
                <PostImages images={images} />
              </div>
            )}

            {/* actions */}
            <div className="flex-1 mt-5">
              <ActionButtons
                comment={comment}
                repost={repost}
                like={like}
                view={view}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
