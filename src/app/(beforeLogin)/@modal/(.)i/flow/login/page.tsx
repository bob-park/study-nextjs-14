'use client';

// react
import { useState, useEffect } from 'react';

const id = 'login_modal_id';

export default function Page() {
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

  return (
    <dialog id={id} className="modal ">
      <div className="modal-box relative">
        <div className="size-full ">
          <button className="btn btn-sm btn-circle btn-ghost absolute top-0 left-0">
            ✕
          </button>
        </div>
        <form>
          <div className="">
            <h2 className="text-2xl font-bold">로그인하세요.</h2>
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <div>
              <div className="">
                <button className="" disabled={!usename && !password}>
                  로그인하기
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog"></form>
        </div>
      </div>
    </dialog>
  );
}
