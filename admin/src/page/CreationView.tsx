import React from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import IDataProvider from 'data-provider/IDataProvider';
import { getAllProps, getDefaultValues } from 'model/decorators';
import { renderPropEditor } from 'model/editor';

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
            {console.log(values)}
              {modelProps.map((x: any) => (
                renderPropEditor(x.name, x.type, values[x.name], handleChange)
              ))}
              <Button
                variant="contained"
                color="primary"
              >
                생성
              </Button>
            </>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
export default CreationView;
