import React from 'react';
import {connect} from 'react-redux'
import FilterInputContainer from './FilterInputContainer.js'
import SortButtonContainer from './SortButtonContainer.js'
import PizzaListContainer from './PizzaListContainer.js'
import LoadingScreen from './LoadingScreen.js'
import {getInitialPizzas} from '../actions.js'

class App extends React.Component {

  componentDidMount() {
    if (this.props.pizzas.length < 1) {
      this.props.getInitialPizzas()
    }
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? 
          (<LoadingScreen />)
         : (
          <div>
            <FilterInputContainer />
            <br />
            <SortButtonContainer />
            <br />
            <PizzaListContainer />
          </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    pizzas: state.pizzas
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialPizzas: () => {
      dispatch(getInitialPizzas())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)