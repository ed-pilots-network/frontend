import PageClient from './page.client';

// Avoid statically building this page during build.
export const dynamic = 'force-dynamic';

export default async function Page() {
  return <PageClient />;
}
