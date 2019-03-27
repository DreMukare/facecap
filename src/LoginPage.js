import React from 'react';
import {
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
  return (
    <Form>
      <FormGroup>
        <Label for="lecturerID">Lecturer ID</Label>
        <Input
          type="text"
          name="lecturerID"
          id="lecturerID"
          placeholder="xxx-xxxx-xxx"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          type="text"
          name="password"
          id="password"
          placeholder="********"
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" name="recall" id="recall" />
          <FormText>Remember me</FormText>
        </Label>
      </FormGroup>
      <FormButton color="success">Login</FormButton>
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
