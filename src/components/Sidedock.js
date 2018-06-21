import React, { Component } from "react";
// import { Dock } from "react-dock";
// import ReactDrawer from 'react-drawer';
// import Drawer from 'react-motion-drawer';
import Drawer from "rc-drawer";
import { Menu } from "antd";
// import ListItems from './ListItems';

import "antd/lib/style";
import "antd/lib/menu/style";
import "rc-drawer/assets/index.css";
import "./assets/index.less";

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const Panel = Collapse.Panel;

class Sidedock extends Component {
  capitalizeFirstLetter = str => {
    str = str.split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  renderList = () => {
    return this.props.placesData.map(items => <li>{items.result.name}</li>);
  };

  render() {
    console.log("sidedock", this.props);

    return (
      <div className="splitpane-left">
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default Sidedock;
