import React from 'react'
import { New, Img } from './style'

import repository from '../../assets/repository.svg'

export default function ButtonNew () {
  return (
    <New type='button'>
      <Img src={repository} /> New
    </New>
  )
}
