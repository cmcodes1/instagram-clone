import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <Avatar
        className="post__avatar"
        alt="cmcodes"
        src="https://avatars2.githubusercontent.com/u/34341671?s=460&u=73e18d14ad731e271dcb5a16e215cc7cf626721b&v=4"
      />
      <h3>username</h3>
      <img
        className="post__image"
        src="https://avatars2.githubusercontent.com/u/34341671?s=460&u=73e18d14ad731e271dcb5a16e215cc7cf626721b&v=4"
      />
      <h4 className="post__text">
        <strong>cmcodes </strong>Hello people of the world!
      </h4>
    </div>
  );
}

export default Post;
