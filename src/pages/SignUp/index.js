import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
  name: Yup.string().required(),
});
export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Type in your name" />
        <Input name="email" type="email" placeholder="Type in your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Type in your password"
        />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account? Click here to sign in.</Link>
      </Form>
    </>
  );
}
