import { Metadata } from 'next';
import PageClient from './page.client';
import {
  getPostsForCategoryFromMockApi,
  getCommodityByNameFromStagingApi,
} from './_api';
import { ICommodity, IPost } from '../_types';

// Avoid statically building this page during build.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'EDPN Playground',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

export default async function Page() {
  let posts: IPost[] = [];
  let commodity: ICommodity | null = null;

  try {
    posts = await getPostsForCategoryFromMockApi();
  } catch (error) {
    console.error('Failed to fetch posts data:', error);
    throw error;
  }

  try {
    commodity = await getCommodityByNameFromStagingApi('Wine');
  } catch (error) {
    console.error('Failed to fetch commodity data:', error);
    throw error;
  }

  return <PageClient posts={posts} commodity={commodity} />;
}
