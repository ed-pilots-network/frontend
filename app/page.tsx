import { Metadata } from 'next';
import PageClient from './page.client';

export default function Page() {
  return <PageClient />;
}

export const metadata: Metadata = {
  title: 'EDPN Home',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};
