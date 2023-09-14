import { ICommodity, IPost } from '../../_types';

export const getPostsForCategoryFromMockApi = async (): Promise<IPost[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: 'json' }),
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: IPost[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCommodityByNameFromStagingApi = async (
  name: string,
): Promise<ICommodity | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STAGING_API_URL}/api/v1/trade/commodity/${name}`,
      { next: { revalidate: 86400 } },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data: ICommodity = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
