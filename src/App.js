import React from 'react'
// import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
import Main from './components/Main/Main'
import data from './data/data.json'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/Header'

// const testQuery = gql`
//   query {
//     viewer {
//       login
//     }
//   }
// `

function App () {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Main {...data} />
      </Router>
    </div>
  )
}

export default App
