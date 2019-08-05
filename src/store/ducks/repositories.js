import client from '../../services/client'
import { getRepos } from '../../services/queries'

export const TYPES = {
  FETCH_REPOSITORIES: 'FETCH_REPOSITORIES'
}

const initialState = {
  userRepos: [],
  errMsg: ''
}

export default (state = initialState, { type, payload }) => {
  if (type === TYPES.FETCH_REPOSITORIES)
    return { ...state, userRepos: [...payload] }
  return state
}

export const getUserRepositories = login => dispatch =>
  client.query({ query: getRepos, variables: { login } }).then(({ data }) =>
    dispatch({
      type: TYPES.FETCH_REPOSITORIES,
      payload: data.user.repositories.nodes
    })
  )
