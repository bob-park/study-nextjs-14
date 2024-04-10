import Post from '../_component/Post';
import PostForm from '../_component/PostForm';
import Tab from '../_component/Tab';
import TabProvider from '../_component/TabProvider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <TabProvider>
        <Tab />
        <PostForm />
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
