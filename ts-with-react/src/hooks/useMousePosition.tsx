/*
 * @Description: This file is made for
 * @Date: 2021-02-09 16:50:13
 * @LastEditTime: 2021-02-09 18:29:20
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { useState, useEffect } from "react";
import { updateSourceFile } from "typescript";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0   });

  useEffect(() => {
    console.log("Add Effect", position.x);
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMouse);
    return () => {
      console.log("Remove Effect", position.x);
      document.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return position;
};

export default useMousePosition;
