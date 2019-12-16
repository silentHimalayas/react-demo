import React from 'react';
import { Menu, Icon } from 'antd';
import routeConfig from '../route'
import {NavLink} from 'react-router-dom';
const { SubMenu } = Menu;

let key = 0;
class sideBar extends React.Component {
  constructor () {
    super();
    this.state = {
      collapsed: false,
    };
    if (key < 20) {
      key++
      console.log(this, '>>>>>111')
    }
   
  }

  handleClick = e => {
    console.log('click ', e);
  };

  genaratorMenuItem (routeList) {
    const memuContent = Array.isArray(routeList) && routeList.map(item => {
      let content;
      if (item.children) {
        content = (
          <SubMenu
            key={++key}
            title={
              <span>
                {item.icon && (<Icon type={item.icon} />)}
                <span>{item.name}</span>
              </span>
            }
          >
            {this.genaratorMenuItem(item.children)}
          </SubMenu>
        )
      } else {
        content = (
          <Menu.Item key={item.path}>
            <NavLink 
              exact
              to={item.path}>
              {item.name}
            </NavLink>
          </Menu.Item>
        )
      }
      return content
    })
    return memuContent || null
  }

  render () {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {this.genaratorMenuItem(routeConfig)}
      </Menu>
    )
  }
}

export default sideBar;