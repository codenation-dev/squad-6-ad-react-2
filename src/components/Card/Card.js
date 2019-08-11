import React, { memo, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Badge from '../Badge/Badge'
import {
  Avatar,
  CountRepos,
  DivBlock,
  DivContainer,
  Name,
  Location,
  User,
  Username
} from './style'

const Card = memo(({ user, repos }) => {
  const [reposPerYear, setReposPerYear] = useState({})

  useEffect(() => {
    const dates = {}

    repos.forEach(({ createdAt }) => {
      const year = new Date(createdAt).getFullYear().toString()
      if (dates[year]) dates[year]++
      else dates[year] = 1
    })

    setReposPerYear(dates)
  }, [repos, setReposPerYear])

  return (
    <DivContainer>
      <DivBlock>
        <Avatar src={user.avatarUrl} />
        <User>
          <Name>{user.name}</Name>
          <Username>{user.login}</Username>
        </User>
        <Location>{user.location}</Location>
        {/************** TODO: view for repos per year **************/}
        <DivBlock>
          <CountRepos>Number of repositories per year</CountRepos>
          {Object.entries(reposPerYear).map(([year, count]) => (
            <Badge key={year} year={year} count={count} />
          ))}
        </DivBlock>
      </DivBlock>
    </DivContainer>
  )
})

const mapStateToProps = state => ({
  user: state.user.user,
  repos: state.user.userRepos
})

export default connect(
  mapStateToProps,
  null
)(Card)
