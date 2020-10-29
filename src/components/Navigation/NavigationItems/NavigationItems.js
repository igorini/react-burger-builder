import React from 'react'
import * as Styled from './styled'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
  <Styled.NavigationItems>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {!props.signedIn ? (
      <NavigationItem link="/auth">Sign in</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </Styled.NavigationItems>
)

export default NavigationItems
