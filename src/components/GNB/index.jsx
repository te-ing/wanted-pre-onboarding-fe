import React from 'react';
import styled from 'styled-components';
import { MEDIUM } from '../../constants/responsiveSize';
import { useNavigate } from 'react-router-dom';

const GNB = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('id');
    navigate('/login', { replace: true });
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo className="material-symbols-outlined">camera_enhance</Logo>
        <Input placeholder="🔍" />
        <NavContainer>
          <button className="material-symbols-outlined">send</button>
          <button className="material-symbols-outlined">favorite</button>
          <button onClick={handleLogout} className="material-symbols-outlined">
            logout
          </button>
        </NavContainer>
      </HeaderContainer>
    </Container>
  );
};

export default GNB;

const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 40px;
`;

const Input = styled.input`
  display: flex;
  width: 240px;
  height: 30px;
  padding: 10px;
  border: 1px solid lightgray;
  ::placeholder {
    filter: grayscale(100%);
    text-align: end;
  }

  @media only screen and (max-width: ${MEDIUM}px) {
    display: none;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: end;
  gap: 4px;
`;
