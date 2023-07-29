import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Playground',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_black.png',
};

async function getPostsForCategoryWithPost() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: 'json' }),
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

async function getCommodityByName(name: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity/${name}`,
    { next: { revalidate: 1 } },
  );

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function Page() {
  let posts;
  let commodity = null;

  try {
    posts = await getPostsForCategoryWithPost();
  } catch (error) {
    console.error('Failed to fetch posts data:', error);
  }

  try {
    commodity = await getCommodityByName('Wine');
  } catch (error) {
    console.error('Failed to fetch commodity data:', error);
  }

  return <PageClient posts={posts} commodity={commodity} />;
}
