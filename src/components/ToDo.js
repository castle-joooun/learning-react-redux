import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'

const ToDo = ({ text, onClickButton, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickButton}>DEL</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickButton: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  }
}

export default connect(null, mapDispatchToProps)(ToDo)
