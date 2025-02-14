import React from "react";
import { useParams } from "react-router-dom";
import Post2 from "./Post2";
import postsData from "../posts.json";

function PostDetails(props) {
  const { id } = useParams();

  
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
  
        
        if (!updatedPosts.find((post) => post.id === Number(id))) {
          const postFromProps = props.addedData.find((post) => post.id === Number(id));
          if (postFromProps) {
            const updatedPost = { ...postFromProps, comments: [...(postFromProps.comments || []), comment] };
            return [...updatedPosts, updatedPost];
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

          <div className="comments">
            {targetPost.comments &&
              [...targetPost.comments].reverse().map((cmt, index) => (
                <div className="comment-box" key={index}>
                  <p className="comment-text">{cmt}</p>
                </div>
              ))}
          </div>


        </div>
      </div>
    </div>
  );
}

export default PostDetails;
