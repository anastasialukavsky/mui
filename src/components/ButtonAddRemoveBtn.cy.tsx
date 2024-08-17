import React from 'react'
import { AddRemoveBtn } from './Button'

describe('<AddRemoveBtn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddRemoveBtn />)
  })
})