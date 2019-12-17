import React from 'react';
import {Route} from 'react-router-dom';
import loadable from '@loadable/component'
const caseOne = loadable(() => import('./caseOne'))

class nestedRouter extends React.Component {
  static getDerivedStateFromProps (next, pre) {
    let {history} = next;
    return {
      history
    };
  }
  constructor () {
    super();
    this.state = {
      type: 1,
      nun: 2
    }
    this.toHome = this.toHome.bind(this);
  }
  componentDidUpdate (prevProps) {
    console.log('>>>>>>>>>>>>>nestedRouter------------- update');
  }
  
  render () {
    console.log(this, '>>>>>>>>>nestedRouter-------------render');
    
    return (
      <div onClick={this.toHome}>
        <div>nestedRouter</div>
        <Route path={`${this.props.match.url}/caseOne`} component={caseOne}></Route>
      </div>
    )
  }
  componentDidMount () {
    console.log('>>>>>>>>nestedRouter-----------mount')
  }
  toHome () {
    this.props.history.goBack();
  }
}

export default nestedRouter;