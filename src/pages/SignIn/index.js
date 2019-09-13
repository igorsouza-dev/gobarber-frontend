import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <form>
        <input type="email" placeholder="Type in your e-mail" />
        <input placeholder="Type in your password" />
        <button type="submit">Login</button>
        <Link to="/register">
          Don&apos;t have an account?Click here to sign up.
        </Link>
      </form>
    </>
  );
}
