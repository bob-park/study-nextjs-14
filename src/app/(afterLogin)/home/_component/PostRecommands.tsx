'use client';

import { useQuery } from '@tanstack/react-query';

import { getPostRecommands } from '@/app/(afterLogin)/home/_lib/getPostRecommands';
import PostAticle from './PostArticle';

export default function PostRecommands() {
  const { data } = useQuery<Post[]>({
    queryKey: ['posts', 'recommands'],
    queryFn: getPostRecommands,
  });

  return data?.map((post) => (
    <PostAticle key={`post-key-${post.id}`} post={post} />
  ));
}
