export const TYPES = {
  FETCH_USER: 'FETCH_USER',
  FETCH_USER_ERROR: 'FETCH_USER_ERROR',
  ASYNC_FETCH_USER: 'ASYNC_FETCH_USER',
  LOADING_USER: 'LOADING_USER'
}

const initialState = {
  user: {},
  userRepos: [],
  errMsg: '',
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  if (type === TYPES.FETCH_USER) {
    const user = { ...payload }
    delete user.repositories
    const userRepos = [...payload.repositories.nodes]
    return { user, userRepos, errMsg: '', isLoading: false }
  }

  if (type === TYPES.FETCH_USER_ERROR) return { ...state, errMsg: payload }

  if (type === TYPES.LOADING_USER) {
    return { ...state, isLoading: payload.isLoading }
  }

  return state
}

export const getUser = login => ({
  type: TYPES.ASYNC_FETCH_USER,
  payload: login
})

export const reciveUser = user => ({
  type: TYPES.FETCH_USER,
  payload: user.user
})
