import React from 'react'
import {expect} from 'code'
import {createMockStore} from 'redux-test-utils';
import FilterInputContainer from '../src/components/FilterInputContainer.js'
import shallowWithStore from './shallowWithStore.js'
import mountWithStore from './mountWithStore.js'
import {initialState} from '../src/reducers.js'

const store = createMockStore(initialState)

describe('FilterInputContainer', () => {
    it('gets passed filterText in props', () => {
        const wrapper = shallowWithStore(<FilterInputContainer />, store)
        expect(wrapper.props()).to.include({filterText: ''});
    })
    
})