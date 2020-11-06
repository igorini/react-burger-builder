import React from 'react'
import * as Styled from './styled'

const Backdrop = (props) =>
  props.show && <Styled.Backdrop onClick={props.clicked} />

export default Backdrop
