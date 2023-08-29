import React, { useState } from 'react';

import { VStack } from '@chakra-ui/react';
import layoutConfig from '@/app/_config/layout';
import { ICommodityFormResponse } from '@/app/_types/commodity';
import { compareNumbers, legendItems } from './helpers';
import { FormResponseHeading, GridHeadings, GridBodyItem } from './components';
import GetColor from '@/app/_hooks/colorSelector';

interface ICommodityFormResponseProps {
  commodityResponse: ICommodityFormResponse[];
  isBuying: boolean;
}

const CommodityFormResponse: React.FC<ICommodityFormResponseProps> = ({
  commodityResponse,
  isBuying,
}) => {
  const [filter, setFilter] = useState(
    'distance' as keyof ICommodityFormResponse,
  );
  const [ascending, setAscending] = useState(true);

  return (
    <VStack
      maxWidth={layoutConfig.maxWidth}
      width="100%"
      marginX="auto"
      opacity={0.9}
      borderWidth="2px"
      borderRadius="9px"
      borderColor={GetColor('border')}
      bg={GetColor('accent-bg')}
      padding="1rem"
    >
      <FormResponseHeading
        commodityResponse={commodityResponse}
        legendItems={legendItems}
      />
      <GridHeadings
        filter={filter}
        isBuying={isBuying}
        setFilter={setFilter}
        ascending={ascending}
        setAscending={setAscending}
      />
      {commodityResponse.length > 0 &&
        commodityResponse
          .sort((a: ICommodityFormResponse, b: ICommodityFormResponse) =>
            compareNumbers(
              a[filter] as number,
              b[filter] as number,
              filter,
              ascending,
            ),
          )
          .map((commodity, index) => (
            <GridBodyItem
              key={index}
              commodity={commodity}
              isBuying={isBuying}
            />
          ))}
    </VStack>
  );
};

export default CommodityFormResponse;
