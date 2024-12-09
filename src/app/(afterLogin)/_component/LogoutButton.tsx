'use client';

// react
import { useState } from 'react';

// nextjs

// next auth - client
import { signOut, useSession } from 'next-auth/react';

// react-icons
import { GoKebabHorizontal } from 'react-icons/go';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  // router
  const router = useRouter();

  // session
  const { data: me } = useSession();

  // handle
  const handleLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if (!me?.user) {
    return null;
  }

  return (
    <div className="dropdown dropdown-top w-full">
      <div
        className="flex w-full gap-2 justify-between items-center rounded-full transition-all duration-150 hover:bg-gray-300 px-4 py-2"
        tabIndex={0}
      >
        <div className="">
          <div className="flex justify-start items-center gap-2">
            <figure className="flex-none">
              <img
                className="w-16 h-16 rounded-full"
                src={me.user.image!}
                alt="user image"
              />
            </figure>
            <div className="flex flex-col gap-1">
              <p className="text-lg font-bold">
                <span>{me.user.name}</span> (<span>{me.user.name}</span>)
              </p>
              <p className="text-gray-500">
                @<span>{me.user.email}</span>
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
            <div
              className="hover:bg-gray-300 px-4 py-2 rounded-full"
              onClick={handleLogout}
            >
              <p className="text-lg font-bold">Log out @{me.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
