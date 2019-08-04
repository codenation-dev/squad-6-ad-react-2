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
import { connect } from 'react-redux'

function Repositories ({ userRepos }) {
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
            {userRepos.map(({ id, primaryLanguage }) => (
              <OptionType key={id} value={id}>
                {primaryLanguage.name}
              </OptionType>
            ))}
          </SelectType>
          <SpanButton>New</SpanButton>
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
