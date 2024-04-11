'use client';

export type PostImage = {
  imageId: number;
  link: string;
};

type PostImagesProps = {
  images: PostImage[];
};

export default function PostImages({ images }: PostImagesProps) {
  if (images.length === 1) {
    return (
      <img
        className="rounded-xl"
        src={images[0].link}
        alt={`post-${images[0].imageId}`}
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-1 ">
        <img
          className="rounded-l-xl object-cover"
          src={images[0].link}
          alt={`post-image-${images[0].imageId}`}
        />
        <img
          className="rounded-r-xl object-cover"
          src={images[1].link}
          alt={`post-image-${images[1].imageId}`}
        />
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="grid grid-cols-2 gap-1">
        <div className="col-span-1 row-span-2">
          <img
            className="rounded-l-xl h-full object-cover"
            src={images[0].link}
            alt={`post-image-${images[0].imageId}`}
          />
        </div>
        <div className="col-span-1 row-span-1">
          <div className="flex flex-col gap-1">
            <img
              className="rounded-tr-xl"
              src={images[1].link}
              alt={`post-image-${images[1].imageId}`}
            />
            <img
              className="rounded-br-xl"
              src={images[2].link}
              alt={`post-image-${images[2].imageId}`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      <img
        className="col-span-1 rounded-tl-xl"
        src={images[0].link}
        alt={`post-image-${images[0].imageId}`}
      />
      <img
        className="col-span-1 rounded-tr-xl"
        src={images[1].link}
        alt={`post-image-${images[1].imageId}`}
      />
      <img
        className="col-span-1 rounded-bl-xl"
        src={images[2].link}
        alt={`post-image-${images[2].imageId}`}
      />
      <img
        className="col-span-1 rounded-br-xl"
        src={images[3].link}
        alt={`post-image-${images[3].imageId}`}
      />
    </div>
  );
}
