import React from 'react';
import Willleave from '../willLeave/index';
import {HashRouter, Switch, Route, NavLink, Redirect, withRouter} from 'react-router-dom';
import {Theme} from '../../context'


class lifeCycle extends React.Component {

  // 挂载 / 更新 阶段都会触发此函数，在constructor之后触发   用于从props中获取参数到state中
  static getDerivedStateFromProps (next, pre) {
    console.log(next, pre, 'lifeCyvle--------getDerivedStateFromProps~~~~~~~~');
    let {history} = next;
    return {
      history
    };
  }

  static getDerivedStateFromError (err) {
    console.log(err, 'lifeCyvle>>>>>>>>>>>>err')
  }

  // 挂载阶段 最先触发的函数  frist
  constructor () {
    super();
    this.state = {
      type: 1,
      nun: 2,
      timer: null
    }
    this.toHome = this.toHome.bind(this);
  }

  // 更新 阶段触发  在 getDerivedStateFromProps 之后； 用于控制视图是否需要re-render
  shouldComponentUpdate (nextProps, nextState) {
    return true;
  }

  // 挂载 / 更新 阶段触发（涉及到重新渲染就触发此函数） 在 getDerivedStateFromProps 之后触发
  render () {
    console.log(this.props, '>>>>>>>>>lifeCyvle-------------this props');
    let {type} = this.state;
    
    return (
      <Theme.Provider value='shuaixin'>
        <div onClick={this.toHome}>
          <div>{this.state.type}12312</div>
          {/* <Switch>
            <Route exact path='/lifeCycle/asd' component={Willleave}></Route>
          </Switch> */}
          <Willleave  type={type}/>
        </div>
      </Theme.Provider>
    )
  }

  // 挂载 阶段触发 在 render 之后触发。 一般在该函数中进行网络请求
  // 注意⚠️ 如果该组件存在子组件，那么会先发出子组件的 componentDidMount 函数， 再触发该组件的 componentDidMount
  componentDidMount (a) {
    const dom = (<div diyAttr="hahaha"></div>)
    console.log(dom, '>>>>>>>dom');
    this.state.timer = setTimeout(() => {
      this.setState({type: 3})
    }, 3000);
  }


  // 更新 阶段发出 在render之后。 该函数返回的数据会作为参数传递给componentDidUpdate
  // 注意⚠️ 如果该组件存在子组件，那么会先发出子组件的 getSnapshotBeforeUpdate 函数， 再触发该组件的 getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log(prevProps, prevState, 'lifeCyvle-------------getSnapshotBeforeUpdate');
    return null
  }

  // 更新 阶段触发  在 getSnapshotBeforeUpdate 之后触发。
  // 注意⚠️ 如果该组件存在子组件，那么会先发出子组件的 componentDidMount 函数， 再触发该组件的 componentDidMount
  // prevProps, prevState 表示更新前的状态 
  // snapshot 表示getSnapshotBeforeUpdate return的数据
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, '>>>>>>>>>>>>>lifeCyvle------------- comp');
    // if (this.props.location.pathname !== prevProps.location.pathname) {
      // window.scrollTo(0,0);
    // }
  }

  // 卸载 阶段。   一般在此阶段取消一些订阅，网络请求，定时任务
  componentWillUnmount (a) {
    console.log(a, 'lifeCyvle>>>>>>>>>>>>>>componentWillUnmount')
  }

  // 函数组件最好是纯函数，不包含任何状态。只负责渲染。将状态移交至外层
  renderWillLeave () {
    return (<will-leave />)
  }
  
  toHome () {
    console.log(this.props.history, '>>>>>>>>>>>>>>>>this.props.history');
    this.state.timer && clearTimeout(this.state.timer);
    this.props.history.goBack();
  }
}

// export default withRouter(lifeCycle);
export default lifeCycle;