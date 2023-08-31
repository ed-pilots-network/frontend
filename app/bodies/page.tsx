import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN - Bodies',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_dark_background.png',
};

export default function page() {
  return <PageClient />;
}
