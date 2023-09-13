interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const getFilterCommodityFromApiClientSide = async ({
  setIsLoading,
  setSubmitSuccess,
}: Props): Promise<Response> => {
  setIsLoading(true);
  setSubmitSuccess(false);

  let queryString = 'type=WASTE&isRare=false';

  const res = await fetch(`/api/v1/trade/commodity/filter?${queryString}`);

  return res;
};

export default getFilterCommodityFromApiClientSide;
