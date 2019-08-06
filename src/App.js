import React from 'react'
import { connect } from 'react-redux'
// import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'

// const testQuery = gql`
//   query {
//     viewer {
//       login
//     }
//   }
// `

function App ({ repo, errMsg }) {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route
          exact
          path='/'
          render={() =>
            errMsg.length ? (
              <NotFound msg={errMsg} />
            ) : repo.length ? (
              <Main />
            ) : (
              <h1 />
            )
          }
        />
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  errMsg: state.user.errMsg,
  repo: state.user.userRepos
})

export default connect(mapStateToProps)(App)
