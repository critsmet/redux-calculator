//Action type variables keep typo-related errors to a minimum
export const SET_MODE = 'SET_MODE'
export const SET_FIRST_NUMBER = 'SET_FIRST_NUMBER'
export const SET_SECOND_NUMBER = 'SET_SECOND_NUMBER'
export const SAVE_NUMBER = 'SAVE_NUMBER'

//Action creators that trigger transformations in the redux store using previously-declared action types
export const setMode = (mode) => {
  return {type: SET_MODE, payload: mode}
}

export const setFirstNumber = (number) => {
  return {type: SET_FIRST_NUMBER, payload: number}
}

export const setSecondNumber = (number) => {
  return {type: SET_SECOND_NUMBER, payload: number}
}

export const saveNumber = (reference, number) => {
  return {type: SAVE_NUMBER, payload: {reference, number}}
}
