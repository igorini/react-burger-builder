import React, {useState} from 'react';
import * as Styled from './styled';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const sideDrawerHandler = () => setShowSideDrawer(false);
  const sideDrawerToggleHandler = () =>  setShowSideDrawer(prevState => !prevState)

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler}/>
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerHandler}/>
      <Styled.Content>
        {props.children}
      </Styled.Content>
    </>
  );
}

export default Layout;