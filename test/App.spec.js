import 'jsdom-global/register'
import 'jsdom'
import React from "react";
import { expect } from "code";
import { createMockStore } from "redux-test-utils";
import App from "../src/components/App.js";
import shallowWithStore from "./shallowWithStore.js";
import mountWithStore from "./mountWithStore.js";
import { initialState } from "../src/reducers.js";

let store = createMockStore(initialState)

describe("App", () => {
  it('displays "Loading" while loading', () => {
    const wrapper = mountWithStore(<App />, store)
    expect(wrapper.find("LoadingScreen")).to.have.length(1)
  })
  it('displays the other components after loading', () => {
    let newState = Object.assign({}, initialState)
    newState.isLoading = false
    store = createMockStore(newState)
    const wrapper = mountWithStore(<App />, store)
    expect(wrapper.find("TopBar")).to.have.length(1)
    expect(wrapper.find("FilterInputContainer")).to.have.length(1)
    expect(wrapper.find("SortButtonContainer")).to.have.length(1)
    expect(wrapper.find("PizzaListContainer")).to.have.length(1)
  })
})
