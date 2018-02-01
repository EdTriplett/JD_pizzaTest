import React from 'react';

const FilterInput = ({placeholder, value, handleChange}) => {
  return (
    <input type='text' name='filterText' placeholder={placeholder} 
      value={value} 
      onChange={e => handleChange(e.target.value)} 
    />
  )
}

export default FilterInput;