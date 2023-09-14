interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const getFilterCommodityFromApiClientSide = async ({
  setIsLoading,
}: Props): Promise<Response> => {
  setIsLoading(true);

  let queryString = 'type=WASTE&isRare=false';

  const res = await fetch(`/api/v1/trade/commodity/filter?${queryString}`);

  return res;
};

export default getFilterCommodityFromApiClientSide;
