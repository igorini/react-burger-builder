import React, { useState } from 'react'
import * as Styled from './styled'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerHandler = () => setShowSideDrawer(false)
  const sideDrawerToggleHandler = () =>
    setShowSideDrawer((prevState) => !prevState)

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerHandler} />
      <Styled.Content>{props.children}</Styled.Content>
    </>
  )
}

export default Layout
