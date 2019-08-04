import React from 'react'
import ButtonNew from '../ButtonNew/ButtonNew'

import {
  Container,
  DivBusca,
  DivTitle,
  Form,
  InputText,
  Link,
  Menu,
  OptionType,
  Repos,
  SelectType
} from './style'
import Repository from '../Repository/Repository'

export default function Repositories ({ language, repositories }) {
  return (
    <Container>
      <DivTitle>
        <Menu>
          <Link>Overview</Link>
          <Link repo>Repositories</Link>
          <Link>Projects</Link>
          <Link>Stars</Link>
          <Link>Followers</Link>
          <Link>Following</Link>
        </Menu>
      </DivTitle>
      <DivBusca>
        <Form>
          <InputText placeholder='Find a repository...' />
          <SelectType>
            <OptionType>All</OptionType>
            {language.map(lang => (
              <OptionType key={lang.id} value={lang.id}>
                {lang.name}
              </OptionType>
            ))}
          </SelectType>
          <ButtonNew />
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
