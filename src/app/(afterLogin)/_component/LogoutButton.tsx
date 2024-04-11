'use client';

// react
import { useState } from 'react';

// nextjs
import Image from 'next/image';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';

export default function LogoutButton() {
  const me = {
    id: 'bob-park',
    nickname: '봡팤',
    name: '박현우',
    image: '/5Udwvqim.jpg',
  };

  // handle
  const onLogout = () => {};

  return (
    <div className="dropdown dropdown-top w-full">
      <div
        className="flex w-full gap-2 justify-between items-center rounded-full transition-all duration-150 hover:bg-gray-300 px-4 py-2"
        tabIndex={0}
      >
        <div className="">
          <div className="flex justify-start items-center gap-2">
            <figure className="flex-none">
              <Image src={me.image} alt="user image" width={52} height={52} />
            </figure>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">
                <span>{me.name}</span> (<span>{me.name}</span>)
              </p>
              <p className="text-gray-500">
                @<span>{me.id}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <GoKebabHorizontal className="w-6 h-6 mr-2" />
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-80 shadow"
      >
        <div className="card-body">
          <div className="flex flex-col gap-4">
            <div className="hover:bg-gray-300 px-4 py-2 rounded-full">
              <p className="text-lg font-bold">Add an existing account</p>
            </div>
            <div className="hover:bg-gray-300 px-4 py-2 rounded-full">
              <p className="text-lg font-bold">Log out @{me.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
