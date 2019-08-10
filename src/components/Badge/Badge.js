import React from 'react'

import { Container, Count, Span, Year } from './style'

export default function Badge ({ year, count }) {
  return (
    <Container>
      <Span>
        <Year>{year}</Year>
        <Count>{count}</Count>
      </Span>
    </Container>
  )
}
