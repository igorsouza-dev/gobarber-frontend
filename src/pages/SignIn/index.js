import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export default function SignIn() {
  function handleSubmit(data) {}
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <Form schema={schema} onSubmit={handleSubmit}>
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
