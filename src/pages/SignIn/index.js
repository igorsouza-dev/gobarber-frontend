import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Type in your e-mail" />
        <Input name="password" placeholder="Type in your password" />
        <button type="submit">Login</button>
        <Link to="/register">
          Don&apos;t have an account?Click here to sign up.
        </Link>
      </Form>
    </>
  );
}
