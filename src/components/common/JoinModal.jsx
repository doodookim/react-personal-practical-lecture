import React, { useState } from 'react';
import styled from 'styled-components';

export default function JoinModal({ onToggleLogin }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const joinHandler = () => {
    if (id.length < 4 || password.length < 4) {
      return alert('4자 이상 입력하세요.');
    } else if (nickname.length < 1) {
      return alert('닉네임은 1자 이상 입력하세요.');
    }
  };

  return (
    <JoinForm
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* <CloseButton>X</CloseButton> */}
      <JoinText>회원가입</JoinText>
      <InputInfo
        minLength={4}
        maxLength={10}
        type='text'
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
      <InputInfo
        minLength={1}
        maxLength={10}
        type='text'
        placeholder='닉네임(1~10글자)'
        value={nickname}
        onChange={(event) => {
          setNickname(event.target.value);
        }}
      ></InputInfo>

      <ButtonContainer>
        <JoinButton onClick={joinHandler}>회원가입</JoinButton>
      </ButtonContainer>
      <SignUpText>
        아이디가 있으신가요? &nbsp;
        <SignUpLink to='/join' onClick={onToggleLogin}>
          로그인
        </SignUpLink>
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

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   font-size: 15px;
//   cursor: pointer;
// `;

const JoinText = styled.div`
  height: 50px;
  /* margin-bottom: 30px; */
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
