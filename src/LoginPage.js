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
import styled from 'styled-components';

const FormButton = styled(Button)`
  width: 8rem;
  margin-top: 1rem;
`;

function LoginForm() {
  const [formState, set] = React.useState({
    input: { loginID: '', password: '' },
    invalid: false
  });

  const setState = next => set(Object.assign({}, formState, next));

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ input: Object.assign({}, formState.input, { [name]: value }) });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/api/accounts', {
      method: 'POST',
      body: JSON.stringify(formState.input),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if ('token' in data) {
          window.location.assign('/home');
          return;
        }
        setState({ invalid: true });
      });
  };

  return (
    <Form>
      {formState.invalid && (
        <Alert color="danger">Invalid login or password!</Alert>
      )}
      <FormGroup>
        <Label for="loginID">Login ID</Label>
        <Input
          type="text"
          name="loginID"
          id="loginID"
          placeholder="xxx-xxx-xxxx"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="********"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="recall" id="recall" />
          <FormText>Remember me</FormText>
        </Label>
      </FormGroup>
      <FormButton type="submit" color="success" onClick={handleSubmit}>
        Login
      </FormButton>
    </Form>
  );
}

const CustomRow = styled(Row)`
  justify-content: center;
  margin-top: 4rem;
`;

const CustomCol = styled(Col)`
  border: 1px solid #ddd;
  padding: 1rem;
`;

function LoginPage() {
  return (
    <Container>
      <CustomRow>
        <CustomCol md="4">
          <h3>Login</h3>
          <LoginForm />
        </CustomCol>
      </CustomRow>
    </Container>
  );
}

export default LoginPage;
