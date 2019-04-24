import React from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Row
} from 'reactstrap';

function useInput(cfg) {
  const [value, setValue] = React.useState(() => cfg.defaultValue || '');
  const onChange = React.useCallback(e => setValue(e.currentTarget.value));
  return { value, props: { value, onChange } };
}

function LoginForm() {
  const loginID = useInput({});
  const password = useInput({});
  const [failedLogin, setFailedLogin] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/accounts', {
      method: 'POST',
      body: JSON.stringify({
        loginID: loginID.value,
        password: password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if ('token' in data) {
          sessionStorage.setItem('token', data.token);
          window.location.assign('/home/dashboard');
          return;
        }
        setFailedLogin(true);
      });
  };

  return (
    <Form>
      {failedLogin && <Alert color="danger">Invalid login or password!</Alert>}
      <FormGroup>
        <Label for="loginID">Login ID</Label>
        <Input
          type="text"
          name="loginID"
          id="loginID"
          placeholder="xxx-xxx-xxxx"
          {...loginID.props}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="********"
          {...password.props}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="recall" id="recall" />
          <FormText>Remember me</FormText>
        </Label>
      </FormGroup>
      <Button
        type="submit"
        color="success"
        onClick={handleSubmit}
        className="w-50 mt-2"
      >
        Login
      </Button>
    </Form>
  );
}

function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md="4" className="border p-3">
          <h3>Login</h3>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
