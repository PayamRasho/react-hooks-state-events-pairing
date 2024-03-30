import React from "react";

function VideoPlayer({
  title,
  embedUrl,
  views,
  createdAt,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote,
}) {
  return (
    <div className="video-player">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h2>{title}</h2>
      <p>
        Views: {views} | Uploaded: {createdAt}
      </p>
      <div>
        <button onClick={onUpvote}>👍 {upvotes}</button>
        <button onClick={onDownvote}>👎 {downvotes}</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
