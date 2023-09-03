import { Metadata } from 'next';
import PageClient from './page.client';
import { ICommodity } from '@/types/index';

export const metadata: Metadata = {
  title: 'EDPN - Commodities',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

export default async function getCommodities() {
  let commodities: ICommodity[] | null = null;

  try {
    const commoditiesReq = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity`,
      { next: { revalidate: 86400 } },
    );

    if (commoditiesReq.ok) {
      commodities = (await commoditiesReq.json()) as ICommodity[];
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error(error);
    throw error;
  }

  return <PageClient commodities={commodities} />;
}
