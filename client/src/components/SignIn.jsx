import React from 'react';
import { Segment, Button, Divider, Menu, Form, Header, Container, Card, Grid } from 'semantic-ui-react';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    this.props.onSignIn(this.state.username, this.state.password);
  }

  onChange(e, { value }) {
    const name = e.target.name;
    
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Card raised centered>
        <Segment padded size='huge'>
          <Form onSubmit={this.onSignIn}>
            <Header as='h1'>Sign In</Header>
            <Form.Input label='username' name='username' value={this.state.username} onChange={this.onChange} autoComplete='username' placeholder='username' />
            <Form.Input type='password' label='password' name='password' value={this.state.password} onChange={this.onChange} autoComplete='current-password' placeholder='password' />
            <Form.Button primary type='submit'>Sign In</Form.Button>
          </Form>
        </Segment>
      </Card>
    );
  }
}

export default SignIn;