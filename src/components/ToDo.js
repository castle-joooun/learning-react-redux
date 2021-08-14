import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

const ToDo = ({ text, onClickButton }) => {
  return (
    <li>
      {text} <button onClick={onClickButton}>DEL</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickButton: () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)