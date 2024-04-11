'use client';

import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
// react
import { useState, useEffect, FormEvent } from 'react';

// nextjs
import { useRouter } from 'next/navigation';

const id = 'post_modal_id';

export default function ComposeTweetPage() {
  const router = useRouter();

  // state
  const [show, setShow] = useState<boolean>(true);

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
  };

  const handleKeyboardDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      handleBackdrop();
    }
  };

  return (
    <dialog
      id={id}
      className="modal relative"
      onKeyDownCapture={handleKeyboardDown}
    >
      <div className="modal-box absolute top-0 mt-10">
        <div className="">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute top-0 left-0"
            onClick={handleBackdrop}
          >
            ✕
          </button>
        </div>
        <PostForm />
      </div>
    </dialog>
  );
}
