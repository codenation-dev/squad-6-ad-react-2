import React from 'react'
import {
  Container,
  DivTitle,
  DivBusca,
  Form,
  InputText,
  SpanButton,
  Repos,
  H2,
  SelectType,
  OptionType
} from './style'
import Repository from '../Repository/Repository'

export default function Repositories ({ language, repositories }) {
  return (
    <Container>
      <DivTitle>
        <H2>Repositories</H2>
      </DivTitle>
      <DivBusca>
        <Form>
          <InputText />
          <SelectType>
            <OptionType>All</OptionType>
            {language.map(lang => (
              <OptionType key={lang.id} value={lang.id}>
                {lang.name}
              </OptionType>
            ))}
          </SelectType>
          <SpanButton>New</SpanButton>
        </Form>
      </DivBusca>
      <Repos>
        {repositories.map(repository => (
          <Repository key={repository.name} repository={repository} />
        ))}
      </Repos>
    </Container>
  )
}
