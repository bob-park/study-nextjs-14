'use client';

// react
import { useContext, useState } from 'react';

// react icons
import { IoSettingsOutline } from 'react-icons/io5';
import { TabContext } from './TabProvider';

export default function Tab() {
  const { tabIndex, setTabIndex } = useContext(TabContext);

  return (
    <div className="flex flex-row w-full justify-center items-center h-16 border-b-[1px] border-gray-200 sticky top-0 z-10 bg-opacity-30 bg-base-100 backdrop-blur cursor-pointer">
      <div
        className="flex-1 transition-all duration-200 hover:bg-gray-100 size-full"
        onClick={() => setTabIndex(0)}
      >
        <div
          className={`flex flex-col justify-center items-center h-full relative`}
        >
          <p
            className={`px-2 text-lg  ${
              tabIndex === 0
                ? 'text-black font-bold'
                : 'text-gray-400 font-medium'
            }`}
          >
            For You
          </p>
          <p
            className={`absolute bottom-0 w-20 h-[6px] rounded-full ${
              tabIndex === 0 && 'bg-blue-600'
            }`}
          ></p>
        </div>
      </div>
      <div
        className="flex-1 transition-all duration-200 hover:bg-gray-100 size-full"
        onClick={() => setTabIndex(1)}
      >
        <div
          className={`flex flex-col  justify-center items-center h-full relative`}
        >
          <p
            className={`px-2 text-lg ${
              tabIndex === 1
                ? 'text-black font-bold'
                : 'text-gray-400 font-medium'
            }`}
          >
            Following
          </p>
          <p
            className={`absolute bottom-0 w-20 h-[6px] rounded-full ${
              tabIndex === 1 && 'bg-blue-600'
            }`}
          ></p>
        </div>
      </div>
      <div className="flex-none w-16">
        <div className="">
          <button className="btn btn-circle btn-ghost">
            <IoSettingsOutline className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
