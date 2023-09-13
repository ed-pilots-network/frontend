import { ICommodityFormResponse } from '@/app/_types';
import { SubmitProps } from '@/components/commodities/Form';

interface LocateCommodityMockProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LocateCommodityProps extends LocateCommodityMockProps {
  data: SubmitProps;
  setIsBuying: React.Dispatch<React.SetStateAction<boolean>>;
}

export const getLocateCommodityFromApi = async ({
  setIsLoading,
  setSubmitted,
  data,
  setIsBuying,
}: LocateCommodityProps): Promise<ICommodityFormResponse[] | Error> => {
  setIsLoading(true);
  setSubmitted(false);

  if (data.minDemand === 0) setIsBuying(true);
  if (data.minSupply === 0) setIsBuying(false);

  let queryString = `commodityDisplayName=${data.commodityDisplayName.value
    .split(' ')
    .join('%20')}&maxLandingPadSize=${data.maxLandingPadSize}&minSupply=${
    data.minSupply
  }&minDemand=${data.minDemand}&includeFleetCarriers=${
    data.includeFleetCarriers
  }&includeOdyssey=${data.includeOdyssey}&includePlanetary=${
    data.includePlanetary
  }&x=0&y=0&z=0`;

  try {
    const commodityReq = await fetch(
      `/api/v1/trade/locate-commodity/filter?${queryString}`,
    );
    const commodityRes: ICommodityFormResponse[] = await commodityReq.json();
    return commodityRes;
  } catch (error) {
    return error as Error;
  }
};

export const getLocateCommodityFromMockApi = async ({
  setIsLoading,
  setSubmitted,
}: LocateCommodityMockProps): Promise<ICommodityFormResponse[] | Error> => {
  setIsLoading(true);
  setSubmitted(false);

  try {
    const commodityReq = await fetch(
      `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/trade/commodity`,
    );
    const commodityRes = await commodityReq.json();
    return commodityRes;
  } catch (error) {
    return error as Error;
  }
};
