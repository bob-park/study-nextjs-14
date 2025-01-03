'use client';

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

import { getPostRecommands } from '@/app/(afterLogin)/home/_lib/getPostRecommands';
import PostAticle from './PostArticle';
import { Fragment } from 'react';

export default function PostRecommands() {
  // const { data } = useQuery<Post[]>({
  //   queryKey: ['posts', 'recommands'],
  //   queryFn: getPostRecommands,
  //   staleTime: 10 * 1_000, // default 0, fresh => stale
  //   gcTime: 300 * 1_000, // inactive 상태에서 gc time 이상이 될때 제거 항상 gcTime > staleTime

  //   // refetch 무조건 새로 가져옴 => 화면에 안보여도 데이터가 필요한 경우 사용
  //   // invalidate inactive 일때 안가져옴, 화면에서 데이터를 사용할때 가져옴
  //   // reset 초기 데이터로 되돌릴때 사용
  //   // loading 로딩화면 보고싶을때
  //   // error 에러 상태 보고싶을때
  //   initialData: () => [],
  // });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching, // 데이터 다시 가져올때 마다 true
    isPending, // 완전 처음 데이터가 없는 경우
    isLoading, // isFetching && isPending
  } = useInfiniteQuery<
    Post[],
    Object,
    InfiniteData<Post[]>,
    [_1: string, _2: string], // query key
    number | string // page param type
  >({
    queryKey: ['posts', 'recommands'],
    queryFn: getPostRecommands,
    staleTime: 10 * 1_000,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id, // last page의 커서 위치
  });

  // 2차면 배열로 되어 있음
  return data?.pages.map((page, i) => (
    <Fragment key={i}>
      {page.map((post) => (
        <PostAticle key={`post-key-${post.id}`} post={post} />
      ))}
    </Fragment>
  ));
}
