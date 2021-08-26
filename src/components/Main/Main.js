import React from "react";
import "./main.css";

export const Main = () => {
  return (
    <main>
      <div className="main-wrapper">
        <div className="main-container">
          <h2>About me</h2>
          <p>
            I am a front end developer from manchester. I like react and vue.
          </p>
        </div>
        <div className="main-container bg-primary">
          <h2>Technical skills</h2>
          <ul>
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
        </div>
        <div className="main-container">
          <h2>Diversity</h2>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </main>
  );
};
