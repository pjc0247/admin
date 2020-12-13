import React from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TablePagination,
  TableCell,
  TableRow,
  Button,
  LinearProgress,
  CircularProgress,
  Container,
  Box,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import IDataProvider from 'framework/data-provider/IDataProvider';
import { useRemoteValue } from 'framework/util/useRemoteValue';
import { getAllProps } from 'framework/model/decorators';
import { renderProp } from 'framework/model/renderer';
import { canPerform, DataOperationKind } from 'framework/model/permission';
import AppSpec from 'spec/App';

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
  const role = AppSpec.authProvider.role;
  const [data] = useRemoteValue(() => {
    return dataProvider.list(0, 100);
  }, [], []);

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        {canPerform(model, role, DataOperationKind.Create) && (
          <Link
            to={location => `${location.pathname}/create`}
          >
            <Button
              variant="contained"
              color="primary"
            >
              추가
            </Button>
          </Link>
        )}
      </Box>
      <Box mt={3}>
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
      </Box>
    </Container>
  );
};
export default TableView;
