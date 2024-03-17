import MainStyle from '../Components/MainStyle';
import { Stack } from '@mui/material';

function Login() {
  return (
    <MainStyle>
      <Stack
        sx={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>Login Page</h1>
      </Stack>
    </MainStyle>
  );
}

export default Login;
