import React from 'react'
import {expect} from 'code'
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon'
import {createMockStore} from 'redux-test-utils';
import mountWithStore from './mountWithStore'
import shallowWithStore from './shallowWithStore'
import SortButton from '../src/components/SortButton.js'
import SortButtonContainer from '../src/components/SortButtonContainer.js'
import {REVERSE_SORT, reverseSort} from '../src/actions.js'


const store = createMockStore ({
  pizzas: ['a', 'b']
})

describe('The SortButtonContainer', () => {
  it('receives reverseSort() as a prop', () => {
    let wrapper = shallowWithStore(<SortButtonContainer />, store)
    expect(wrapper.props().reverseSort).to.exist()
    
  })
  
})