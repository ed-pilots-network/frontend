import React from 'react';

import { Table } from 'semantic-ui-react';
import {
  useTable, useSortBy, useFilters, useRowSelect, useColumnOrder, useExpanded,
} from 'react-table';

function RoutesTable({ columns, data }) {
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
      // initialState: { hiddenColumns },
    },
    useColumnOrder,
    useFilters,
    useSortBy,
    useExpanded,
    useRowSelect,
  );

  return (
    <Table sortable {...getTableProps()}>
      <Table.Header>
        {headerGroups.map((headerGroup) => (
          <Table.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Table.HeaderCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        ))}
      </Table.Header>

      <Table.Body>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Table.Cell {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </Table.Cell>
              ))}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default RoutesTable;
