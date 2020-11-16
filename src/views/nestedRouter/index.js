import React from 'react';
import {Route} from 'react-router-dom';
import loadable from '@loadable/component'
import {Theme} from '@/context';
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
    this.divDom = React.createRef();
    console.log(this.divDom, '>>>>>>>>>devDom');
    this.toHome = this.toHome.bind(this);
  }
  componentDidUpdate (prevProps) {
    console.log('>>>>>>>>>>>>>nestedRouter------------- update');
  }
  
  render () {
    console.log(this, '>>>>>>>>>nestedRouter-------------render');
    
    return (
      <Theme.Consumer>
        {({name}) => (
          <div onClick={this.toHome}>
            <div className="div" ref={this.divDom}>22222</div>
            <span className="span" ref={this.divDom}>11111</span>
            <div>nestedRouter{this.state.type}{name}</div>
            <Route path={`${this.props.match.url}/caseOne`} component={caseOne}></Route>
          </div>
        )}
      </Theme.Consumer>
      
    )
  }
  componentDidMount () {
    console.log('>>>>>>>>nestedRouter-----------mount')
  }
  toHome () {
    this.setState({
      type: 2
    })
    console.log(this.state.type, this.divDom, '>>>>>>')
    // this.props.history.goBack();
  }
}

export default nestedRouter;