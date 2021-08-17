import { createStore } from 'redux'
import { createAction } from 'redux-toolkit'

const addToDo = createAction('ADD')
const deleteToDo = createAction('DELETE')

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state]
    case deleteToDo.type:
      return state.filter(toDo => toDo.id !== action.payload)
    default:
      return state
  }
}

export const actionCreators = {
  addToDo,
  deleteToDo,
}

const store = createStore(reducer)

export default store
