import React, {Suspense} from 'react';
import routeConfig from '../route'
import {Switch, Route, Redirect} from 'react-router-dom';

class mainContent extends React.Component {
  constructor () {
    super();
    this.state = {
      collapsed: false,
    };
  }

  render () {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routeConfig.map((item) => {
            return (<Route exact={!item.children} path={item.path} component={item.component} key={item.path}></Route>)
          })}
          <Redirect to="/willLeave"></Redirect>
        </Switch>
      </Suspense>
    )
  }
}

export default mainContent;