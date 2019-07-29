import styled from 'styled-components'

export const Head = styled.header`
  align-content: center;
  align-items: center;
  display: flex;
  background-color: #24292e;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 600;
  justify-items: space-around;
  padding: 16px;
`

export const Div = styled.div`
  align-items: ${props => (props.input ? '' : 'center')};
  display: flex;
  margin: 0 2px;

  flex-grow: ${props => (props.links ? '4' : '0')};
  flex-direction: ${props => (props.input ? 'column' : 'row')};
`

export const Img = styled.img`
  padding-right: ${props => (props.logo ? '16px' : '5px')};
`

export const Label = styled.label`
  background-color: hsla(0, 0%, 100%, 0.125);
  border: 0;
  border-radius: 3px;
  display: flex;
  margin-right: 8px !important;
  vertical-align: middle;
`

export const Input = styled.input`
  type: ${props => props.type};
  placeholder: ${props => props.placeholder};

  background: none;
  border: none 2px;
  border-radius: 3px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  height: 28px;
  padding: 0 3px;
  transition: 250ms;
  width: 280px;

  :focus {
    background: #fff;
    color: #000;
    outline: none;
    width: 440px;
  }
`

export const ButtonNew = styled.button`
  align-items: center;
  background: linear-gradient(180deg, rgb(90, 190, 87) 0, rgb(53, 146, 56) 100%),
    rgb(90, 190, 87);
  border: 1px solid #0f9b0f;
  border-radius: 3px;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.3);
  color: #fff;
  cursor: pointer;
  display: flex;
  font: normal 12px Arial, Helvetica, sans-serif;
  font-weight: 600;
  justify-content: center;
  outline: none;
  padding: 5px 10px;
  text-shadow: 0 1px 2px rgb(50, 114, 40);
  transform-origin: 50% 50% 0;
  z-index: auto;

  :hover {
    background: rgb(90, 190, 87);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
    transition: all 150ms cubic-bezier(0.42, 0, 0.58, 1);

    :active {
      border: 1px solid rgba(180, 180, 180, 0.2);
      background: rgba(77, 168, 74, 1);
      box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1) inset;
      text-shadow: 0 1px 2px rgb(50, 114, 40);
    }
  }
`

export const MenuLink = styled.a`
  href: ${props => props.href};

  cursor: pointer;
  margin-right: 16px !important;
`

export const Ul = styled.ul`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  margin-top: 30px;
  position: absolute !important;
  vertical-align: middle;
  width: 440px;
`

export const Li = styled.li`
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  color: #1b1f23;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  justify-content: flex-start;
  line-height: 20px;
  list-style-type: none;
  text-align: left;
  width: 100%;

  :last-child {
    border-bottom: 0;
  }

  :hover {
    background-color: #0366d6;
    color: #fff;
  }
`

export const Anchor = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
`

export const Span = styled.span`
  background-color: ${props => (props.jump ? '#f6f8fa' : '')};
  border: ${props => (props.jump ? '1px solid #e1e4e8' : '')};
  border-radius: ${props => (props.jump ? '3px' : '')};
  color: ${props => (props.jump ? '#6a737d' : '')};
  flex-grow: ${props => (props.repository ? '25' : '1')};
  font-size: ${props => (props.jump ? '12px' : '14px')};
  padding: 3px 4px;
`

// align-items: ${props => (props.input ? '' : 'center')};
