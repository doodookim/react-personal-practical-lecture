import styled from 'styled-components';
import React from 'react';
import LoginModal from 'components/common/LoginModal';
import JoinModal from 'components/common/JoinModal';

function Login() {
  return (
    <Container>
      <LoginModal />
      <JoinModal />
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

export default Login;
