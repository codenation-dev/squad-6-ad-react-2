import React from 'react'
import { Application } from './style'
import Container from '../../components/Container/Container'

export default function Main ({ ...data }) {
  return (
    <Application>
      <Container {...data} />
    </Application>
  )
}
