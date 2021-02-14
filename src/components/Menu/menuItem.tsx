/*
 * @Description: This file is made for
 * @Date: 2021-02-14 17:57:52
 * @LastEditTime: 2021-02-14 18:01:20
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import React from "react";
import classNames from "classnames";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classes = classNames("menu-item", className, {
    "is-disabled ": disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
