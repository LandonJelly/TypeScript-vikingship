/*
 * @Description: Hello Demo
 * @Date: 2021-02-08 14:47:07
 * @LastEditTime: 2021-02-08 16:41:26
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import React, { Component } from "react";

interface IProps {
  message: string;
}

const Hello: React.FC<IProps> = (props: IProps) => {
  return <div> Function Hello {props.message}</div>;
};

Hello.defaultProps = {
  message: "Default Message",
};

export default Hello;
