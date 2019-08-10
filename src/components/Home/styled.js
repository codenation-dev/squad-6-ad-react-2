import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 69px);
  width: 100%;
`

export const PTexto = styled.p`
  font-size: 40px;
  line-height: 20px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`
