import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import QuestionMarkIcon from 'react-icons/lib/fa/question-circle-o';

const Container = styled.span`
  color: ${p => p.theme.colors.main};
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
`;

const Helper = ({ text }) => (
  <Container data-tip={text}>
    <QuestionMarkIcon />
  </Container>
);

Helper.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Helper;
