interface Post {
  id: string;
  user: User;
  content: string;
  images: PostImage[];
  createdDate: Date;
  comment?: {
    count: number;
  };
  repost?: {
    count: number;
  };
  like?: {
    count: number;
    isLike: boolean;
  };
  view?: {
    count: number;
  };
}

interface PostImage {
  imageId: number;
  link: string;
}
