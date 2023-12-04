import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { registerUser } from 'redux/modules/api';
import { setError } from 'redux/modules/userSlice';

export default function Join() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const JoinHandler = async () => {
    try {
      const userData = { id, password, nickname };
      const response = await registerUser(userData);

      if (response.success) {
      } else {
        dispatch(setError(response.message));
      }
    } catch (error) {
      console.error('로그인에러', error);
    }
  };

  return <div>Join</div>;
}
