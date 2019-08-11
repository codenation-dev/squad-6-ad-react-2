import React from 'react'
import { connect } from 'react-redux'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import Loading from './components/Loading/Loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'

function App ({ repos, errMsg, isLoading }) {
  return (
    <>
      <Header />
      <Router>
        <Route
          exact
          path='/'
          render={() =>
            errMsg ? (
              <NotFound msg={errMsg} />
            ) : isLoading ? (
              <Loading />
            ) : repos ? (
              <Main />
            ) : (
              <Home />
            )
          }
        />
      </Router>
    </>
  )
}

const mapStateToProps = state => ({
  errMsg: state.user.errMsg,
  repos: state.user.userRepos,
  isLoading: state.user.isLoading
})

export default connect(mapStateToProps)(App)
