import React from 'react';
import fetch from 'isomorphic-fetch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      pizzas: [],
      filterText: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      filterText: e.target.value
    })
  }

  handleClick(e) {
    e.preventDefault();
    let sortedPizzas = this.state.pizzas.reverse()
    this.setState({
      pizzas: sortedPizzas
    })
  }

  componentDidMount() {
    fetch('../pizza.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        isLoading: false,
        pizzas: data.pizzas.map(pizzaName => {
          if (/^[^a-zA-Z]/.test(pizzaName)) {
// if 1st character is not a letter, capitalize 1st letter and de-capitalize all subsequent ones
// change this if a matching pizza name is added later with a second word that should be capitalized
            let idx = pizzaName.search(/[a-z]/i)
            return pizzaName.slice(0, idx) + pizzaName[idx].toUpperCase() + pizzaName.slice(idx+1, pizzaName.length).toLowerCase()
          }
          return pizzaName[0].toUpperCase() + pizzaName.slice(1, pizzaName.length)
        }).sort() 
      })
    })
  }
  

 loadedDisplay() {
  return (
      <div>
        <input type='text' name='filterText' placeholder='Enter text to filter by' value={this.state.filterText} onChange={this.handleChange} />
        <br />
        <button onClick={this.handleClick}>
          Sort
        </button>
        <ul>
          {this.state.pizzas.filter( pizza => pizza.toUpperCase().includes(this.state.filterText.toUpperCase()))
            .map( pizza => (<li key={pizza}> {pizza} </li> ))
          }
        </ul>
      </div>
      )
}

  render() {
    return (
      <div>
        {this.state.isLoading ?  (<p>Loading</p>) : this.loadedDisplay()
        }
      </div>
    )
  }
}

export default App