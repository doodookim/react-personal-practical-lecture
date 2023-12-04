import styled from 'styled-components';
import React, { useState } from 'react';
import LoginModal from 'components/common/LoginModal';
import JoinModal from 'components/common/JoinModal';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/modules/api';
import { setLogin } from 'redux/modules/authSlice';
import { setError } from 'redux/modules/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = async () => {
    try {
      const userData = { id, password };
      const response = await loginUser(userData);
      if (response.success) {
        dispatch(
          setLogin({ accessToken: response.accessToken, user: response })
        );
        localStorage.setItem('accessToken', response.accessToken);
      } else {
        dispatch(setError(response.message));
      }
    } catch (error) {
      console.error('로그인에러', error);
    }
  };

  const [loginModalOpen, setLoginModalOpen] = useState(true);
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalOpen(true);
    setJoinModalOpen(false);
  };

  const toggleJoinModal = () => {
    setLoginModalOpen(false);
    setJoinModalOpen(true);
  };

  return (
    <Container>
      {loginModalOpen && <LoginModal onToggleJoin={toggleJoinModal} />}
      {joinModalOpen && <JoinModal onToggleLogin={toggleLoginModal} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7bbbb2;
`;
