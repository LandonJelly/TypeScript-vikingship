/*
 * @Description: LikeButton
 * @Date: 2021-02-08 16:41:02
 * @LastEditTime: 2021-02-08 16:50:09
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
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
