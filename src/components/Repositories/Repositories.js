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
import { connect } from 'react-redux'

function Repositories ({ userRepos }) {
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
            {userRepos.map(({ id, primaryLanguage }) => (
              <OptionType key={id} value={id}>
                {primaryLanguage.name}
              </OptionType>
            ))}
          </SelectType>
          <ButtonNew />
        </Form>
      </DivBusca>
      <Repos>
        {userRepos.map(repository => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </Repos>
    </Container>
  )
}

const mapStateToProps = state => ({
  userRepos: state.repositories.userRepos
})

export default connect(
  mapStateToProps,
  null
)(Repositories)
