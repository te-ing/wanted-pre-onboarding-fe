import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);
  const commentInput = useRef();

  const submitComment = (e) => {
    const comment = commentInput.current.value;
    if ((e.type === 'keypress' && e.code !== 'Enter') || !comment) return;
    e.preventDefault();
    localStorage.setItem(
      `comments${post.id}`,
      JSON.stringify(
        comments?.length
          ? [
              ...comments,
              {
                postId: post.id,
                commentId: Date.now(),
                author: localStorage.getItem('id'),
                comment,
              },
            ]
          : [
              {
                postId: post.id,
                commentId: Date.now(),
                author: localStorage.getItem('id'),
                comment,
              },
            ]
      )
    );
    setComments(JSON.parse(localStorage.getItem(`comments${post.id}`)));
    commentInput.current.value = '';
    return;
  };

  const deleteComment = (e) => {
    comments.length === 1
      ? localStorage.removeItem(`comments${post.id}`)
      : localStorage.setItem(
          `comments${post.id}`,
          JSON.stringify(
            comments.filter(({ commentId }) => commentId != e.target.id)
          )
        );
    setComments(JSON.parse(localStorage.getItem(`comments${post.id}`)));
  };

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem(`comments${post.id}`)));
  }, []);

  return (
    <CommentContainer>
      {comments?.length ? (
        comments.map(({ commentId, author, comment }) => {
          return (
            <CommentedContainer key={commentId}>
              <CommentAuthor>{author}</CommentAuthor>
              <CommentContent>{comment}</CommentContent>
              <button
                className="material-symbols-outlined"
                onClick={deleteComment}
                id={commentId}
              >
                delete_forever
              </button>
            </CommentedContainer>
          );
        })
      ) : (
        <CommentedContainer />
      )}
      <WriteCommentContainer>
        <CommentInput
          placeholder="댓글을 입력하세요"
          ref={commentInput}
          onKeyPress={submitComment}
        />
        <CommentInputButton onClick={submitComment}>
          <span className="material-symbols-outlined">format_quote</span>
        </CommentInputButton>
      </WriteCommentContainer>
    </CommentContainer>
  );
};

export default Comments;

const CommentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentedContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px 0 10px;
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
