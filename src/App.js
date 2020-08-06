import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "cmcodes",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
      caption: " Hello people of the world!",
    },
    {
      username: "virtualvivek",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
      caption: " Hi! I am Vivek!",
    },
    {
      username: "tanaypratap",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg",
      caption: " Code!",
    },
  ]);

  return (
    <div className="App">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram logo"
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}

      {/* <Post
        username="cmcodes"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
        caption=" Hello people of the world!"
      />
      <Post
        username="virtualvivek"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
        caption=" Hi! I am Vivek!"
      />
      <Post
        username="tanaypratap"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/35/Neckertal_20150527-6384.jpg"
        caption=" Code!"
      /> */}
    </div>
  );
}

export default App;
