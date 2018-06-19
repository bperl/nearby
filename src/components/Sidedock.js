import React, { Component } from 'react';
// import { Dock } from "react-dock";
// import ReactDrawer from 'react-drawer';
// import Drawer from 'react-motion-drawer';
import Drawer from 'rc-drawer';
import { Menu } from 'antd';
import ListItems from './ListItems';

import 'antd/lib/style';
import 'antd/lib/menu/style';
import 'rc-drawer/assets/index.css';
import './assets/index.less';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
// const Panel = Collapse.Panel;

class Sidedock extends Component {

    capitalizeFirstLetter = (str) => {
        str = str.split(" ")
        for(let i = 0; i < str.length; i++){
            str[i] = str[i][0].toUpperCase() + str[i].slice(1)
        }
        return str.join(" ")
    }

    renderList = () => {
        debugger
    }

    render() {
        console.log('sidedock', this.props)

        return (
            <div className="parent-demo">
                {/* <Badge count={this.props.count} showZero> */ }
                <Drawer getContainer={ null }>
                    <Menu
                        style={ { width: 500 } }
                        defaultSelectedKeys={ ['1'] }
                        defaultOpenKeys={ ['sub1'] }
                        mode="inline"
                    >

                        <div className="menuCount">
                            <h4>{this.capitalizeFirstLetter(`there are ${this.props.count} ${this.props.searchstr} found near you.`)}</h4>
                        </div>

                        <div>

                        </div>

                    </Menu>
                </Drawer>
                {/* </Badge> */ }
                {/* {this.renderList()} */}
            </div>
        )
    }
}

export default Sidedock;
