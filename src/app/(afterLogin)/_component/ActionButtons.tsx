'use client';

// react icons
import { FaRegComment } from 'react-icons/fa';
import { BiRepost } from 'react-icons/bi';
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import { ImParagraphRight } from 'react-icons/im';
import { CiBookmark } from 'react-icons/ci';
import { FiShare } from 'react-icons/fi';

// utils
import { parseSimpleCount } from '@/utils/parse';

export type ActionButtonsProps = {
  comment?: {
    count: number;
  };
  repost?: {
    count: number;
  };
  like?: {
    count: number;
    isLike: boolean;
  };
  view?: {
    count: number;
  };
};

export default function ActionButtons({
  comment,
  repost,
  like,
  view,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-between items-center text-gray-500 ">
      <div className="transition-all duration-200 hover:text-sky-500 p-2">
        <span>
          <FaRegComment className="w-5 h-5 inline" />
        </span>
        <span className="ml-2">{parseSimpleCount(comment?.count || 0)}</span>
      </div>
      <div className="transition-all duration-200 hover:text-green-500 p-2">
        <span>
          <BiRepost className="w-5 h-5 inline" />
        </span>
        <span className="ml-2">{parseSimpleCount(repost?.count || 0)}</span>
      </div>
      <div className="transition-all duration-200 hover:text-red-500 p-2">
        <span>
          {like?.isLike ? (
            <IoHeart className="w-5 h-5 inline text-red-500" />
          ) : (
            <IoHeartOutline className="w-5 h-5 inline" />
          )}
        </span>
        <span className="ml-2">{parseSimpleCount(like?.count || 0)}</span>
      </div>
      <div className="transition-all duration-200 hover:text-blue-500 p-2">
        <span>
          <ImParagraphRight className="w-5 h-5 inline rotate-90" />
        </span>
        <span className="ml-2">{parseSimpleCount(view?.count || 0)}</span>
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
  );
}
