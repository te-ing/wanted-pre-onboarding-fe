import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import GNB from '../components/GNB';
import Post from '../components/Post';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('/DUMMY.json');
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  return (
    <Container>
      <GNB />
      <PostContainer>
        {isLoading
          ? 'Loading...'
          : posts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
      </PostContainer>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  padding-top: 60px;
  justify-content: center;
`;

const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
`;
