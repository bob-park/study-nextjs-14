'use client';

import {} from 'react';
import { useRouter } from 'next/navigation';

import MainPage from '@/app/(beforeLogin)/page';

export default function Login() {
  const router = useRouter();

  router.replace('/i/flow/login');

  return <MainPage />;
}
