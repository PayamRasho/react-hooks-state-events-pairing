import React, { useState } from "react";
import VideoPlayer from "./VedioPlayer";
import CommentList from "./CommentList";
import video from "../data/video";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <VideoPlayer
        title={video.title}
        embedUrl={video.embedUrl}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      {showComments && <CommentList comments={video.comments} />}
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
    </div>
  );
}

export default App;
