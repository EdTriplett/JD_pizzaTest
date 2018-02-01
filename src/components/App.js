import React from 'react';
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import FilterInputContainer from './FilterInputContainer.js'
import SortButtonContainer from './SortButtonContainer.js'
import PizzaListContainer from './PizzaListContainer.js'
import LoadingScreen from './LoadingScreen.js'
import TopBar from './TopBar.js'
import {getInitialPizzas} from '../actions.js'

class App extends React.Component {

  componentDidMount() {
    if (this.props.pizzas.length < 1) {
      this.props.getInitialPizzas()
    }
  }

  render() {
    return (
      <Container>
        {this.props.isLoading ? 
          (
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <LoadingScreen />
            </Col>
            </Row>
          )
         : (
          <div>
          <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <TopBar />
            </Col>
            </Row>
            <br />
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <FilterInputContainer />
            </Col>
            </Row>
            <br />
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <SortButtonContainer />
            </Col>
            </Row>
            <br />
            <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
            <PizzaListContainer />
            </Col>
            </Row>
          </div>
          )
        }
      </Container>
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