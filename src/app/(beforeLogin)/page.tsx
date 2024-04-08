import Image from 'next/image';
import Link from 'next/link';

import zlogo from '/public/zlogo.png';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="flex-1">
        <div className="flex items-center justify-center">
          <Image src={zlogo} alt="logo" />
        </div>
      </div>
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-2 justify-start text-start">
          <h1 className="text-5xl font-extrabold mb-8">
            지금 일어나고 있는 일
          </h1>
          <h2 className="text-3xl font-bold mb-5">지금 가입하세요.</h2>
          <Link
            className="btn text-white bg-blue-400 rounded-full text-lg font-extrabold mb-16 hover:bg-blue-600 max-w-[300px]"
            href="/i/flow/signup"
          >
            계정 만들기
          </Link>
          <h3 className="text-lg font-bold mb-2">
            이미 트위터에 가입하셨나요?
          </h3>
          <Link
            className="btn btn-outline rounded-full font-bold text-lg text-blue-500 hover:bg-blue-600 hover:text-white max-w-[300px]"
            href="/login"
          >
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
