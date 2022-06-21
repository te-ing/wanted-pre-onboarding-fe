import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import GNB from '../components/GNB';
import Post from '../components/Post';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoading, setIsImageLoading] = useState(true);

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
      <Loading isImageLoading={isImageLoading} />
      <PostContainer isImageLoading={isImageLoading}>
        {isLoading
          ? 'Loading...'
          : posts.map((post, idx) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                  isLoading={posts.length - 1 === idx && setIsImageLoading}
                />
              );
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
  display: ${({ isImageLoading }) => (isImageLoading ? 'none' : 'flex')};
  flex-direction: column;
  gap: 60px;
  padding: 20px;
`;
const loadingTime = keyframes`
  from {
    width: 100px;
  }
  to {
    transform: scale(1)
  }
`;

const Loading = styled.div`
  display: ${({ isImageLoading }) => (!isImageLoading ? 'none' : 'flex')};
  width: 100%;
  height: 3px;
  background-color: coral;
  border-bottom: solid 1px lightgray;
  animation: ${loadingTime} 2s ease-out forwards infinite;
`;
