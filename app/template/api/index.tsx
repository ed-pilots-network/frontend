const getFromApiClientSide = async (): Promise<Response> => {
  let queryString = 'type=WASTE&isRare=false';

  try {
    const res = await fetch(`/api/v1/trade/commodity/filter?${queryString}`);

    return res;
  } catch (error) {
    return new Response(null);
  }
};

export default getFromApiClientSide;
