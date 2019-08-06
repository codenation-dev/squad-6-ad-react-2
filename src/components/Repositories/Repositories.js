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
  langList.forEach(
    lang => lang && !uniques.includes(lang) && uniques.push(lang)
  )

  return uniques
}

function Repositories ({ userRepos }) {
  const [currentRepoList, setCurrentRepoList] = useState([])
  const [searchStr, setSearchStr] = useState('')
  const [lang, setLang] = useState('All')

  useEffect(() => {
    const filterRepos = () => {
      const newList = userRepos.filter(
        ({ name, description, primaryLanguage }) => {
          const lowerCaseSearchStr = searchStr.toLowerCase()
          const lowerCaseName = name.toLowerCase()
          const lowerCaseDescription = description && description.toLowerCase()

          if (!searchStr && lang === 'All') return true

          const isLangMatch =
            lang !== 'All' &&
            (primaryLanguage.name && primaryLanguage.name === lang)

          if (searchStr) {
            const isSearchStrMatch =
              lowerCaseName.includes(lowerCaseSearchStr) ||
              (!!description &&
                lowerCaseDescription.includes(lowerCaseSearchStr))

            return isSearchStrMatch && isLangMatch
          }

          return isLangMatch
        }
      )

      setCurrentRepoList(newList)
    }

    filterRepos()
  }, [userRepos, setCurrentRepoList, searchStr, lang])

  const onSearch = ({ target }) => setSearchStr(target.value)

  const onLangFilter = ({ target }) => setLang(target.value)

  const languages = userRepos.map(
    ({ primaryLanguage }) => primaryLanguage && primaryLanguage.name
  )

  const uniqueLanguages = filterLanguages(languages)

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
          <InputText
            onChange={onSearch}
            value={searchStr}
            placeholder='Find a repository...'
          />
          <SelectType onChange={onLangFilter} value={lang}>
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
