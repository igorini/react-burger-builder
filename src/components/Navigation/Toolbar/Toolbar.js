import React from 'react'
import * as Styled from './styled'
import DrawerToggle from 'components/Navigation/SideDrawer/DrawerToggle/DrawerToggle'
import Logo from 'components/Logo/Logo'
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems'

const Toolbar = (props) => (
  <Styled.Toolbar>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Styled.Logo>
      <Logo />
    </Styled.Logo>
    <Styled.DesktopOnly>
      <NavigationItems signedIn={props.signedIn} />
    </Styled.DesktopOnly>
  </Styled.Toolbar>
)

export default Toolbar
