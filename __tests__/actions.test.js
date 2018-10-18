const actions = require('../__mocks__/actions_mock.js')
const actionTypes = require('../__mocks__/actionTypes_mock.js')

describe('actions.setMode', () => {
  it('should create an action that sends a calculator mode to the reducer', () => {
    const payload = "+"
    const expectedAction = {
      type: actionTypes.SET_MODE,
      payload
    }
    expect(actions.setMode("+")).toEqual(expectedAction)
  })
})

describe('actions.setFirstNumber', () => {
  it('should create an action that sends a number for the reducer to place in position a', () => {
    const payload = "239"
    const expectedAction = {
      type: actionTypes.SET_FIRST_NUMBER,
      payload
    }
    expect(actions.setFirstNumber("239")).toEqual(expectedAction)
  })
})

describe('actions.setSecondNumber', () => {
  it('should create an action that sends a number for the reducer to place in position b', () => {
    const payload = "22"
    const expectedAction = {
      type: actionTypes.SET_SECOND_NUMBER,
      payload
    }
    expect(actions.setSecondNumber("22")).toEqual(expectedAction)
  })
})

describe('actions.saveNumber', () => {
  it('should create an action that sends a number to the reducer to place in the saved object at a referenced position', () => {
    const payload = {reference: 9, number: "35"}
    const expectedAction = {
      type: actionTypes.SAVE_NUMBER,
      payload
    }
    expect(actions.saveNumber(9, "35")).toEqual(expectedAction)
  })
})
