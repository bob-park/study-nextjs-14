'use client';

import { useRouter } from 'next/navigation';

// react icons
import { IoArrowBack } from 'react-icons/io5';

export default function BackdropButton() {
  // router
  const router = useRouter();

  // handle
  const handleBack = () => {
    router.back();
  };

  return (
    <button className="btn btn-ghost btn-circle" onClick={handleBack}>
      <IoArrowBack className="w-6 h-6" />
    </button>
  );
}
