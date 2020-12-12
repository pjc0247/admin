import React from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TablePagination
} from '@material-ui/core';

const TableView = ({
  ...props
}) => {
  return (
    <Card>
      <Table>
        <TableHead>

        </TableHead>
        <TableBody>
          
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
