// image
import zlogo from '/public/zlogo.png';

// nextjs
import Image from 'next/image';

// react icon
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import FollowRecommand from './_component/FollowRecommand';
import RightSearchSection from './_component/RightSearchSection';
import RightTrandSection from './_component/RightTrandSection';
import Link from 'next/link';
import RQProvider from './_component/RQProvider';

export default function AfterLoginLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center size-full relative min-w-[1280px]">
      {/* left menu */}
      <header className="w-[350px] h-screen sticky top-0">
        <section className="flex flex-col h-full justify-between content-between gap-2 pr-4 ">
          <div className="flex-1">
            <div className="flex flex-col justify-start gap-2 ml-2 ">
              <Link className="no-underline" href="/home">
                <div className="">
                  <Image
                    className="hover:scale-110"
                    src={zlogo}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
              <nav className="flex flex-col w-full items-stretch gap-2">
                <NavMenu />
                <Link
                  href="/compose/tweet"
                  className="flex-1 btn btn-info text-white rounded-full w-full"
                >
                  게시하기
                </Link>
              </nav>
            </div>
          </div>

          <div className="w-full mb-4">
            <LogoutButton />
          </div>
        </section>
      </header>

      <RQProvider>
        {/* right contents */}
        <div className="h-full">
          <div className="flex flex-row h-full">
            {/* contents */}
            <div className="flex-none w-[600px] border-x-[1px] border-x-gray-200">
              {children}
            </div>

            {/* right menu */}
            <section className="flex-none w-[350px] pl-4">
              <div className="sticky top-0">
                <RightSearchSection />
              </div>
              <div className="mt-2">
                <RightTrandSection />
              </div>
              <div className="mt-4 sticky top-16">
                <FollowRecommand />
              </div>
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
}
