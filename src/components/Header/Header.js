import React, { useState, useEffect, useRef } from 'react'
// import ButtonNew from '../ButtonNew/ButtonNew'
import {
  // Anchor,
  Div,
  Head,
  Img,
  Input,
  Label
  // Li,
  // MenuLink
  // Span,
  // Ul
} from './styles'

import logo from './assets/logo.svg'
import slash from './assets/search-key-slash.svg'
// import repository from './assets/repository.svg'
import { connect } from 'react-redux'
import { getUser } from '../../store/ducks/user'
import { bindActionCreators } from 'redux'

// function SearchRepositories () {
//   return (
//     <Ul>
//       <Li>
//         <Anchor>
//           <Img src={repository} />
//           <Span repository>user/repository-name</Span>
//           <Span jump>Jump to ↵</Span>
//         </Anchor>
//       </Li>
//       <Li>
//         <Anchor>
//           <Img src={repository} />
//           <Span repository>user/repository-name</Span>
//           <Span jump>Jump to ↵</Span>
//         </Anchor>
//       </Li>
//       <Li>
//         <Anchor>
//           <Img src={repository} />
//           <Span repository>user/repository-name</Span>
//           <Span jump>Jump to ↵</Span>
//         </Anchor>
//       </Li>
//     </Ul>
//   )
// }

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

function Header ({ getUser }) {
  const userSrc = useRef(null)
  const focused = useFocus(userSrc)

  const searchUser = () => {
    userSrc.current.blur()
    const login = userSrc.current.value
    if (!login) return

    getUser(login)
  }

  return (
    <Head>
      <Div>
        {/* <MenuLink href='#'> */}
        <Img logo src={logo} alt={'Github logo'} />
        {/* </MenuLink> */}
      </Div>

      <Div links>
        <Div input className={`app ${focused && 'is-focused'}`}>
          <Label>
            <Input
              type='text'
              ref={userSrc}
              onKeyUp={e => e.which === 13 && searchUser()}
              placeholder='Search or jump to...'
            />
            {!focused && <Img src={slash} alt={'Slash bar'} />}
          </Label>
          {/* {focused && <SearchRepositories />} */}
        </Div>

        {/* <MenuLink>Pull Requests</MenuLink>
        <MenuLink>Issues</MenuLink>
        <MenuLink>Marketplace</MenuLink>
        <MenuLink>Explore</MenuLink> */}
      </Div>
      {/* <ButtonNew /> */}
    </Head>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Header)
