import React from 'react'

class ErrorComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    console.log('>>>>>getDerivedStateFromError', error)
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    console.log('>>>>>>>>>>componentDidCatch', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    throw new Error('I crashed!')
    return <div>error</div>
  }
}
export default ErrorComp