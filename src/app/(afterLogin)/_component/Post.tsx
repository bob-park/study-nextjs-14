'use client';

// react
import {} from 'react';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';
import { BsDot } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { BiRepost } from 'react-icons/bi';
import { IoHeartOutline } from 'react-icons/io5';
import { ImParagraphRight } from 'react-icons/im';
import { CiBookmark } from 'react-icons/ci';
import { FiShare } from 'react-icons/fi';

// timeago
import TimeAgo from 'timeago-react';
import { register } from 'timeago.js';
import ko from 'timeago.js/lib/lang/ko';

register('ko', ko);

const post = {
  user: {
    id: 'bob-park',
    nickname: '봡팤',
    name: '박현우',
    image: '/5Udwvqim.jpg',
  },
  id: 'dummy-post-id',
  content: '클론코딩 라이브로 하니 너무 힘들어요 ㅜㅜ',
  images: ['/yRsRRjGO.jpg'],
  createdDate: new Date(),
};

export default function Post() {
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
              <div key={`post-${post.id}`} className="flex-1">
                <Image
                  className="rounded-xl size-full"
                  src={item}
                  alt={`post-${post.id}`}
                  width={400}
                  height={300}
                />
              </div>
            ))}
            {/* actions */}
            <div className="flex-1 mt-5">
              <div className="flex justify-between items-center text-gray-500 ">
                <div className="transition-all duration-200 hover:text-sky-500 p-2">
                  <span>
                    <FaRegComment className="w-5 h-5 inline" />
                  </span>
                  <span className="ml-2">1.3k</span>
                </div>
                <div className="transition-all duration-200 hover:text-green-500 p-2">
                  <span>
                    <BiRepost className="w-5 h-5 inline" />
                  </span>
                  <span className="ml-2">1.3k</span>
                </div>
                <div className="transition-all duration-200 hover:text-red-500 p-2">
                  <span>
                    <IoHeartOutline className="w-5 h-5 inline" />
                  </span>
                  <span className="ml-2">1.3k</span>
                </div>
                <div className="transition-all duration-200 hover:text-blue-500 p-2">
                  <span>
                    <ImParagraphRight className="w-5 h-5 inline rotate-90" />
                  </span>
                  <span className="ml-2">1.3k</span>
                </div>
                <div className="flex-none w-24">
                  <button
                    className="btn btn-ghost btn-circle hover:text-blue-500"
                    type="button"
                  >
                    <CiBookmark className="w-5 h-5 inline" />
                  </button>
                  <button
                    className="btn btn-ghost btn-circle hover:text-blue-500"
                    type="button"
                  >
                    <FiShare className="w-5 h-5 inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
