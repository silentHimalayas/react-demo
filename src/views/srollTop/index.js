import loadable from '@loadable/component'
import React from 'react';
// import Willleave from '../willLeave/index';
import './index.css';
const Willleave = loadable(() => import('../willLeave/index'))

class scrollComp extends React.Component {
  static getDerivedStateFromProps (next, pre) {
    console.log(next, pre, 'scroll--------getDerivedStateFromProps~~~~~~~~');
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
    console.log('>>>>>>>>>>>>>scroll------------- comp');
    if (this.props.location.pathname !== prevProps.location.pathname) {
      //window.scrollTo(0,0);
    }
  }
  renderWillLeave () {
    return (<will-leave />)
  }
  render () {
    console.log(this.props, '>>>>>>>>>scroll-------------this props');
    let {type} = this.state;
    
    return (
      <div className='sroll' onClick={this.toHome}>
        <div>hahahahaha</div>
        <Willleave  type={type}/>
      </div>
    )
  }
  componentDidMount (a) {
    const dom = (<div diyAttr="hahaha"></div>)
    console.log(dom, '>>>>>>>dom');
    // setTimeout(() => {
    //   this.setState({nun: 3})
    // }, 3000);
  }
  toHome () {
    this.props.history.goBack();
  }
}

export default scrollComp;