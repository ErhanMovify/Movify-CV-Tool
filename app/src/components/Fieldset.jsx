import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FieldsetContainer = styled.fieldset`
  margin-bottom: 30px;
  border: none;
`;

const Legend = styled.legend`
  text-transform: uppercase;
  color: ${p => p.theme.colors.main};
  margin-bottom: 1.5em;
  margin-top: 1em;
  font-size: 16pt;
  letter-spacing: 1px;
`;

const Fieldset = ({ legend, children }) => (
  <FieldsetContainer>
    <Legend>
      {legend}
    </Legend>
    {children}
  </FieldsetContainer>
);

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Fieldset;
