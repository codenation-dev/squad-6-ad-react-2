import React from 'react'
import { DivContainer, ImgLoading } from './styled'
import spinner from '../../assets/spinner.svg'

export default function Loading () {
  return (
    <DivContainer>
      <ImgLoading src={spinner} />
    </DivContainer>
  )
}
