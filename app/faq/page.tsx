import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata: Metadata = {
  title: 'EDPN FAQ',
  description: 'Elite Dangerous Pilots Network',
  icons: 'EDPN_logo_black.png',
};

export default function Page() {
  return <PageClient />;
}
