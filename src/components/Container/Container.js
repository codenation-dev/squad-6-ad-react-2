import React from 'react'
import { Content } from './style'
import Card from '../Card/Card'
import Section from '../Section/Section'

export default function Container ({ ...data }) {
  return (
    <Content>
      <Card />
      <Section {...data} />
    </Content>
  )
}
