import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Post from "./Post";
import PostDetails from "./PostDetails";
import posts from "../posts.json";
import "reactjs-popup/dist/index.css"; 
import AddPost from "./AddPost";

export default function App() {

    const [data, setData] = React.useState([]);
    

    function addNote(newData){
      console.log(newData);
        setData(prevData => {
            return [...prevData, newData];
        })
    }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="postgrid">
              
              {posts.map((post) => (
                <Post id={post.id} title={post.title} text={post.content} key={post.id} />
                
              ))}
              {data.map((post) => (
                <Post id={post.id} title={post.title} text={post.content} key={post.id} />
              ))}
            </div>
          }
        />
        <Route path="/post/:id" element={<PostDetails addedData = {data}/>} />
      </Routes>
      
      <AddPost onAdd = {addNote}/>
    </Router>
  );
}
