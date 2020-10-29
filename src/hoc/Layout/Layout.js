import React, { useState } from 'react'
import * as Styled from './styled'
import { connect } from 'react-redux'
import Toolbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerHandler = () => setShowSideDrawer(false)
  const sideDrawerToggleHandler = () =>
    setShowSideDrawer((prevState) => !prevState)

  return (
    <>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        signedIn={props.signedIn}
      />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerHandler}
        signedIn={props.signedIn}
      />
      <Styled.Content>{props.children}</Styled.Content>
    </>
  )
}

const mapStateToProps = (state) => ({
  signedIn: state.auth.token !== null,
})

export default connect(mapStateToProps)(Layout)
