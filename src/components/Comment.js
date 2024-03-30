import React, { useState } from "react";

function Comment({ user, comment }) {
  const [upvotes, setUpvotes] = useState(0);
  const [downvotes, setDownvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div className="comment">
      <p>
        <strong>{user}</strong>: {comment}
      </p>
      <div>
        <button onClick={handleUpvote}>👍 {upvotes}</button>
        <button onClick={handleDownvote}>👎 {downvotes}</button>
      </div>
    </div>
  );
}

export default Comment;
