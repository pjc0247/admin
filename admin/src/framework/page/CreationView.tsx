import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import IDataProvider from 'framework/data-provider/IDataProvider';
import { getAllProps, getDefaultValues } from 'framework/model/decorators';
import { renderPropEditor } from 'framework/model/editor';

type CreationViewProps = {
  model: string;
  dataProvider: IDataProvider;
};
const CreationView = ({
  model,
  dataProvider,
  ...props
}: CreationViewProps) => {
  const history = useHistory();
  const modelProps = getAllProps(model);

  const onClickSubmit = async (values: any) => {
    await dataProvider.create(values);
    history.goBack();
  };

  return (
    <Container>
      <Box>
        <Card>
          <CardContent>
            <Formik
              initialValues={{
                ...getDefaultValues(model),
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
                          x.label || x.name,
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
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      생성
                    </Button>
                  </Box>
                </>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
export default CreationView;
