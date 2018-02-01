import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

let count = 0

const PizzaListItem = name => {
  if (count%2) {
    return (
    <ListGroupItem color="success" key={name}> <div className="text-center text-dark">{name}</div>
    </ListGroupItem>
    )
  }
  return (
    <ListGroupItem color="warning" key={name}> <div className="text-center text-dark">{name}</div>
    </ListGroupItem>
    )
  
}

const PizzaList = ({pizzas}) => {
  return (
    <ListGroup>
      {pizzas.map( pizza => {
        count++
        return PizzaListItem(pizza)
          }
        )
      }
    </ListGroup>
  )
}

export default PizzaList;