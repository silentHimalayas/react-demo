import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, NavLink, Router, Prompt} from 'react-router-dom';
import routeConfig from '@/route'
import './index.less';
import * as serviceWorker from './serviceWorker';
import App from './App';
import willLeave from './views/willLeave/index'


       
  
// 引入全asdasda局组件12123123
import { SideBar } from '@/layoutComponents';
const MyContext = React.createContext(1);



class RouterContaienr extends React.Component {
  render () {
    return (
      <div className="app-main">
        <SideBar className="side-bar" />
        {/* <HashRouter >
          {routeConfig.map((item) => {
            return (<NavLink exact activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} className="link" to={item.path}  key={item.path} >{item.path}</NavLink>)
          })} */}
          {/* <Switch> */}
            {/* <Redirect from='/lifeCycle' to='/'></Redirect> */}
            {/* switch 命中的组件为第一个与路由匹配的组件，当路径为/aasd时，也会命中‘/’ App组件。 添加exact，表示只有当前路径与path完全匹配时才命中组件 */}
            {/* <Route  path="/" component={App}></Route>
            <Route  path="/willleave" component={willLeave}></Route> */}
            {/* {routeConfig.map((item) => {
              return (<Route path={item.path} component={item.component} key={item.path}></Route>)
            })} */}
          {/* </Switch> */}
          {/* <Prompt message="queding"></Prompt> */}
        {/* </HashRouter> */}
        <HashRouter>
        {routeConfig.map((item) => {
            return (<NavLink exact activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} className="link" to={item.path}  key={item.path} >{item.path}</NavLink>)
          })}
          <Switch>
            <Route  path="/"  component={App}></Route>
            <Route  path="/willleave/asd"  component={willLeave}></Route>
            {routeConfig.map((item) => {
              return (<Route path={item.path} component={item.component} key={item.path}></Route>)
            })}
          </Switch>
          
        </HashRouter>
      </div>
    )
  }
  
}
ReactDOM.render(<RouterContaienr/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
