import Post from '../_component/Post';
import PostForm from '../_component/PostForm';
import Tab from '../_component/Tab';
import TabProvider from '../_component/TabProvider';

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

const posts = new Array(10).fill(prePost).map((item, index) => {
  const imgLenth = Math.floor(Math.random() * 4);

  const images = new Array(imgLenth + 1).fill('*').map((img, index) => {
    return { imageId: index, link: imgArr[index] };
  });

  return { ...item, id: `dummy-post-id-${index}`, images };
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <TabProvider>
        <Tab />
        <div className="border-b-[1px] border-b-gray-200">
          <PostForm />
        </div>

        {/* contents */}
        <div className="">
          {posts.map((post) => (
            <Post
              key={`post-key-${post.id}`}
              {...post}
              date={post.createdDate}
            />
          ))}
        </div>
      </TabProvider>
    </main>
  );
}
