import React from "react";
import { useParams } from "react-router-dom";
import Post2 from "./Post2";
import postsData from "../posts.json";

function PostDetails(props) {
  const { id } = useParams();

  // Initialize state from the JSON data
  const [allPosts, setAllPosts] = React.useState(postsData);
  const [comment, setComment] = React.useState("");

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit() {
    if (comment.trim()) {
      setAllPosts((prevPosts) => {
        const updatedPosts = prevPosts.map((post) =>
          post.id === Number(id)
            ? { ...post, comments: [...(post.comments || []), comment] }
            : post
        );
  
        // If post is from props.addedData, update a copy instead of mutating props
        if (!updatedPosts.find((post) => post.id === Number(id))) {
          const postFromProps = props.addedData.find((post) => post.id === Number(id));
          if (postFromProps) {
            const updatedPost = { ...postFromProps, comments: [...(postFromProps.comments || []), comment] };
            return [...updatedPosts, updatedPost]; // Return a new array
          }
        }
  
        return updatedPosts;
      });
  
      setComment("");
    }
  }
  

  const targetPost = allPosts.find((post) => post.id === Number(id)) || 
                   props.addedData.find((post) => post.id === Number(id));

  return (
    <div className="newpage">
      <Post2 id={id} title={targetPost.title} text={targetPost.content} />
      <div className="comment-section">
        <h3>Comments</h3>

        <div className="comment-input-wrapper">
            <div className = "comment-action">
          <input
            className="comment-input"
            type="text"
            placeholder="Add your comment here..."
            onChange={handleChange}
            value={comment}
          />

          
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          </div>

          <ul>
            {targetPost.comments &&
              targetPost.comments.map((cmt, index) => (
                <li key={index}>{cmt}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
