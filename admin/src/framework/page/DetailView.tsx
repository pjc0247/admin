import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';

import { getAllProps, getPropDisplayName } from 'framework/model/decorators';
import IDataProvider from 'framework/data-provider/IDataProvider';
import { renderPropEditor } from 'framework/model/editor';
import DataOperation from 'framework/component/operation/DataOperation';
import { DataOperationKind } from 'framework/model/permission';

type DetailViewState = {
  item: any;
};
type DetailViewProps = {
  model: string;
  dataProvider: IDataProvider;
};
const DetailView = ({
  model,
  dataProvider,
  ...props
}: DetailViewProps) => {
  const history = useHistory();
  const location = useLocation();
  const { item } = location.state as DetailViewState;
  const modelProps = getAllProps(model);

  const onClickSubmit = async () => {
    
  };
  const onClickDelete = async () => {
    await dataProvider.delete(item.id);
  };

  return (
    <Container>
      <Box>
        <Card>
          <CardContent>
            <Box>
              <Typography variant="h6">
                {model} 수정
              </Typography>
            </Box>
            <Box>
              <Formik
                initialValues={{
                  ...item,
                }}
                onSubmit={onClickSubmit}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }: any) => (
                  <>
                    <Box mt={3} mb={2}>
                      {modelProps.map((x: any) => (
                        <Box mb={2}>
                          {renderPropEditor(
                            getPropDisplayName(model, x.name),
                            x.type,
                            values[x.name],
                            handleChange,
                          )}
                        </Box>
                      ))}
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      style={{ gap: '15px '}}
                    >
                      <DataOperation
                        operationKind={DataOperationKind.Delete}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={onClickDelete}
                        >
                          삭제
                        </Button>
                      </DataOperation>
                      <DataOperation
                        operationKind={DataOperationKind.Update}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          수정
                        </Button>
                      </DataOperation>
                    </Box>
                  </>
                )}
              </Formik>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default DetailView;
