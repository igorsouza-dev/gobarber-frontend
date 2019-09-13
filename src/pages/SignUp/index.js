import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Type in your name" />
        <Input name="email" type="email" placeholder="Type in your e-mail" />
        <Input name="password" placeholder="Type in your password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account? Click here to sign in.</Link>
      </Form>
    </>
  );
}
