'use server';

// server 환경
import { signIn } from '@/auth';
import { redirect } from 'next/navigation';

export async function onLogin({
  id,
  password,
}: {
  id: string;
  password: string;
}) {
  // id password login

  await signIn('credentials', {
    username: id,
    password,
    redirect: true,
    redirectTo: '/home',
  });
}
