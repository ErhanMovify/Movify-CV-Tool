import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

import { Container, Label, Optional } from './TextInput';
import Helper from './Helper';

const Textarea = styled.textarea`
  flex-grow: 1;
  min-height: ${p => p.height}px;
  border: 1px solid ${p => p.theme.colors.lightGrey}
`;

const TextArea = ({
  label,
  onChange,
  height,
  required,
  help,
  ...props
}) => {
  const id = uuid.v4();
  return (
    <Container>
      {label && (
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
      )}
      <Textarea
        id={id}
        onChange={event => onChange(event.target.value)}
        height={height}
        required={required}
        {...props}
      />
    </Container>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  help: PropTypes.string,
};

TextArea.defaultProps = {
  label: null,
  height: 80,
  onChange: () => {
  },
  required: false,
  help: null,
};

export default TextArea;
