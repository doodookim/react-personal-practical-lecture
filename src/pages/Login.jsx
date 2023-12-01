import styled from 'styled-components';
import React, { useState } from 'react';
import LoginModal from 'components/common/LoginModal';
import JoinModal from 'components/common/JoinModal';

function Login() {
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

export default Login;
