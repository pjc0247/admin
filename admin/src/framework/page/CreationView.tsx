import React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { IDataProvider } from 'framework/data-provider/IDataProvider';
import { getAllProps, getDefaultValues, getModel } from 'framework/model/decorators';
import { PropEditor } from 'framework/model/editor';
import { t } from 'framework/lang';

const SAccordianSummary = styled(AccordionSummary)`
  background: linear-gradient(to bottom, rgb(245, 245, 245) 10%, rgb(255, 255, 255));
`;

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
          <SAccordianSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              variant="caption"
            >
              <b>{group.label}</b>
            </Typography>
          </SAccordianSummary>
          <AccordionDetails
            style={{ flexDirection: 'column' }}
          >
            {group.props.map((x: string) => modelProps.find(y => x === y.name)).map((x: any) => (
              <PropEditor
                model={model}
                prop={x.name}
                type={x.type}
                value={values[x.name]}
                onChange={handleChange}
              />
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
            <Box>
              <Typography variant="h6">
                새 {model} 추가
              </Typography>
            </Box>
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
                setFieldValue,
                isSubmitting,
                touched,
                values
              }) => (
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
                          <PropEditor
                            model={model}
                            prop={x.name}
                            type={x.type}
                            value={values[x.name]}
                            onChange={(e) => {
                              if (e?.nativeEvent instanceof Event)
                                handleChange(e);
                              else
                                setFieldValue(x.name, e);
                            }}
                          />
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
                      onClick={(e: any) => handleSubmit(e)}
                    >
                      {t('create')}
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
