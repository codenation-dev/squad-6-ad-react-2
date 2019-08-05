import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const DivTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const DivBusca = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Form = styled.main`
  display: flex;
  /* flex: 1 1 auto; */
  /* justify-content: space-evenly; */
  padding: 16px 0;
  width: 100%;
`

export const InputText = styled.input`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  color: #24292e;
  font-size: 14px;
  line-height: 20px;
  margin: 0 10px;
  padding: 6px 8px;
  vertical-align: middle;
  width: 400px;

  :focus {
    border-color: #2188ff;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
      0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }
`

export const SelectType = styled.select`
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 0.25em;
  color: #24292e;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  margin: 0 10px;
  min-width: 100px;
  padding: 6px 12px;

  :hover {
    cursor: pointer;
  }
`

export const OptionType = styled.option`
  display: flex;
  margin-left: 10px;
`

export const SpanButton = styled.span`
  display: flex;
  background-color: #00cd00;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  margin: 10px;

  :hover {
    background-color: #008b00;
    cursor: pointer;
  }
`

export const Repos = styled.ul``

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
`

export const Link = styled.a`
  border: 2px solid transparent;
  border-bottom-color: ${props => (props.repo ? '#e36209' : '')};
  color: #586069;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: ${props => (props.repo ? '600' : '')};
  padding: 16px 8px;
  text-align: center;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid transparent;
    border-bottom-color: #d1d5da;
    color: #24292e;
    transition: 0.2s ease;
  }
`
