import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN Commodities',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

export default function Page() {
  return <PageClient />;
}
