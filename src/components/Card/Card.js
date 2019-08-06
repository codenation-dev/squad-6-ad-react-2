import React from 'react'
import { connect } from 'react-redux'
import {
  Avatar,
  DivBlock,
  DivContainer,
  Name,
  Location,
  User,
  Username
} from './style'

function Card ({ user }) {
  return (
    <DivContainer>
      <DivBlock>
        <Avatar src={user.avatarUrl} />
        <User>
          <Name>{user.name}</Name>
          <Username>{user.login}</Username>
        </User>
        <Location>{user.location}</Location>
      </DivBlock>
    </DivContainer>
  )
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(
  mapStateToProps,
  null
)(Card)
