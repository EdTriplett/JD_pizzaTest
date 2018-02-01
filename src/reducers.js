import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILURE,
  SET_FILTER,
  REVERSE_SORT,
} from './actions.js'

export const initialState = {
  isLoading: true,
  pizzas: [],
  filterText: '',
  error: null
}

export const reducer = (state = initialState, action) => {
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      nextState.isLoading = true
      return nextState
    case GET_PIZZAS_SUCCESS:
      nextState.isLoading = false
      nextState.pizzas = action.payload
      return nextState
    case GET_PIZZAS_FAILURE:
      nextState.isLoading = false
      nextState.error = action.payload
      console.log('Error fetching pizzas: ', nextState.error)
      return nextState
    case SET_FILTER:
      nextState.filterText = action.payload
      return nextState
    case REVERSE_SORT:
      console.log("old: " + state.pizzas)
      nextState.pizzas = state.pizzas.reverse()
      console.log("new: " + nextState.pizzas)
      return nextState
    default: 
      return state
  }
}
