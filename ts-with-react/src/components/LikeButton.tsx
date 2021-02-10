/*
 * @Description: LikeButton
 * @Date: 2021-02-08 16:41:02
 * @LastEditTime: 2021-02-08 17:24:41
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { useState, useEffect } from "react";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    document.title = `点击了 ${like}次`;
  });

  return (
    <>
      <span>点击</span>
      <button onClick={() => setLike(like + 1)}>{like}👍 </button>
      <hr />
      <span>开关</span>
      <button onClick={() => setOn(!on)}>{on ? " 🔒 " : " 🔓 "} </button>
    </>
  );
};

export default LikeButton;
