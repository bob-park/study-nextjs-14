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
          <h1 className="text-4xl">지금 일어나고 있는 일</h1>
          <h2 className="text-2xl">지금 가입하세요.</h2>
          <Link className="" href="/i/flow/signup">
            계정 만든기
          </Link>
          <h3 className="text-xl">이미 트위터에 가입하셨나요?</h3>
          <Link className="" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
