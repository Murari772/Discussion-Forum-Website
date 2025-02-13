import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import posts from "../posts.json";

function AddPost({ onAdd }) {

    var i = 1;

    posts.map((post) => {
        i=i+1;
});
    console.log(i);

  const [note, setNote] = useState({
    id : i,
    title: "",
    content: "",
    comments: []
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {

    i = note.id+1;
    
    onAdd(note);
    setNote({
      id : i,   
      title: "",
      content: "",
      comments: []
    });
    

    event.preventDefault();
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
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
        }}
      >
        <form className="popup-form" onSubmit={submitNote}>
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
    rows="6"
    required
  />

  <button type="submit" className="submit-button">Submit</button>
</form>
      </Popup>
    </div>
  );
}

export default AddPost;
