import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`

export const DivBlock = styled.div`
  /* background-color : #FFE4C4; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const Imagem = styled.img`
  flex: 1 1 272px;
  width: 272px;
  max-height: 271px;
  height: 271px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

export const DivText = styled.div`
  text-align: center;
  border: 1px solid #e1e4e8;
  padding: 10px;
  border-radius: 3px;
  width: 250px;
`

export const SpanButton = styled.span`
  background-color: #e1e4e9;
  width: 250px;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  border-radius: 3px;

  :hover {
    background-color: #cdc5bf;
    cursor: pointer;
  }
`
