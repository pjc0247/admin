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
  Container,
  Box,
} from '@material-ui/core';

import { IDataProvider } from 'framework/data-provider/IDataProvider';
import { useRemoteValue } from 'framework/util/useRemoteValue';
import { getBreifProps, getPropDisplayName } from 'framework/model/decorators';
import { PropRenderer } from 'framework/model/renderer';
import { canPerform, DataOperationKind } from 'framework/model/permission';
import { hasImplementation } from 'framework/data-provider';
import { LinkTo } from 'framework/component/wrap/LinkTo';
import { t } from 'framework/lang';
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
              {t('delete')}
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
              {t('create')}
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
                    <b>
                      {getPropDisplayName(model, x.name)}
                    </b>
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
                        <PropRenderer
                          value={x[p.name]}
                          type={p.type}
                        />
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
