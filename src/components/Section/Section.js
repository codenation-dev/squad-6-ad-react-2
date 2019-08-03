import React from 'react'
import { Main, DivContent } from './styled'
import Repositories from '../Repositories/Repositories'

export default function Section ({ ...data }) {
  return (
    <Main>
      <DivContent>
        <Repositories {...data} />
      </DivContent>
    </Main>
  )
}
