import { createStore } from 'redux'
import { SET_MODE, SET_FIRST_NUMBER, SET_SECOND_NUMBER, SAVE_NUMBER } from './actionTypes'

//This sets the state for the reducer and thus the store
const initialState = {
  //Modes are add, subtract, multiply, divide, save, and retrieve
  mode: null,
  //PrevMode is useful when we're using Memory Retrieval
  prevMode: null,
  //'a' is the first number entered
  a: "0",
  //'b' is the second number entered. After the second number is entered and calculated, it becomes 'a', and 'b' is reset to 0
  b: "0",
  //Numbers saved in the calculator
  saved: {}
}

//The calculator reducer
const calculator = (state = initialState, action) => {
  switch (action.type){
    case SET_MODE:
    return {
      ...state,
      prevMode: state.mode,
      mode: action.payload,
    }
    case SET_FIRST_NUMBER:
    return {
      ...state,
      a: action.payload
    }
    case SET_SECOND_NUMBER:
    return {
      ...state,
      b: action.payload
    }
    case SAVE_NUMBER:
    return {
      ...state,
      saved: {
        ...state.saved,
        [action.payload.reference]: action.payload.number
      }
    }
    default:
    return state
  }
}

//Creating and exporting the store to give to the provider in index.js
const store = createStore(calculator)
export default store
