import React from 'react'
import {Button} from 'reactstrap'

const SortButton = ({handleClick}) => {
  return (
    <Button onClick={handleClick} color='primary' size='lg' block>
      Sort
    </Button>
  )
}

export default SortButton