import React from 'react';
import { Segment, Button, Divider } from 'semantic-ui-react';

const Login = () => (
  <Segment padded>
    <Button href='/' primary fluid>Login</Button>
    <Divider horizontal>Or</Divider>
    <Button secondary fluid>Sign Up Now</Button>
    <Button href='/auth/facebook' secondary fluid>Sign In with Facebook</Button>
  </Segment>
);

export default Login;