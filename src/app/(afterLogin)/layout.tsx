// image
import zlogo from '/public/zlogo.png';

// nextjs
import Image from 'next/image';
import Link from 'next/link';

// react icon
import { IoSearchSharp } from 'react-icons/io5';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-2 justify-center size-full relative">
      {/* left menu */}
      <header className="w-[350px] h-screen sticky top-0">
        <section className="flex flex-col h-full justify-between content-between gap-2">
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

      {/* right contents */}
      <div className="h-full">
        <div className="flex flex-row gap-2 h-full">
          {/* contents */}
          <div className="flex-none w-[600px] h-[2000px]">{children}</div>

          {/* right menu */}
          <section className="flex-none w-[350px] bg-blue-300">
            <form className="sticky top-0">
              <label className="input input-bordered flex items-center gap-2 m-1 mt-2 rounded-full">
                <IoSearchSharp className="w-6 h-6" />
                <input type="text" className="grow" placeholder="Search" />
              </label>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
