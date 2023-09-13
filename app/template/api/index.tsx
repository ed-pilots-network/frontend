interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const getFilterCommodityFromApi = async ({
  setIsLoading,
  setSubmitted,
}: Props): Promise<Response> => {
  setIsLoading(true);
  setSubmitted(false);

  let queryString = 'type=WASTE&isRare=false';

  const res = await fetch(`/api/v1/trade/commodity/filter?${queryString}`);

  return res;
};

export default getFilterCommodityFromApi;
