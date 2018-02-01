import React from 'react';
import {Input} from 'reactstrap'

const FilterInput = ({placeholder, value, handleChange}) => {
  return (
    <Input name='filterText' placeholder={placeholder} 
      value={value} 
      onChange={e => handleChange(e.target.value)} 
    />
  )
}

export default FilterInput;