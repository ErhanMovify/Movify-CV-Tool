import React from 'react';
import styled from 'styled-components'

const Fieldset = styled.div`
  margin-bottom: 30px;
`;

const Legend = styled.div`
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  margin-bottom: 1.5em;
  margin-top: 1em;
  font-size: 16pt;
  letter-spacing: 1px;
`

export default ({legend, children}) => (
    <Fieldset>
      <Legend>{legend}</Legend>
      {children}
    </Fieldset>
)
