import React from 'react'
import * as Styled from './styled'

const BuildControl = (props) => (
  <Styled.BuildControl>
    <Styled.Label>{props.label}</Styled.Label>
    <Styled.More onClick={props.added}>More</Styled.More>
    <Styled.Less onClick={props.removed} disabled={props.disabled}>
      Less
    </Styled.Less>
  </Styled.BuildControl>
)

export default BuildControl
