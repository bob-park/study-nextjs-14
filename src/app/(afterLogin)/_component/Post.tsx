'use client';

// react
import {} from 'react';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';
import { BsDot } from 'react-icons/bs';

// timeago
import TimeAgo from 'timeago-react';
import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';
import ActionButtons from './ActionButtons';

import { faker } from '@faker-js/faker';

register('ko', ko);

export default function Post() {
  const post = {
    user: {
      id: 'bob-park',
      nickname: '봡팤',
      name: '박현우',
      image: '/5Udwvqim.jpg',
    },
    id: 'dummy-post-id',
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅜㅜ',
    images: [
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
    ],
    createdDate: new Date(),
    comment: {
      count: 1,
    },
    repost: {
      count: 1,
    },
    like: {
      count: 0,
      isLike: true,
    },
    view: {
      count: 1,
    },
  };

  return (
    <article className="w-full p-4 border-b-[1px] border-b-gray-200">
      <div className="flex gap-2">
        <div className="flex-none">
          <figure className="flex-none w-16 ">
            <Image src={post.user.image} alt="avatar" width={64} height={64} />
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
                      href={`/${post.user.id}`}
                    >
                      {post.user.nickname}
                    </Link>
                    <span className="text-sm text-gray-500 ml-2">
                      @{post.user.id}
                    </span>
                    <span className="ml-2 text-gray-400">
                      <BsDot className="inline" />
                      <TimeAgo datetime={new Date()} locale="ko" />
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
              <p>{post.content}</p>
            </div>
            {/* contents */}
            {post.images.map((item) => (
              <div key={`post-${post.id}-${item.imageId}`} className="flex-1">
                <img
                  className="rounded-xl size-full"
                  src={item.link}
                  alt={`post-${post.id}`}
                />
              </div>
            ))}
            {/* actions */}
            <div className="flex-1 mt-5">
              <ActionButtons
                comment={post.comment}
                repost={post.repost}
                like={post.like}
                view={post.view}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
