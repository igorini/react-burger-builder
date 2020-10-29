import React from 'react'
import * as Styled from './styled'
import Backdrop from 'components/UI/Backdrop/Backdrop'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'

const SideDrawer = (props) => (
  <>
    <Backdrop show={props.open} clicked={props.closed} />
    <Styled.SideDrawer drawerAction={props.open ? 'open' : 'close'}>
      <Styled.Logo>
        <Logo />
      </Styled.Logo>
      <nav>
        <NavigationItems signedIn={props.signedIn} />
      </nav>
    </Styled.SideDrawer>
  </>
)

export default SideDrawer
