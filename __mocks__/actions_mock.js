const actionTypes = require('./actionTypes_mock')

//Action creators that trigger transformations in the redux store using previously-declared action types
const setMode = (mode) => {
  return {type: actionTypes.SET_MODE, payload: mode}
}

const setFirstNumber = (number) => {
  return {type: actionTypes.SET_FIRST_NUMBER, payload: number}
}

const setSecondNumber = (number) => {
  return {type: actionTypes.SET_SECOND_NUMBER, payload: number}
}

const saveNumber = (reference, number) => {
  return {type: actionTypes.SAVE_NUMBER, payload: {reference, number}}
}

module.exports = { setMode, setFirstNumber, setSecondNumber, saveNumber }
