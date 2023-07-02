import { Metadata } from 'next';
import commodities from '@/lib/commodity-list';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Commodities',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

export default function Page() {
  // TODO: for now these values have leading designators that we need to remove
  // for example: 'water' is stored as 'ch_water' designated as a chemical
  // if we don't end up using this designation then we should remove it
  const formattedCommodities = commodities.map((commodity) =>
    commodity.slice(3).split('_').join(' '),
  );
  return <PageClient commodities={formattedCommodities} />;
}
