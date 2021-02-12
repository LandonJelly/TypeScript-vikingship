/*
 * @Description: This file is made for
 * @Date: 2021-02-12 10:55:23
 * @LastEditTime: 2021-02-12 18:16:44
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
