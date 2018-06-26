import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid'

import {Container, Label, Optional} from './TextInput'
import Helper from "./Helper";

const TextArea = styled.textarea`
  flex-grow: 1;
  min-height: ${p => p.height}px;
  border: 1px solid ${p => p.theme.colors.lightGrey}
`;

export default class Textarea extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    height: PropTypes.number,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    help: PropTypes.string,
  }

  static defaultProps = {
    label: null,
    height: 80,
    onChange: () => {}
  }

  onChange = event => this.props.onChange(event.target.value)

  render() {
    const {label, onChange, height, required, help, ...props} = this.props
    const id = uuid.v4();

    return (
      <Container>
        {label && <Label htmlFor={id}>
          {help && <Helper text={help}/>}
          {label}
          {!required && <Optional><br/>optional</Optional>}
          </Label>
        }
        <TextArea id={id} onChange={this.onChange} height={height} required={required} {...props}/>
      </Container>
    )
  }
}
