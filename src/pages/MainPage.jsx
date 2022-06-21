import React from 'react';
import styled from 'styled-components';
import GNB from '../components/GNB';

const MainPage = () => {
  return (
    <Container>
      <GNB />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  padding-top: 60px;
  justify-content: center;
  background-color: #fafafa;
`;
