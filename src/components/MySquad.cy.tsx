import React from 'react'
import { MySquad } from './MySquad'

describe('<MySquad />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MySquad />)
  })
})