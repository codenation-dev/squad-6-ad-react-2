import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import user, { initialState } from './store/ducks/user'
import 'jest-dom/extend-expect'
import App from './App'

afterEach(cleanup)

const type = ''
const payload = {}

const reducer = () => user(initialState, { type, payload })

function renderWithRedux (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

describe('App', () => {
  it('Should home with text', () => {
    const { getByTestId } = renderWithRedux(<App />)
    expect(getByTestId('home')).toHaveTextContent('Explore public repositories')
  })

  // it('Should with main', () => {
  //   const {getByTestId, container} = renderWithRedux(<App/>)
  //   const HeaderNode = getByTestId("inputSearch")
  //   fireEvent.change(HeaderNode, {
  //     target : {
  //       value : 'xavierleonardo'
  //     }
  //   })

  //   fireEvent.keyDown(HeaderNode, { key: 'Enter', code: 13 })
  //   expect(getByTestId("main")).toBeTruthy()
  // })
})
