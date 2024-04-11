'use client';

// react
import { useRef } from 'react';

// nextjs
import Image from 'next/image';
import { FormEvent } from 'react';

// react icon
import { FaEarthAsia } from 'react-icons/fa6';
import { PiImageBold } from 'react-icons/pi';

const me = {
  id: 'bob-park',
  nickname: '봡팤',
  name: '박현우',
  image: '/5Udwvqim.jpg',
};

export default function PostForm() {
  // ref
  const inputFileRef = useRef<HTMLInputElement>(null);

  // handle
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputFileClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className="flex flex-row gap-1 p-2 items-start">
      <figure className="flex-none w-16 ">
        <Image src={me.image} alt="avatar" width={64} height={64} />
      </figure>
      <div className="flex-1">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="">
            <textarea
              className="textarea text-lg font-medium w-full resize-none"
              placeholder="What is happening?!"
            ></textarea>
          </div>
          <div className="ml-4 text-sm text-blue-600 font-bold border-b-[1px] border-b-gray-200 pb-3">
            <p className="inline">
              <FaEarthAsia className="inline" />
              <span className="ml-2">Everyone can reply</span>
            </p>
          </div>
          <div className="py-2">
            <div className="flex flex-row justify-between items-center">
              <input type="file" ref={inputFileRef} name="imageFiles" hidden />
              <button
                className="btn btn-ghost btn-circle text-blue-500"
                onClick={handleInputFileClick}
              >
                <PiImageBold className="w-6 h-6" />
              </button>
              <button
                className="btn btn-info rounded-full w-28 text-white font-bold"
                type="submit"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
