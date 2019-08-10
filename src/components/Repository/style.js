import styled from 'styled-components'

export const RepositoriesList = styled.li`
  border-bottom: 1px solid #e1e4e8;
  display: flex;
  flex-flow: column;
  margin: 20px 0;
`

export const ItemList = styled.li``

export const Name = styled.a`
  color: #0366d6;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  color: #586069;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin-bottom: 8px;
  max-width: 600px;
`

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`

export const Detail = styled.span`
  color: #586069;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
`
