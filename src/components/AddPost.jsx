import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import posts from "../posts.json";

function AddPost({ onAdd }) {
  let i = posts.length + 1; // Set ID dynamically based on posts length

  const [note, setNote] = useState({
    id: i,
    title: "",
    content: "",
    comments: [],
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event, close) {
    event.preventDefault();
    
    onAdd(note);
    setNote({
      id: note.id + 1,
      title: "",
      content: "",
      comments: [],
    });

    close(); // Close the popup
  }

  return (
    <div className="addpost-button">
      <Popup
        trigger={<button className="addpost"></button>}
        modal
        contentStyle={{
          width: "600px",
          height: "360px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "black",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {(close) => (
          <form className="popup-form" onSubmit={(e) => submitNote(e, close)}>
            <h3>Add a New Post</h3>

            <input
              className="popup-input title-input"
              type="text"
              name="title"
              placeholder="Enter the title"
              onChange={handleChange}
              value={note.title}
              required
            />

            <textarea
              className="popup-input content-input"
              name="content"
              placeholder="Enter the content"
              onChange={handleChange}
              value={note.content}
              rows="7"
              required
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </Popup>
    </div>
  );
}

export default AddPost;
