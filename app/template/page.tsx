import { Metadata } from 'next';
import PageClient, { ICommoditySchema } from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Template',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

async function getData() {
  // adjust revalidation time to your needs, or remove it completely
  // here it's set to 1 day as the data doesn't change often
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity/filter?type=WASTE&isRare=false`,
    { next: { revalidate: 86400 } },
  );

  if (!req.ok) {
    throw new Error('Failed to fetch data. Try again, or wait until later.');
  }
  return req.json();
}

export default async function Page() {
  const data: ICommoditySchema[] = await getData();

  return <PageClient serverData={data} />;
}
