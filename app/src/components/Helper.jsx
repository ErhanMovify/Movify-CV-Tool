import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import QuestionMarkIcon from 'react-icons/lib/fa/question-circle-o';

const Container = styled.span`
  color: ${p => (p.lightMode ? 'white' : p.theme.colors.main)};
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
`;

const Helper = ({ lightMode, text }) => (
  <Container data-tip={text} lightMode={lightMode}>
    <QuestionMarkIcon />
  </Container>
);

Helper.propTypes = {
  lightMode: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Helper.defaultProps = {
  lightMode: false,
};

export default Helper;
