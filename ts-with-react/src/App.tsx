/*
 * @Description: This file is made for
 * @Date: 2021-02-08 14:16:29
 * @LastEditTime: 2021-02-08 16:52:01
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import React from "react";
import logo from "./logo.svg";
import Hello from "./components/Hello";
import LikeButton from "./components/LikeButton";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Hello message={"msg String"} />
        <LikeButton />
      </header>
    </div>
  );
}

export default App;
