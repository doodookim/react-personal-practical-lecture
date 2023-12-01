import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginModal({ onToggleJoin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const LoginHandler = (e) => {
    e.preventDefault();
    if (id.length < 4 || password.length < 4) {
      return alert('4자 이상 입력하세요.');
    }
  };
  return (
    <LoginForm>
      {/* <CloseButton>X</CloseButton> */}
      <LoginText>로그인</LoginText>
      <InputInfo
        minLength={4}
        maxLength={10}
        placeholder='아이디(4~10글자)'
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
      ></InputInfo>
      <InputInfo
        minLength={4}
        maxLength={15}
        type='password'
        placeholder='비밀번호(4~15글자)'
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></InputInfo>
      <ButtonContainer>
        <LoginButton onClick={LoginHandler}>로그인</LoginButton>
      </ButtonContainer>
      <SignUpText>
        회원이 아니신가요? &nbsp;
        <SignUpLink to='/join' onClick={onToggleJoin}>
          회원가입
        </SignUpLink>
      </SignUpText>
    </LoginForm>
  );
}

const LoginForm = styled.form`
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

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 15px;
//   cursor: pointer;
// `;

const LoginText = styled.div`
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

const LoginButton = styled.button`
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
