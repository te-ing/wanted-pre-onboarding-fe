import React from 'react';
import styled from 'styled-components';
import { MEDIUM } from '../../constants/responsiveSize';
import Comments from './Comments';

const Post = ({ post, isLoading }) => {
  const { author, title, image } = post;

  return (
    <Container>
      <AuthorContainer>
        <span className="material-symbols-outlined">account_circle</span>
        <Author>{author}</Author>
      </AuthorContainer>
      <Title>{title}</Title>
      <ImageContainer>
        <PostImage src={image} onLoad={() => isLoading && isLoading(false)} />
      </ImageContainer>
      <Comments post={post} />
    </Container>
  );
};

export default Post;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 50vw;
  max-width: 800px;
  background-color: white;
  border: 1px solid lightgray;
  @media only screen and (max-width: ${MEDIUM}px) {
    width: 80vw;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid lightgray;
`;

const Author = styled.span``;

const Title = styled.span`
  padding: 10px 10px 0 10px;
  font-weight: 600;
  background-color: coral;
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 20px 0;
  min-height: 400px;
  background-color: coral;
  @media only screen and (max-width: ${MEDIUM}px) {
    min-height: 200px;
    height: 100vw;
    max-height: 400px;
  }
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;
