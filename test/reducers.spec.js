import {expect} from 'code'
import { shallow, mount, render } from 'enzyme';
import {reducer, initialState} from '../src/reducers.js'
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILURE,
  SET_FILTER,
  REVERSE_SORT,
} from '../src/actions.js'

describe('The reducer', () => {
  it('updates state according to the actions passed to it', () => {
    let nextState = reducer(initialState, {type: GET_PIZZAS_REQUEST})
    expect(nextState.isLoading).to.equal(true)
    nextState = reducer(initialState, {type: GET_PIZZAS_SUCCESS, payload: ['veggie']})
    expect(nextState.isLoading).to.equal(false)
    expect(nextState.pizzas).to.equal(['veggie'])
    nextState = reducer(initialState, {type: GET_PIZZAS_FAILURE, payload: 'awfulError'})
    expect(nextState.isLoading).to.equal(false)
    expect(nextState.error).to.equal('awfulError')
    nextState = reducer(initialState, {type: SET_FILTER, payload: '3'})
    expect(nextState.filterText).to.equal('3')
    nextState = reducer(initialState, {type: REVERSE_SORT})
    expect(nextState.pizzas).to.equal(initialState.pizzas.reverse().slice())
    nextState = reducer(initialState, {})
    expect(nextState).to.equal(initialState)
  })
})




