import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" className="src" />
      <form>
        <input placeholder="Type in your name" />
        <input type="email" placeholder="Type in your e-mail" />
        <input placeholder="Type in your password" />
        <button type="submit">Create Account</button>
        <Link to="/">Already have an account? Click here to sign in.</Link>
      </form>
    </>
  );
}
