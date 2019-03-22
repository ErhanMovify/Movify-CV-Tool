import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';

import { Label, Optional } from './TextInput';
import Helper from './Helper';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
`;

const Textarea = styled.textarea`
  flex-grow: 1;
  min-height: ${p => p.height}px;
  border: 1px solid ${p => p.theme.colors.lightGrey}
`;

const LengthIndicator = styled.div`
display:flex;
flex: 1;
  padding: 5px;
  justify-self: end;
`;

const TextArea = ({
  label,
  onChange,
  height,
  required,
  help,
  maxLength,
  value,
  ...props
}) => {
  const id = uuid.v4();
  return (
    <TopContainer>
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
      {!!maxLength
        && <LengthIndicator>{value.length || 0}/{maxLength}</LengthIndicator>
      }
    </TopContainer>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  help: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.string,
};

TextArea.defaultProps = {
  label: null,
  height: 80,
  onChange: () => {
  },
  required: false,
  help: null,
  maxLength: null,
  value: '',
};

export default TextArea;
