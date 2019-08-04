import React from 'react'
import { RepositoriesList, Name, Description, Details, Detail } from './style'

export default function Repository ({ repository }) {
  return (
    <RepositoriesList>
      <Name>{repository.name}</Name>
      <Description>{repository.description} </Description>
      <Details>
        <Detail>{repository.language} </Detail>
        <Detail> Updated on {repository.created_data} </Detail>
      </Details>
    </RepositoriesList>
  )
}
