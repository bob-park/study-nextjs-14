import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import Post from './_component/PostArticle';
import PostForm from './_component/PostForm';
import Tab from './_component/Tab';
import TabProvider from './_component/TabProvider';
import PostRecommands from './_component/PostRecommands';

import { getPostRecommands } from '@/app/(afterLogin)/home/_lib/getPostRecommands';

export default async function Home() {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ['posts', 'recommands'], // 이런 key 를 가지고 있으면
  //   queryFn: getPostRecommands, // 이 function 실행
  // });

  // infinity scrolling
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommands'],
    queryFn: getPostRecommands,
    initialPageParam: 0, // 초기 page param
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="flex min-h-screen flex-col relative">
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <div className="border-b-[1px] border-b-gray-200">
            <PostForm />
          </div>

          {/* contents */}
          <div className="">
            <PostRecommands />
          </div>
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
