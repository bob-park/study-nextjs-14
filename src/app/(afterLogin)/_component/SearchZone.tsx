'use client';

// react icon
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchZone() {
  return (
    <form className="mb-6 w-full">
      <label className="input input-bordered flex items-center gap-2 m-1 mt-2 rounded-full">
        <IoSearchSharp className="w-6 h-6" />
        <input type="text" className="grow" placeholder="Search" />
      </label>
    </form>
  );
}
