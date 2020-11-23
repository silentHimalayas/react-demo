import React from 'react';
import { connect } from 'react-redux'
function mapStateToProps(state) {
  console.log(state, '>>>>>state')
  return {
    value: state.count
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    clickHandle: () => dispatch({type: 'add'})
  }
}
function UIComp (props) {
  const { value, clickHandle } = props
  console.log(props, '>>>>props')
  return (
    <div>
      <span>{value}</span>
      <button onClick={clickHandle}>Increase</button>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(UIComp)