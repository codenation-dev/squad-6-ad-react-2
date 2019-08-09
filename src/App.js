import React from 'react'
import { connect } from 'react-redux'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'

function App ({ repos, errMsg }) {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Route
          exact
          path='/'
          render={() =>
            errMsg ? (
              <NotFound msg={errMsg} />
            ) : repos.length ? (
              <Main />
            ) : (
              <Home />
            )
          }
        />
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  errMsg: state.user.errMsg,
  repos: state.user.userRepos
})

export default connect(mapStateToProps)(App)
