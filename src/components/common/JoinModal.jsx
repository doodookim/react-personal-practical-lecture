import React from 'react';
import styled from 'styled-components';

export default function JoinModal({ onClose, onToggleLogin }) {
  const LoginModalHandler = () => {
    onClose();
  };
  return (
    <JoinForm>
      <CloseButton>X</CloseButton>
      <JoinText>회원가입</JoinText>
      <InputInfo placeholder='아이디(4~10글자)'></InputInfo>
      <InputInfo type='password' placeholder='비밀번호(4~15글자)'></InputInfo>
      <InputInfo placeholder='닉네임(1~10글자)'></InputInfo>

      <ButtonContainer>
        <JoinButton>회원가입</JoinButton>
      </ButtonContainer>
      <SignUpText>
        아이디가 있으신가요? &nbsp;<SignUpLink to='/join'>로그인</SignUpLink>
      </SignUpText>
    </JoinForm>
  );
}

const JoinForm = styled.form`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background: #92c0f080;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const JoinText = styled.div`
  height: 50px;
  margin-bottom: 20px;
  font-size: 30px;
  text-align: center;
`;

const InputInfo = styled.input`
  width: 300px;
  height: 50px;
  margin: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  transition: border-bottom 0.3s ease;

  &:focus {
    border-bottom: 2px solid #1eb523;
  }
`;

const ButtonContainer = styled.div`
  width: 300px;
  margin: 10px;
`;

const JoinButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const SignUpText = styled.div`
  margin-top: 10px;
  color: #888787;
`;

const SignUpLink = styled.a`
  color: #666;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
