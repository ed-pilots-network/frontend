import { Metadata } from 'next';
import PageClient from './page.client';
import { getFormElementDataServer } from '../_lib/api-calls';
import { ICommodity } from '@/types/index';

export const metadata: Metadata = {
  title: 'EDPN - Commodities',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

async function getData() {
  let queryString = 'trade/commodity';

  const result = await getFormElementDataServer(queryString);

  return result;
}

export default async function Page() {
  const data: ICommodity[] = await getData();

  return <PageClient commodities={data} />;
}
