import React from 'react'
import {expect} from 'code'
import {createMockStore} from 'redux-test-utils';
import PizzaListContainer from '../src/components/PizzaListContainer.js'
import shallowWithStore from './shallowWithStore.js'
import mountWithStore from './mountWithStore.js'
import {initialState} from '../src/reducers.js'

const store = createMockStore(initialState)

describe('PizzaListContainer', () => {
    it('gets passed pizzas and filterText in props', () => {
        const wrapper = shallowWithStore(<PizzaListContainer />, store)
        expect(wrapper.props()).to.include({filterText: ''})
        expect(wrapper.props()).to.include({pizzas: []})
    })
    
})