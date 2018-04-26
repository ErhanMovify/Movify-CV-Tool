import React from 'react'
import styled from 'styled-components'
import uuid from 'uuid'

export const Container = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 10px;
`

const Input = styled.input`
  flex-grow: 1
`

export const Label = styled.label`
  width: 150px;
  text-align: right;
  padding-right: 10px;
  color: ${p => p.theme.colors.main};
`

export default ({label, ...props}) => {
  const id = uuid.v4();
  return (
      <Container>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type="text" {...props}/>
      </Container>
  )
}
