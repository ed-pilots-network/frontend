interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const getFromApiClientSide = async ({
  setIsLoading,
}: Props): Promise<Response> => {
  setIsLoading(true);

  let queryString = 'type=WASTE&isRare=false';

  try {
    const res = await fetch(`/api/v1/trade/commodity/filter?${queryString}`);

    return res;
  } catch (error) {
    return new Response(null);
  }
};

export default getFromApiClientSide;
