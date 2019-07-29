import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import Header from './components/Header/Header'

const testQuery = gql`
  query {
    viewer {
      login
    }
  }
`

function App () {
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default graphql(testQuery)(App)
