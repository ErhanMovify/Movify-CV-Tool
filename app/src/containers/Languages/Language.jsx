import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import * as languagesActions from '../../reducers/languages';

const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const SelectContainer = styled.div`
  margin: 0 10px;
`;

const Language = ({
  languageName,
  level,
  index,
  setLanguageLevelForIndex,
}) => (
  <Container>
    <b>
      {languageName}
    </b>
    :
    <SelectContainer>
      <select
        value={level}
        onChange={event => setLanguageLevelForIndex(index, event.target.value)}
      >
        <option value="None">
          None
        </option>
        <option value="Basic knowledge">
          Basic knowledge
        </option>
        <option value="Intermediate">
          Intermediate
        </option>
        <option value="Good">
          Good
        </option>
        <option value="Very good">
          Very good
        </option>
        <option value="Mother language">
          Mother language
        </option>
      </select>
    </SelectContainer>
  </Container>
);

Language.propTypes = {
  languageName: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setLanguageLevelForIndex: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    setLanguageLevelForIndex: languagesActions.setLanguageLevelForIndex,
  }, dispatch),
)(Language);
