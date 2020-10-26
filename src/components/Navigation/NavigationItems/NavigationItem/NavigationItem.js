import React from 'react'
import * as Styled from './styled'
import { NavLink } from 'react-router-dom'

const NavigationItem = (props) => (
  <Styled.NavigationItem>
    <strong>
      <NavLink to={props.link} exact={props.exact} activeClassName="active">
        {props.children}
      </NavLink>
    </strong>
  </Styled.NavigationItem>
)

export default NavigationItem
