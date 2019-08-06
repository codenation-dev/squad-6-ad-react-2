import React from 'react'
import { Main, DivContent } from './styled'
import Repositories from '../Repositories/Repositories'

export default function Section () {
  return (
    <Main>
      <DivContent>
        <Repositories />
      </DivContent>
    </Main>
  )
}
