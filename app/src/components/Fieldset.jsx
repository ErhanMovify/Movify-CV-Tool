import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from './TextInput';

const FieldsetContainer = styled.fieldset`
  margin-bottom: 30px;
  border: none;
`;

const Legend = styled.legend`
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  font-size: 16pt;
  letter-spacing: 1px;
`;

const Container = styled.div`
  margin-bottom: 2em;
`;

const Fieldset = ({ hint, legend, children }) => (
  <FieldsetContainer>
    <Container>
      <Legend>
        {legend}
      </Legend>
      {!!hint && <Label>{hint}</Label>}
    </Container>
    {children}
  </FieldsetContainer>
);

Fieldset.propTypes = {
  hint: PropTypes.string,
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Fieldset.defaultProps = {
  hint: '',
};

export default Fieldset;
