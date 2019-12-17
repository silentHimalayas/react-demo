import React from 'react';

class caseOne extends React.Component {
  static getDerivedStateFromProps (next, pre) {
    console.log(next, pre, '>>>>>>>>>>>>>caseOne--------getDerivedStateFromProps~~~~~~~~');
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
    console.log('>>>>>>>>>>>>>caseOne------------- upDate');
    if (this.props.location.pathname !== prevProps.location.pathname) {
      //window.scrollTo(0,0);
    }
  }
  
  render () {
    console.log('>>>>>>>>>>caseOne-------------render')
    return (
      <div onClick={this.toHome}>
        <div>caseOne</div>
      </div>
    )
  }
  componentDidMount () {
    console.log('>>>>>>>>caseOne-------------mount')
  }
  toHome () {
    this.props.history.goBack();
  }
}

export default caseOne;