import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
      ))}
    </div>
  );
}

export default CommentList;
