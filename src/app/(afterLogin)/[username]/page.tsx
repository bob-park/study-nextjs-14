import Image from 'next/image';

import Post from '../_component/Post';
import BackdropButton from '../_component/BackdropButton';

const me = {
  id: 'bob-park',
  nickname: '봡팤',
  name: '박현우',
  image: '/5Udwvqim.jpg',
};

export default function Profile() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="border-b-[1px] border-b-gray-200">
        <div className="flex items-center h-20 px-4">
          <div className="flex-none w-20">
            <BackdropButton />
          </div>
          <div className="flex-1">
            <p className="text-xl font-bold">
              <span>{me.name}</span>
              <span>
                (<span>{me.nickname}</span>)
              </span>
            </p>
            <p className="text-gray-500 text-sm">
              <span>0</span> posts
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="flex gap-2 items-center">
          <figure className="flex-none ">
            <Image
              className="rounded-full"
              src={me.image}
              alt="avatar"
              width={100}
              height={100}
            />
          </figure>
          <div className="flex-1">
            <div className="flex gap-2 justify-between items-center">
              <div className="ml-5">
                <p className="text-2xl font-bold">
                  <span>{me.name}</span>
                </p>
                <p className="text-gray-500">
                  <span>@{me.id}</span>
                </p>
              </div>
              <div className="">
                <button className="btn rounded-full w-28 bg-black text-white">
                  팔로우
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* post */}
      {new Array(5).fill('*').map((item, index) => (
        <div key={`profile-post-${index}`} className="">
          <Post />
        </div>
      ))}
    </main>
  );
}
