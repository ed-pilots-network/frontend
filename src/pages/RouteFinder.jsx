import React, { useState, useEffect } from 'react';
import {
  Button, Checkbox, Form, Message,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import API from '../common';

function RouteFinder(props) {
  const options1 = [
    { key: 'param1', value: 'value1', text: 'Value 1' },
    { key: 'param2', value: 'value2', text: 'Value 2' },
    { key: 'param3', value: 'value3', text: 'Value 3' },
  ];

  const options2 = [
    { key: 'param2_1', value: 'value2_1', text: 'Second Value 1' },
    { key: 'param2_2', value: 'value2_2', text: 'Second Value 2' },
    { key: 'param2_3', value: 'value2_3', text: 'Second Value 3' },
  ];

  const [includeFC, setIncludeFC] = useState(false);
  const [selectedStation, setSelectedStation] = useState(null);

  const [rawData, setRawData] = useState(null);

  const { stations } = useSelector((state) => state.stations);
  const stationsOptions = stations
    .filter((station) => (includeFC ? station : station.station_type !== 'FleetCarrier'))
    .map((station) => ({ key: station.id, value: station.id, text: `${station.station_name}[${station.system_name}]` }));

  const handleSubmit = async () => {
    const profits = await API.post('find_route', {
      route_type: 'single', // Hardcode
      referenceStation: selectedStation,
      radius: 10, // Actually this is some 'coordinates' distance, need to convert to Ly first
    });
    setRawData(profits);
  };

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
          <Form.Select fluid search label="Option2" options={options2} />
        </Form.Group>
        <Form.Field
          label="Test"
        />
        <Form.Button content="Go!" />
      </Form>
      <div><pre>{JSON.stringify(rawData, null, 2)}</pre></div>
    </div>
  );
}

export default RouteFinder;
