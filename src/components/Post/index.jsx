import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Comments from './Comments';

const Post = ({ post }) => {
  const { author, title, image } = post;

  return (
    <Container>
      <AuthorContainer>
        <span className="material-symbols-outlined">account_circle</span>
        <Author>{author}</Author>
      </AuthorContainer>
      <Title>{title}</Title>
      <ImageContainer>
        <PostImage src={image} />
      </ImageContainer>
      <Comments post={post} />
    </Container>
  );
};

export default Post;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  border: 1px solid lightgray;
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
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

const CommentAuthor = styled.span`
  font-weight: 600;
`;

const CommentContent = styled.p`
  padding-left: 5px;
  border-left: 2px solid lightgray;
  line-height: 1.2;
`;

const WriteCommentContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px 20px 20px;
  gap: 10px;
`;

const CommentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  resize: none;
`;

const CommentInputButton = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 50%;
`;
