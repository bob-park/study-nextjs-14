'use client';

import Image from 'next/image';

const FollowRecommandItem = () => {
  const me = {
    id: 'elonmusk',
    nickname: '일론 머스크',
    name: '일론 머스크',
    image: '/yRsRRjGO.jpg',
  };

  return (
    <div className="flex gap-1 px-4 py-1 justify-between transition-all duration-200 hover:bg-gray-300 rounded-xl">
      <div className="">
        <div className="flex gap-2">
          <div>
            <figure>
              <Image
                className="rounded-full"
                src={me.image}
                alt="user icon"
                width={52}
                height={52}
              />
            </figure>
          </div>
          <div className="">
            <p className="text-lg">{me.nickname}</p>
            <p className="text-sm text-gray-500">@{me.id}</p>
          </div>
        </div>
      </div>
      <div className="">
        <button className="btn bg-white rounded-full w-full">FOLLOW</button>
      </div>
    </div>
  );
};

export default function FollowRecommand() {
  return (
    <div className="flex flex-col gap-2 m-2 p-4 bg-gray-100 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold mb-3">팔로우 추천</h2>

      {new Array(3).fill('*').map((value, index) => (
        <FollowRecommandItem key={`follow-recommand-id-${index}`} />
      ))}
    </div>
  );
}
