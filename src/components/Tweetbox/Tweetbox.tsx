import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
// import firebase from "firebase";

const Tweetbox = () => {
  const avatarImgURL: string =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media%2Fimportance-profile-picture-career-01899604&psig=AOvVaw3fI8tHC_12dkdrdf7YTD0_&ust=1604845755676000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCf_rzS8OwCFQAAAAAdAAAAABAD";

  const [tweetInput, setTweetInput] = useState<string>("");
  const [tweetImage, setTweetImage] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // let timestamp = firebase.database.ServerValue.TIMESTAMP;
    const postQuery = db.collection("posts");

    postQuery.add({
      displayName: "naruto",
      username: "uzumaki",
      verified: true,
      text: tweetInput,
      image: tweetImage,
      avatar: avatarImgURL,
    });
    // console.log(timestamp);
    setTweetImage("");
    setTweetInput("");
  };

  // console.log(tweetInput);
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={avatarImgURL} />
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setTweetInput(e.target.value)
            }
            value={tweetInput}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setTweetImage(e.target.value)
          }
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={handleFormSubmit}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;
