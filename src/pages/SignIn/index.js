import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
});

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Type in your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Type in your password"
        />
        <button type="submit">Login</button>
        <Link to="/register">
          Don&apos;t have an account?Click here to sign up.
        </Link>
      </Form>
    </>
  );
}
