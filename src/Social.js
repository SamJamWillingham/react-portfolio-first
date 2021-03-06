import React from "react";
import "./App.css";

export default function Social() {
  return (
    <div className="Social">
      <a
        href="https://www.linkedin.com/in/samantha-willingham-79576a1a8/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="linked-in">linkedin</button>
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01f079375f21581fb6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="upWork">UpWork</button>
      </a>
      <a
        href="https://github.com/SamJamWillingham"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="gitHub">github</button>
      </a>
    </div>
  );
}
