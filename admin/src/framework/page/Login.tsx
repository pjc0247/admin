import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Container, TextField } from '@material-ui/core';

type LoginProps = {

};
export const Login = ({
  ...props
}: LoginProps) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onClickLogin = async () => {

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
            <TextField
              fullWidth
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={onClickLogin}
            >
              로그인
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
