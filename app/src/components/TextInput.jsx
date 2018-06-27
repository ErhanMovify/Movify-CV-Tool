import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';
import Helper from './Helper';

export const Container = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`;

const Input = styled.input`
  flex-grow: 1
`;

export const Label = styled.label`
  width: 150px;
  text-align: right;
  padding-right: 10px;
  color: ${p => p.theme.colors.main};
`;

export const Optional = styled.span`
  font-size: 8pt;
  color: #CCC;
  font-style: italic;
`;

export default class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    help: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    onChange: () => {
    },
    required: false,
    help: null,
  };

  onChange = (event) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render() {
    const {
      label, onChange, required, help, ...props
    } = this.props;
    const id = uuid.v4();
    return (
      <Container>
        <Label htmlFor={id}>
          {help && <Helper text={help} />}
          {label}
          {!required && (
            <Optional>
              <br />
              optional
            </Optional>
          )}
        </Label>
        <Input id={id} type="text" onChange={this.onChange} required={required} {...props} />
      </Container>
    );
  }
}
