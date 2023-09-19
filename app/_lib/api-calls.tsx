/* eslint-disable no-console */
// Purpose: API calls to the backend - name ending with Server are used in page.tsx, name ending with Client are used in page.client.tsx

async function getFormElementDataServer(queryString: string) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/${queryString}`,
    { next: { revalidate: 86400 } },
  );

  if (!req.ok) {
    console.log('Failed to fetch data at: ', queryString);
    throw new Error('Failed to fetch data. Try again, or wait until later.');
  }
  return req.json();
}

const getSubmitFormClient = async (queryString: string): Promise<Response> => {
  try {
    const res = await fetch(`/api/v1/${queryString}`);

    return res;
  } catch (error) {
    console.log('Failed to fetch data at: ', queryString);
    return new Response(null);
  }
};

export { getFormElementDataServer, getSubmitFormClient };
