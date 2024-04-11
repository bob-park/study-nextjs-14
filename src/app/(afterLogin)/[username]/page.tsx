import Image from 'next/image';

import Post from '../_component/Post';
import BackdropButton from '../_component/BackdropButton';

const me = {
  id: 'bob-park',
  nickname: '봡팤',
  name: '박현우',
  image: '/5Udwvqim.jpg',
};

const imgArr = [
  'https://loremflickr.com/640/480?lock=5636801104445440',
  'https://loremflickr.com/640/480?lock=3920910637596672',
  'https://loremflickr.com/640/480?lock=3371568644227074',
  'https://loremflickr.com/640/480?lock=3371568644227073',
];

const prePost = {
  user: {
    id: 'bob-park',
    nickname: '봡팤',
    name: '박현우',
    avatar: '/5Udwvqim.jpg',
  },
  content: '클론코딩 라이브로 하니 너무 힘들어요 ㅜㅜ',
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

const posts = new Array(2).fill(prePost).map((item, index) => {
  const imgLenth = Math.floor(Math.random() * 4);

  const images = new Array(imgLenth + 1).fill('*').map((img, index) => {
    return { imageId: index, link: imgArr[index] };
  });

  return { ...item, id: `dummy-post-id-${index}`, images };
});

export default function Profile() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="border-b-[1px] border-b-gray-200 sticky top-0 bg-white">
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
      <div className="">
        {posts.map((post) => (
          <Post key={`post-key-${post.id}`} {...post} date={post.createdDate} />
        ))}
      </div>
    </main>
  );
}
