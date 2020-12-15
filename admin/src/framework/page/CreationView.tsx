import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import IDataProvider from 'framework/data-provider/IDataProvider';
import { getAllProps, getDefaultValues, getModel } from 'framework/model/decorators';
import { renderPropEditor } from 'framework/model/editor';

type GroupedEditorProps = {
  model: string;
  groups: any[];
  values: any;
  handleChange: any;
};
const GroupedEditor = ({
  model,
  groups,
  values,
  handleChange,
  ...props
}: GroupedEditorProps) => {
  const modelProps = getAllProps(model);

  return (
    <>
      {groups.map(group => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              variant="caption"
            >
              <b>{group.label}</b>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {group.props.map((x: string) => modelProps.find(y => x === y.name)).map((x: any) => (
              <Box mb={2}>
                {renderPropEditor(
                  x.label || x.name,
                  x.type,
                  values[x.name],
                  handleChange,
                )}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

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
  const groups = getModel(model).groups;

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
                    {!!groups && (
                      <GroupedEditor
                        model={model}
                        groups={groups}
                        values={values}
                        handleChange={handleChange}
                      />
                    )}
                    {!groups && (
                      modelProps.map((x: any) => (
                        <Box mb={2}>
                          {renderPropEditor(
                            x.label || x.name,
                            x.type,
                            values[x.name],
                            handleChange,
                          )}
                        </Box>
                      ))
                    )}
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
