import React from 'react'
import { DivContainer, H1 } from './styled'

export default function NotFound ({ msg }) {
  return (
    <DivContainer>
      <H1>{msg}</H1>
    </DivContainer>
  )
}
