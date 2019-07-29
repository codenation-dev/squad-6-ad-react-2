import React, { useState, useEffect, useRef } from 'react'

import {
  Anchor,
  ButtonNew,
  Div,
  Head,
  Img,
  Input,
  Label,
  Li,
  MenuLink,
  Span,
  Ul
} from './styles'

import logo from './assets/logo.svg'
import slash from './assets/search-key-slash.svg'
import repository from './assets/repository.svg'

function SearchRepositories () {
  return (
    <Ul>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
      <Li>
        <Anchor>
          <Img src={repository} />
          <Span repository>user/repository-name</Span>
          <Span jump>Jump to ↵</Span>
        </Anchor>
      </Li>
    </Ul>
  )
}

const useFocus = ref => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const onFocus = () => setState(true)
    const onBlur = () => setState(false)
    ref.current.addEventListener('focus', onFocus)
    ref.current.addEventListener('blur', onBlur)
  })

  return state
}

export default function Header () {
  const ref = useRef()
  const focused = useFocus(ref)

  return (
    <Head>
      <Div>
        <MenuLink href='#'>
          <Img logo src={logo} alt={'Github logo'} />
        </MenuLink>
      </Div>

      <Div links>
        <Div input className={`app ${focused && 'is-focused'}`}>
          <Label>
            <Input type='text' ref={ref} placeholder='Search or jump to...' />
            {!focused && <Img src={slash} alt={'Slash bar'} />}
          </Label>
          {focused && <SearchRepositories />}
        </Div>

        <MenuLink>Pull Requests</MenuLink>
        <MenuLink>Issues</MenuLink>
        <MenuLink>Marketplace</MenuLink>
        <MenuLink>Explore</MenuLink>
      </Div>

      <ButtonNew type='button'>
        <Img src={repository} /> New
      </ButtonNew>
    </Head>
  )
}
