import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, imageUrl, caption }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="cmcodes"
          src="https://avatars2.githubusercontent.com/u/34341671?s=460&u=73e18d14ad731e271dcb5a16e215cc7cf626721b&v=4"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
