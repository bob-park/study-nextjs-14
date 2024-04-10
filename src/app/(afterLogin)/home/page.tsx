import Post from '../_component/Post';
import PostForm from '../_component/PostForm';
import Tab from '../_component/Tab';
import TabProvider from '../_component/TabProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative border-x-[1px] border-r-gray-200">
      <TabProvider>
        <Tab />
        <div className="border-b-[1px] border-b-gray-200">
          <PostForm />
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
