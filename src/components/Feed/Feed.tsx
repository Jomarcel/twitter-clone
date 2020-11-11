import React, { useEffect, useState } from "react";
import "./Feed.css";
import Tweetbox from "../Tweetbox/Tweetbox";
import Post from "../Post/Post";
import db from "../../firebase";

interface IProps {
  displayName?: string;
  username?: string;
  verified?: boolean;
  text?: string;
  image?: string;
  avatar?: string;
}

const Feed = () => {
  const [post, setPost] = useState<IProps[]>([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  console.log(post);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* Tweetbox */}
      <Tweetbox />

      {post.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
};

export default Feed;
