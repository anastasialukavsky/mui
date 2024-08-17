import React from 'react'
import { PokemonList } from './PokemonList'

describe('<PokemonList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PokemonList />)
  })
})