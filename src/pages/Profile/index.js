import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Type in your email" />
        <Input name="name" placeholder="Type in your name" />
        <hr />
        <Input
          name="password"
          type="oldPassword"
          placeholder="Your current password"
        />
        <Input
          name="password"
          type="password"
          placeholder="Your new password"
        />
        <Input
          name="password"
          type="confirmPassword"
          placeholder="Confirm the new password"
        />

        <button type="submit">Update profile</button>
      </Form>
      <button type="button">Logout from GoBarber</button>
    </Container>
  );
}
