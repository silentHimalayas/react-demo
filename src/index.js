import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, browserHistory} from 'react-router'
import {HashRouter, Switch, Route, NavLink, Redirect, withRouter} from 'react-router-dom';
import routeConfig from './route'
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
import willLeave from './views/willLeave';

const oddEvent = (match, location) => {
  if (!match) return false
  return match.url === location.pathName
}


const refCallback = node => {
  // console.log(node, '>>>>>node')
}
class RouterContaienr extends React.Component {
  render () {
    return (
      <div>
        <HashRouter>
          {routeConfig.map((item) => {
            return (<NavLink exact activeStyle={{
              fontWeight: "bold",
              color: "red"
            }} className="link" to={item.path}  key={item.path} innerRef={refCallback}>{item.path}</NavLink>)
          })}
          <Switch>
            {/* <Redirect from='/lifeCycle' to='/'></Redirect> */}
            {/* switch 命中的组件为第一个与路由匹配的组件，当路径为/aasd时，也会命中‘/’ App组件。 添加exact，表示只有当前路径与path完全匹配时才命中组件 */}
            {/* <Route exact path="/" component={App}></Route>
            <Route exact path="/willleave" component={willLeave}></Route> */}
            {routeConfig.map((item) => {
              return (<Route path={item.path} component={item.component} key={item.path}></Route>)
            })}
          </Switch>
          {/* <Route component={willLeave}></Route> */}
        </HashRouter>
        </div>
    )
  }
  
}
console.log(withRouter(RouterContaienr))
ReactDOM.render(<RouterContaienr/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
