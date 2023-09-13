import { Metadata } from 'next';
import PageClient, { ICommoditySchema } from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Template',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

async function getData() {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity/filter?type=WASTE&isRare=fals`,
    { next: { revalidate: 86400 } },
  );

  if (!req.ok) {
    // throw new Error('Failed to fetch data');
    return { data: [], status: req.status };
  }
  return { data: await req.json(), status: req.status };
}

export default async function Page() {
  const { data, status }: { data: ICommoditySchema[]; status: number } =
    await getData();

  return <PageClient data={data} status={status} />;
}
