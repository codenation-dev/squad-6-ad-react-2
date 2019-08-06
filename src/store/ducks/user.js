import client from '../../services/client'
import { userQuery } from '../../services/queries'

export const TYPES = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR'
}

const initialState = {
  user: {},
  userRepos: [],
  errMsg: ''
}

export default (state = initialState, { type, payload }) => {
  if (type === TYPES.FETCH_USER) {
    const user = { ...payload }
    delete user.repositories
    const userRepos = [...payload.repositories.nodes]
    const errMsg = ''
    return { ...state, user, userRepos, errMsg }
  }

  if (type === TYPES.FETCH_USER_ERROR) return { ...state, errMsg: payload }

  return state
}

export const getUser = login => dispatch =>
  client
    .query({ query: userQuery, variables: { login } })
    .then(({ data }) =>
      dispatch({
        type: TYPES.FETCH_USER,
        payload: data.user
      })
    )
    .catch(() =>
      dispatch({
        type: TYPES.FETCH_USER_ERROR,
        payload: 'User not found'
      })
    )
