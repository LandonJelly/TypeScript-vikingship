/*
 * @Description: This file is made for
 * @Date: 2021-02-08 14:16:29
 * @LastEditTime: 2021-02-09 17:40:34
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import React from "react";
import logo from "./logo.svg";
import Hello from "./components/Hello";
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";
import useMousePosition from "./hooks/useMousePosition";
import "./App.css";

const App: React.FC = () => {
  const positions = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello message={"msg String"} />
        <LikeButton />
        {/* <MouseTracker /> */}
        <p>X :{positions.x}</p>
        <p>Y :{positions.y}</p>
      </header>
    </div>
  );
};

export default App;
