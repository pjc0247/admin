import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Container, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { t } from 'framework/lang';
import AppSpec from 'spec/App';

type LoginProps = {

};
export const Login = ({
  ...props
}: LoginProps) => {
  const history = useHistory();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = async () => {
    await AppSpec.authProvider.login(id, password);
    history.push('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Box>
              <Typography variant="h6">
                {t('please_log_in')}
              </Typography>
            </Box>
            <Box mb={3} mt={2}>
              <TextField
                fullWidth
                label="아이디"
                margin="normal"
                variant="outlined"
                size="small"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <TextField
                fullWidth
                label="비밀번호"
                margin="normal"
                variant="outlined"
                type="password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={onClickLogin}
              >
                로그인
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
