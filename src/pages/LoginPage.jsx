import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <Container>
      <LoginContainer>
        <Title>Instagram</Title>
        <InputContainer>
          <Input placeholder="전화번호, 사용자 이름 또는 이메일" />
          <Input placeholder="비밀번호" />
        </InputContainer>
        <Button>로그인</Button>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 600px;
  padding: 20px;
  border: solid 1px lightgray;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  line-height: 90px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  gap: 10px;
`;

const Input = styled.input`
  height: 40px;
  width: 300px;
  padding: 8px;
  border: solid 1px lightgray;
  border-radius: 4px;
  font-size: 16px;
  :focus {
    border: solid 1px #a9a9a9;
  }
  ::placeholder {
    color: #a9a9a9;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  border-radius: 8px;
  background-color: #0095f6;
  :hover {
    background-color: #0089e4;
  }
  :active {
    background-color: #027bcc;
  }
  :disabled {
    background-color: #b2dffc;
  }
`;
