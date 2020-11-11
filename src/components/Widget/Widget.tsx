import React from "react";
import "./Widget.css";
import SearchIcon from "@material-ui/icons/Search";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon className="widget_searchIcon" />
        <input placeholder="Search Twitter" />
      </div>
      <div className="widget__container">
        <h2>What's happening</h2>
      </div>
    </div>
  );
};

export default Widget;
/* <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.0.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.0.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script> */
