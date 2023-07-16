import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Playground',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo.png',
};

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Page() {
  let posts = null;

  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  return <PageClient posts={posts} />;
}
