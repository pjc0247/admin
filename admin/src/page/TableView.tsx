import React from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TablePagination,
  TableCell,
  TableRow,
} from '@material-ui/core';

import IDataProvider from 'data-provider/IDataProvider';
import { useRemoteValue } from 'util/useRemoteValue';
import { getAllProps } from 'model/decorators';
import { renderProp } from 'model/renderer';

type TableViewProps = {
  model: string;
  dataProvider: IDataProvider;
};
const TableView = ({
  model,
  dataProvider,
  ...props
}: TableViewProps) => {
  const modelProps = getAllProps(model);
  const [data] = useRemoteValue(() => {
    return dataProvider.list(0, 100);
  }, [], []);

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            {modelProps.map((x: any) => (
              <TableCell>
                {x.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((x: any) => (
            <TableRow>
              {modelProps.map((p: any) => (
                <TableCell>
                  {renderProp(x[p.name], p.type)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={20}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
        page={1}
        rowsPerPage={20}
        rowsPerPageOptions={[20]}
      />
    </Card>
  );
};
export default TableView;
