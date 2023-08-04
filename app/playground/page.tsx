import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Playground',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_black.png',
};

/** Example GET calls
async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getPostsForCategory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/json`);
  if (!res.ok) {
    return null;
  }

  return res.json();
}
*/

// Example fetch with POST instead of GET. Relies on middlware to change mock API to GET
async function getPostsForCategoryWithPost() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: 'json' }),
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Page() {
  let posts = null;

  try {
    posts = await getPostsForCategoryWithPost();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  return <PageClient posts={posts} />;
}
