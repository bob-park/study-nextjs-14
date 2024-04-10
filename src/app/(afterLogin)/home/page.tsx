import Post from '../_component/Post';
import PostForm from '../_component/PostForm';
import Tab from '../_component/Tab';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
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
    </main>
  );
}
