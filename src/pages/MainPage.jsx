import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import GNB from '../components/GNB';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('/DUMMY.json');
        setPosts(response);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  console.log(posts);

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
