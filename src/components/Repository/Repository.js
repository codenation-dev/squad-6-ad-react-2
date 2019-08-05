import React from 'react'
import { RepositoriesList, Name, Description, Details, Detail } from './style'

export default function Repository ({ repository }) {
  return (
    <RepositoriesList>
      <Name>{repository.name}</Name>
      <Description>{repository.description} </Description>
      <Details>
        <Detail>{repository.primaryLanguage.name} </Detail>
        <Detail>
          Created on {new Date(repository.createdAt).toLocaleDateString()}
        </Detail>
      </Details>
    </RepositoriesList>
  )
}
