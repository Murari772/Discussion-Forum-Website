import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return (
    <Link to={`/post/${props.id}`}>
      <div className="outer-post">
        <button className="post-button" key={props.id}>
          <h2 className="post-title">{props.title}</h2>
          <p className="post-text">{truncateText(props.text, 20)}</p>
          <div className="post-actions">
            <div className="comment-button">
              <span className="material-symbols-outlined comment-icon">
                chat_bubble
              </span>
            </div>
          </div>
        </button>
      </div>
    </Link>
  );
}

export default Post;

