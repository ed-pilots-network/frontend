import { Metadata } from 'next';
import PageClient from './page.client';
import { getFormElementDataServer } from '../_lib/api-calls';

// Import appropriare type for the resource you intend to fetch & pass to client
import { ICommodity } from '@/app/_types/commodity';

export const metadata: Metadata = {
  title: 'EDPN Template',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};
async function getData() {
  // adjust the filter to your endpoint needs, results are cached for 24 hours
  let queryString = 'trade/commodity/filter?type=WEAPONS&isRare=false';

  const result = await getFormElementDataServer(queryString);

  return result;
}

export default async function Page() {
  // create an appropriate interface for your data in page.client and import it here
  const data: ICommodity[] = await getData();

  return <PageClient serverData={data} />;
}
