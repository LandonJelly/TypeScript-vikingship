/*
 * @Description: This file is made for
 * @Date: 2021-02-12 10:55:23
 * @LastEditTime: 2021-02-14 18:03:43
 * @Author: LeongD
 * @LastEditors: LeongD
 */
import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <hr />
      <Button disabled>Test h1 </Button>
      <Button
        autoFocus
        className={"custom"}
        onClick={(e) => {
          e.preventDefault();
        }}
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        Large Button
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger Button
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        Baidu.com
      </Button>
      <Button btnType={ButtonType.Link} href="baidu.com" disabled>
        Baidu.com
      </Button>

      <hr />

      <Menu>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
