import React from 'react';
import FilterInput from './FilterInput.js'
import {setFilter} from '../actions.js'
import {connect} from 'react-redux'

class FilterInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(text) {
    this.props.setFilter(text)
  }

  render() {
    return (
      <div>
        <FilterInput 
          placeholder='Enter text to filter by' 
          value={this.props.filterText} 
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {filterText: state.filterText}
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter: text => {
      dispatch(setFilter(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterInputContainer)