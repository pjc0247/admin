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
import { getAllProps, getBreifProps } from 'framework/model/decorators';
import { renderProp } from 'framework/model/renderer';
import { canPerform, DataOperationKind } from 'framework/model/permission';
import { hasImplementation } from 'framework/data-provider';
import { LinkTo } from 'framework/component/wrap/LinkTo';
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
  const modelProps = getBreifProps(model);
  const role = AppSpec.authProvider.role;
  const [data] = useRemoteValue(() => {
    return dataProvider.list(0, 100);
  }, [], []);

  const shouldDisplay = (kind: DataOperationKind) => {
    return canPerform(model, role, kind)
      && hasImplementation(dataProvider, kind);
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        {shouldDisplay(DataOperationKind.Delete) && (
          <LinkTo
            to={location => `${location.pathname}/create`}
          >
            <Button
              variant="contained"
              color="secondary"
            >
              삭제
            </Button>
          </LinkTo>
        )}
        {shouldDisplay(DataOperationKind.Create) && (
          <LinkTo
            to={location => `${location.pathname}/create`}
          >
            <Button
              variant="contained"
              color="primary"
            >
              추가
            </Button>
          </LinkTo>
        )}
      </Box>
      <Box mt={3}>
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                {modelProps.map((x: any) => (
                  <TableCell>
                    {x.label || x.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((x: any) => (
                <LinkTo
                  to={location => ({ pathname: `${location.pathname}/edit`, state: { item: x }})}
                >
                  <TableRow>
                    {modelProps.map((p: any) => (
                      <TableCell>
                        {renderProp(x[p.name], p.type)}
                      </TableCell>
                    ))}
                  </TableRow>
                </LinkTo>
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
