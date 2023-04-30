import React, { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import API from '../common';
import RoutesTable from '../components/RoutesTable';

function RouteFinder() {
  const [includeFC, setIncludeFC] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  const [routeData, setRouteData] = useState([]);

  const { stations } = useSelector((state) => state.stations);
  const stationsOptions = stations
    .filter((station) => (includeFC ? station : station.station_type !== 'FleetCarrier'))
    .map((station) => ({ key: station.id, value: station.id, text: `${station.station_name}[${station.system_name}]` }));

  const handleSubmit = async () => {
    const result = await API.post('find_route', {
      route_type: 'single', // Hardcode
      referenceStation: selectedStation,
      radius: 10, // Actually this is some 'coordinates' distance, need to convert to Ly first
    });

    const { data: profit } = result;
    const tableData = Object.entries(profit).map(([commodityName, commodityData]) => (
      {
        commodity: commodityName,
        from: commodityData.buy,
        to: commodityData.sell,
        profit: commodityData.profit,
      }
    ));
    setRouteData(tableData);
  };

  // FIXME Delete
  const columns = React.useMemo(
    () => [
      {
        Header: 'Commodity name',
        accessor: 'commodity', // accessor is the "key" in the data
      },
      {
        Header: 'Station to buy',
        accessor: 'from',
      },
      {
        Header: 'Station to sell',
        accessor: 'to',
      },
      {
        Header: 'Profit',
        accessor: 'profit',
      },
    ],
    [],
  );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group inline>
          <Form.Field
            control={Checkbox}
            onChange={(e, data) => setIncludeFC(data.checked)}
            checked={includeFC}
            label="Include Fleet Carriers"
          />
        </Form.Group>
        <Form.Group width="equal">
          <Form.Select
            fluid
            search
            label="Starting system"
            options={stationsOptions}
            value={selectedStation || ''}
            onChange={(e, { value }) => setSelectedStation(value)}
          />
        </Form.Group>
        <Form.Field
          label="Test"
        />
        <Form.Button content="Go!" />
      </Form>
      <RoutesTable columns={columns} data={routeData} />
    </div>
  );
}

export default RouteFinder;
