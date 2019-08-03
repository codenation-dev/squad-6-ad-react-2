import styled from 'styled-components'

export const Content = styled.section`
  /* background-color : white; */
  display: flex;
  flex: wrap;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
