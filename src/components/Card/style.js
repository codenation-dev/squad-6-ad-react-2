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

export const Avatar = styled.img`
  flex: 1 1 272px;
  width: 272px;
  max-height: 271px;
  height: 271px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

export const User = styled.div`
  display: block;
  padding: 10px 0;
`
export const Name = styled.p`
  border-radius: 3px;
  color: #24292e;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
  width: 235px;
`

export const Username = styled.p`
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 0;
`

export const Location = styled.p`
  color: #24292e;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
`

export const EditProfile = styled.span`
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  background-position: -1px -1px;
  background-repeat: repeat-x;
  background-size: 110% 110%;
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  color: #24292e;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 8px 0 16px 0;
  padding: 6px 12px;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  width: 235px;
  :active {
    background-color: #e9ecef;
    background-image: none;
    border-color: rgba(27, 31, 35, 0.35);
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
  }
  :hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    background-position: -0.5em;
    border-color: rgba(27, 31, 35, 0.35);
  }
`

export const CountRepos = styled.h3`
  color: #24292e;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin: 18px 0 10px 0;
  text-align: center;
`
