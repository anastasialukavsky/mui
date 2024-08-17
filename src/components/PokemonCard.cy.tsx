import React from 'react'
import { PokemonCard } from './PokemonCard'

describe('<PokemonCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PokemonCard />)
  })
})