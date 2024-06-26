'use client';

/**
 * intercepting route 는 client side rendering 에서만 적용된다.
 *
 * 따라서, 브라우저에서 처음 시작될때 intercepting route 가 실행되지 않음
 *
 * _(name) 은 private folder 로 app 밑에 있어도 브라우저에서 route 되지 않는다.
 */

// react
import { useState, useEffect } from 'react';

// nextjs
import { useRouter } from 'next/navigation';

const id = 'login_modal_id';

export default function LoginModal() {
  const router = useRouter();

  // state
  const [show, setShow] = useState<boolean>(true);
  const [usename, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // useEffect
  useEffect(() => {
    const modal = document.getElementById(id) as HTMLDialogElement;

    if (!modal) {
      return;
    }

    show ? modal.showModal() : modal.close();
  }, [show]);

  // handle
  const handleBackdrop = () => {
    router.back();
  };

  return (
    <dialog id={id} className="modal ">
      <div className="modal-box relative">
        <div className="">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-0 left-0"
            onClick={handleBackdrop}
          >
            ✕
          </button>
        </div>
        <form className="flex flex-col gap-2 justify-center items-center ">
          <h2 className="text-2xl font-bold">로그인하세요.</h2>
          <div className="">
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="">
            <button
              className="btn btn-info rounded-full w-52"
              disabled={!usename && !password}
            >
              로그인하기
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog"></form>
        </div>
      </div>
    </dialog>
  );
}
