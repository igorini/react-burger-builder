import React from 'react'
import * as Styled from './styled'

const Input = (props) => {
  let inputElement
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <Styled.Input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          invalid={props.invalid}
          touched={props.touched}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <Styled.TextArea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          invalid={props.invalid}
          touched={props.touched}
        />
      )
      break
    case 'select':
      inputElement = (
        <Styled.Select
          value={props.value}
          onChange={props.changed}
          invalid={props.invalid}
          touched={props.touched}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </Styled.Select>
      )
      break
    default:
      inputElement = (
        <Styled.Input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          invalid={props.invalid}
          touched={props.touched}
        />
      )
  }

  return (
    <Styled.FormInput>
      <Styled.Label>{props.label}</Styled.Label>
      {inputElement}
    </Styled.FormInput>
  )
}

export default Input
