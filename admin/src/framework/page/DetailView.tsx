import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { Formik } from 'formik';

import { getAllProps } from 'framework/model/decorators';
import { IDataProvider } from 'framework/data-provider/IDataProvider';
import { PropEditor } from 'framework/model/editor';
import { DataOperation } from 'framework/component/operation/DataOperation';
import { DataOperationKind } from 'framework/model/permission';
import { notEmpty, validate } from 'framework/model/validation';

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

  const onClickSubmit = async (values: any) => {
    await dataProvider.update(item.id, values);
    history.goBack();
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
                  isValid,
                  touched,
                  values
                }: any) => (
                  <>
                    <Box mt={3} mb={2}>
                      {modelProps.map((x: any) => (
                        <Box mb={2}>
                          <PropEditor
                            model={model}
                            prop={x.name}
                            type={x.type}
                            value={values[x.name]}
                            onChange={handleChange}
                          />
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
                          disabled={!isValid}
                          variant="contained"
                          color="primary"
                          role="button"
                          onClick={handleSubmit}
                        >
                          {isSubmitting ? (
                            <CircularProgress size={16} style={{ color: 'white' }} />
                          ) : (
                            '수정'
                          )}
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
