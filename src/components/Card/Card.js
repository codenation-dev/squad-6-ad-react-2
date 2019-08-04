import React from 'react'
import {
  Avatar,
  DivBlock,
  DivContainer,
  EditProfile,
  Name,
  Location,
  User,
  Username
} from './style'

export default function Card () {
  return (
    <DivContainer>
      <DivBlock>
        <Avatar />
        <User>
          <Name>Jorge da Silva Guimarães</Name>
          <Username>jorgedasilva</Username>
        </User>
        <EditProfile>Edit profile</EditProfile>
        <Location>Belém - Pará - Brazil</Location>
      </DivBlock>
    </DivContainer>
  )
}
