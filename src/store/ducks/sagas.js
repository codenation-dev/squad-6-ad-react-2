import { takeEvery, put, call } from 'redux-saga/effects'
import { TYPES, reciveUser } from './user'
import client from '../../services/client'
import { userQuery } from '../../services/queries'

function * getApiData ({ payload }) {
  const login = payload
  try {
    const data = yield call(() =>
      client
        .query({ query: userQuery, variables: { login } })
        .then(({ data }) => data)
    )
    yield put(reciveUser(data))
  } catch (e) {
    yield put({
      type: TYPES.FETCH_USER_ERROR,
      payload: 'user not found'
    })
  }
}

export default function * mySaga () {
  yield takeEvery(TYPES.ASYNC_FETCH_USER, getApiData)
}
