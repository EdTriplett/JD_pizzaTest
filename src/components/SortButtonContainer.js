import React from 'react'
import SortButton from './SortButton.js'
import {reverseSort} from '../actions.js'
import {connect} from 'react-redux'

class SortButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.reverseSort()
  }

  render() {
    return (
      <SortButton handleClick={this.handleClick} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    reverseSort: () => {
      dispatch(reverseSort())
    }
  }
}

export default connect(null, mapDispatchToProps)(SortButtonContainer)