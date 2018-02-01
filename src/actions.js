import fetch from 'isomorphic-fetch';

export const GET_PIZZAS_REQUEST = 'GET_PIZZAS_REQUEST'
export const GET_PIZZAS_SUCCESS = 'GET_PIZZAS_SUCCESS'
export const GET_PIZZAS_FAILURE = 'GET_PIZZAS_FAILURE'
export const SET_FILTER = 'SET_FILTER'
export const REVERSE_SORT = 'REVERSE_SORT'

export const getPizzasRequest = () => ({
  type: GET_PIZZAS_REQUEST,
})

export const getPizzasSuccess = (pizzas) => ({
  type: GET_PIZZAS_SUCCESS,
  payload: pizzas,
})

export const getPizzasFailure = (error) => ({
  type: GET_PIZZAS_FAILURE,
  error,
})

const cleanedList = (pizzaList) => pizzaList.map(pizzaName => {
    if (/^[^a-zA-Z]/.test(pizzaName)) {
      let idx = pizzaName.search(/[a-z]/i)
      return pizzaName.slice(0, idx) + pizzaName[idx].toUpperCase() + pizzaName.slice(idx+1, pizzaName.length).toLowerCase()
    }
    return pizzaName[0].toUpperCase() + pizzaName.slice(1, pizzaName.length)
  })
  .sort()

export const getInitialPizzas = () => {
  return (dispatch) => {
    dispatch(getPizzasRequest())
    fetch('../pizza.json')
    .then(response => response.json())
    .then(data => {
      dispatch(getPizzasSuccess(cleanedList(data.pizzas)))
    })
    .catch(error => {
      dispatch(getPizzasFailure(error))
    })
  }
}

export const setFilter = (filterText) => ({
  type: SET_FILTER,
  payload: filterText,
})

export const reverseSort = () => ({
  type: REVERSE_SORT,
})

