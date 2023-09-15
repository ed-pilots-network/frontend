// Avoid statically building this page during build.
export const dynamic = 'force-dynamic';

export default async function Page() {
  throw new Error('This is a simulated server rendering error.');
}
