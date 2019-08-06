import React, { useEffect, useState } from 'react'
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

const filterLanguages = langList => {
  const uniques = []
  langList.forEach(lang => !uniques.includes(lang) && uniques.push(lang))

  return uniques
}

function Repositories ({ userRepos }) {
  const [currentRepoList, setCurrentRepoList] = useState([])

  useEffect(() => {
    setCurrentRepoList(userRepos)
  }, [setCurrentRepoList, userRepos])

  const onSearch = event => {
    const search = event.target.value.toLowerCase()

    const filteredRepos = userRepos.filter(({ name, description }) => {
      const lowerName = name.toLowerCase()
      const lowerDesc = description && description.toLowerCase()
      return (
        lowerName.includes(search) || (lowerDesc && lowerDesc.includes(search))
      )
    })

    setCurrentRepoList(filteredRepos)
  }

  const languages = userRepos.map(({ primaryLanguage }) => primaryLanguage.name)

  const uniqueLanguages = filterLanguages(languages)

  const onLangFilter = event => {
    const lang = event.target.value
    const filteredRepos = userRepos.filter(({ primaryLanguage }) => {
      if (lang === 'All') return true
      return primaryLanguage.name === lang
    })
    setCurrentRepoList(filteredRepos)
  }

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
          <InputText onChange={onSearch} placeholder='Find a repository...' />
          <SelectType onChange={onLangFilter}>
            <OptionType>All</OptionType>
            {uniqueLanguages.map(langName => (
              <OptionType key={langName} value={langName}>
                {langName}
              </OptionType>
            ))}
          </SelectType>
          <ButtonNew />
        </Form>
      </DivBusca>
      <Repos>
        {currentRepoList.map(repository => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </Repos>
    </Container>
  )
}

const mapStateToProps = state => ({
  userRepos: state.user.userRepos
})

export default connect(
  mapStateToProps,
  null
)(Repositories)
