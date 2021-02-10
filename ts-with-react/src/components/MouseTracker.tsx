/*
 * @Description: This file is made for
 * @Date: 2021-02-08 17:34:32
 * @LastEditTime: 2021-02-08 18:16:56
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { useState, useEffect } from "react";
import { updateSourceFile } from "typescript";

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Add Effect", position.x);
    const updateMouse = (e: MouseEvent) => {
      console.log("effect Call");
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("Remove Effect");
      document.removeEventListener("click", updateMouse);
    };
  });

  console.log("Before Render", position.x);
  return (
    <>
      <span>当前点击位置</span>
      <hr />
      <p>X :{position.x}</p>
      <p>Y :{position.y}</p>
    </>
  );
};

export default MouseTracker;
