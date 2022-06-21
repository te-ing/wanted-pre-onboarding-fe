import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { validateEmail, validatePassword } from '../utils/validateInput';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isValidId, setIsValidId] = useState(true);
  const [isValidPw, setIsValidPw] = useState(true);
  const idInput = useRef();
  const pwInput = useRef();
  const navigate = useNavigate();
  const disabledLogin =
    !idInput.current?.value ||
    !pwInput.current?.value ||
    !isValidId ||
    !isValidPw;

  const handleIdValue = () => {
    const id = idInput.current.value;
    validateEmail(id) ? setIsValidId(true) : setIsValidId(false);
  };
  const handlePwValue = () => {
    const password = pwInput.current.value;
    validatePassword(password) ? setIsValidPw(true) : setIsValidPw(false);
  };
  const submitLogin = () => {
    if (disabledLogin) return;
    localStorage.setItem('id', idInput.current.value);
    navigate('/');
  };

  return (
    <Container>
      <LoginContainer>
        <Title>Instagram</Title>
        <InputContainer
          onKeyDown={(e) =>
            e.code === 'Enter' && !disabledLogin && submitLogin()
          }
        >
          <Input
            ref={idInput}
            placeholder="이메일"
            onChange={handleIdValue}
            validate={isValidId}
          />
          <Input
            ref={pwInput}
            type="password"
            placeholder="비밀번호 (대문자, 숫자, 특수문자 포함 8자리 이상)"
            onChange={handlePwValue}
            validate={isValidPw}
          />
        </InputContainer>
        <Button onClick={submitLogin} disabled={disabledLogin}>
          로그인
        </Button>
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

const InputContainer = styled.form`
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
  border: solid 1px ${({ validate }) => (validate ? 'lightgray' : 'red')};
  border-radius: 4px;
  font-size: 16px;

  :focus {
    box-shadow: 1px 1px 1px 0 #a9a9a9;
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
  :focus {
    background-color: #0089e4;
  }
  :active {
    background-color: #027bcc;
  }
  :disabled {
    background-color: #b2dffc;
  }
`;
