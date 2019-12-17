import React from 'react';
import {Theme} from '../../context'

 class willLeave extends React.Component {
  // static getDerivedStateFromProps (next, pre) {
  //   console.log(next, pre, 'willLeave--------getDerivedStateFromProps~~~~~~~~');
  //   let {history} = next;
  //   return {
  //     history
  //   };
  // }

  static contextType = Theme

  constructor () {
    super();
    this.state = {
      self: 1
    }
    this.toHome = this.toHome.bind(this);
    console.log(this.state, 'willLeave--------constructor~~~~~~~~');
  }

  render () {
    console.log(this.props, this.state, '>>>>>>>>>willLeave--------this props');
    return (
      <div onClick={this.toHome}>willLeave{this.context}</div>
    )
  }

  componentDidUpdate (a) {
    console.log(a, '>>>>>>>>>willLeave--------componentDidUpdate')
  }

  componentDidMount (a) {
    // console.log(a, '>>>>>>>>>params');
    console.log('willLeave--------componentDidMount~~~~~~~~~~');
  }

  componentWillUnmount (a) {
    console.log(a, 'willLeave>>>>>>>>>>>>>>componentWillUnmount')
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log(prevProps, prevState, 'willLeave-------------getSnapshotBeforeUpdate');
    return {
      test: 'haha'
    }
  }

  toHome () {
    // this.props.history.goBack();
  }
}

// export default withRouter(willLeave)
export default willLeave