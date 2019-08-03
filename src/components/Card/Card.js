import React from 'react'
import { DivBlock, Imagem, DivText, SpanButton, DivContainer } from './style'

export default function Card () {
  return (
    <DivContainer>
      <DivBlock>
        <Imagem />
        <DivText>Jorge da Silva Guimarães</DivText>
        <SpanButton>Edit profile</SpanButton>
      </DivBlock>
    </DivContainer>
  )
}
