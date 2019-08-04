import React from 'react'
import {
  DivBox,
  DivPainned,
  DivFlex,
  Span,
  Description,
  Linguagem,
  NameLinguagem,
  PDate,
  Div
} from './styled'

export default function Repository ({ repository }) {
  return (
    <DivBox>
      <DivPainned>
        <DivFlex>
          <Span>{repository.name}</Span>
        </DivFlex>
        <Description>{repository.description} </Description>
        <Div>
          <Linguagem>
            <NameLinguagem>{repository.primaryLanguage.name}</NameLinguagem>
          </Linguagem>
          <PDate>{new Date(repository.createdAt).toLocaleDateString()}</PDate>
        </Div>
      </DivPainned>
    </DivBox>
  )
}
