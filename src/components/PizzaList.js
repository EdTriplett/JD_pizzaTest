import React from 'react';

const PizzaListItem = name => {
  return (
    <li key={name}> {name} </li>
  )
}

const PizzaList = ({pizzas}) => {
  return (
    <ul>
      {pizzas.map( pizza => PizzaListItem(pizza))
      }
    </ul>
  )
}

export default PizzaList;