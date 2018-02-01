import React from 'react';
import PizzaList from './PizzaList.js'
import {connect} from 'react-redux'

class PizzaListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.pizzaFilter = this.pizzaFilter.bind(this)
  }

  pizzaFilter(pizzaArray) {
    return pizzaArray.filter(pizza => pizza.toUpperCase().includes(this.props.filterText.toUpperCase()))
  }

  render() {
    const {pizzas} = this.props
    return (
      <PizzaList pizzas={this.pizzaFilter(pizzas)}  />
    )
  }
}

const mapStateToProps = state => {
  return {
    pizzas: state.pizzas,
    filterText: state.filterText
  }
}

export default connect(mapStateToProps)(PizzaListContainer)