import React, { useEffect, useState } from 'react';
import { ICommodityFormResponse } from '@/types/commodity';
import { Spinner } from '@chakra-ui/react';

const ExampleResponse: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [example, setExample] = useState<ICommodityFormResponse[]>([]);
  const [fetchError, setFetchError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_MOCK_API_URL}/api/v1/trade/commodity`,
          {
            cache: 'no-store',
          },
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setExample(data);
      } catch (error) {
        setFetchError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderExampleData = () =>
    example.map((commodity, index) => (
      <div key={index}>
        <p>{commodity.commodityDisplayName}</p>
        <p>{commodity.sellPrice}</p>
        <p>{commodity.supply}</p>
        <p>{commodity.systemName}</p>
        <p>{commodity.station.name}</p>
        <p>{commodity.distance}</p>
        <p>{commodity.pricesUpdatedAt}</p>
      </div>
    ));

  return (
    <>
      {loading && <Spinner />}
      {fetchError && <p>error fetching mock data</p>}
      {example.length === 0 && <p>no data</p>}
      {example.length > 0 && renderExampleData()}
    </>
  );
};

export default ExampleResponse;
