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
            <NameLinguagem>{repository.language}</NameLinguagem>
          </Linguagem>
          <PDate>{repository.created_data}</PDate>
        </Div>
      </DivPainned>
    </DivBox>
  )
}
