'use client';

/**
 * intercepting route 는 client side rendering 에서만 적용된다.
 *
 * 따라서, 브라우저에서 처음 시작될때 intercepting route 가 실행되지 않음
 *
 * _(name) 은 private folder 로 app 밑에 있어도 브라우저에서 route 되지 않는다.
 */

// react
import { useState, useEffect, FormEvent } from 'react';

// nextjs
import { useRouter } from 'next/navigation';

// server action
import { onLogin } from '@/app/(beforeLogin)/@modal/(.)i/flow/login/action';

const id = 'login_modal_id';

export default function LoginModal() {
  const router = useRouter();

  // state
  const [show, setShow] = useState<boolean>(true);
  const [username, setUsername] = useState<string>('');
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onLogin({ id: username, password });
  };

  const handleKeyboardDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      handleBackdrop();
    }
  };

  return (
    <dialog id={id} className="modal" onKeyDownCapture={handleKeyboardDown}>
      <div className="modal-box relative">
        <div className="">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-0 left-0"
            onClick={handleBackdrop}
          >
            ✕
          </button>
        </div>
        <form
          className="flex flex-col gap-2 justify-center items-center "
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold">로그인하세요.</h2>
          <div className="">
            <input
              type="text"
              placeholder="username"
              className="input input-bordered w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="">
            <button
              className="btn btn-info rounded-full w-52"
              disabled={!username || !password}
              type="submit"
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
