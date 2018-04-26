import React from 'react'
import styled from 'styled-components';
import {Container, Label} from './TextInput'

const TextArea = styled.textarea`
  flex-grow: 1;
  min-height: 80px;
  border: 1px solid ${p => p.theme.colors.lightGrey};
  
  &:focus {
    
  }
`;

export default ({label, ...props}) => {
  return (
      <Container>
        {label && <Label>{label}</Label>}
        <TextArea {...props}/>
      </Container>
  )
}
