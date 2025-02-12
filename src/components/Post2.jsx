import React from "react";
import { Link } from "react-router-dom";

function Post2(props) {
  return (
    <Link to={`/post/${props.id}`}>
      <div>
        <button className="post-button inner" key={props.id}>
          <h2 className="post-title">{props.title}</h2>
          <p className="post-text">{props.text}</p>
        </button>
      </div>
    </Link>
  );
}

export default Post2;
