import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import TrashCanIcon from 'react-icons/lib/fa/trash-o';
import * as languagesActions from '../../reducers/languages';
import { Container, Label } from '../../components/TextInput'; //eslint-disable-line
import TextInput from '../../components/TextInput'; //eslint-disable-line
import Toolbar from '../../components/Toolbar';
import SecondaryButton from '../../components/Buttons/SecondaryButton';

const LanguageContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const LanguageNameContainer = styled.div`
  padding-top: 10px;
`;

const SelectContainer = styled.div`
  margin: 0 10px;
`;

const LanguageName = ({ languageName, isDefault, onChange }) => {
  if (isDefault) {
    return (
      <LanguageNameContainer>
        <Container>
          <Label>Language name</Label>
          <b>{languageName}</b>:
        </Container>
      </LanguageNameContainer>
    );
  }
  return (
    <LanguageNameContainer>
      <TextInput
        label="Language name"
        type="text"
        name="languageName"
        value={languageName}
        onChange={onChange}
        required
      />
    </LanguageNameContainer>
  );
};

LanguageName.propTypes = {
  languageName: PropTypes.string.isRequired,
  isDefault: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

class Language extends React.Component {
  static propTypes = {
    language: PropTypes.shape({
      languageName: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
      isDefault: PropTypes.bool,
    }).isRequired,
    index: PropTypes.number.isRequired,
    setLanguageLevelForIndex: PropTypes.func.isRequired,
    removeLanguageAtIndex: PropTypes.func.isRequired,
    updateLanguageAtIndex: PropTypes.func.isRequired,
  };

  onChange = (field, value) => {
    const {
      language: {
        languageName,
        level,
        isDefault,
      },
      index,
      updateLanguageAtIndex,
    } = this.props;
    const newLanguage = { languageName, level, isDefault };
    newLanguage[field] = value;
    updateLanguageAtIndex(newLanguage, index);
  }

  render() {
    const {
      language: {
        languageName,
        level,
        isDefault,
      },
      index,
      setLanguageLevelForIndex,
      removeLanguageAtIndex,
    } = this.props;
    return (
      <LanguageContainer>
        <LanguageName
          languageName={languageName}
          isDefault={!!isDefault}
          onChange={value => this.onChange('languageName', value)}
        />
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
        {!isDefault
          && (
            <Toolbar>
              <div style={{ float: 'left' }}>
                <SecondaryButton type="button" onClick={() => removeLanguageAtIndex(index)}>
                  <TrashCanIcon />
                </SecondaryButton>
              </div>
            </Toolbar>
          )}
      </LanguageContainer>
    );
  }
}

export default connect(
  (state, { index }) => ({
    language: state.languages[index],
  }),
  dispatch => bindActionCreators({
    removeLanguageAtIndex: languagesActions.removeLanguageAtIndex,
    updateLanguageAtIndex: languagesActions.updateLanguageAtIndex,
    setLanguageLevelForIndex: languagesActions.setLanguageLevelForIndex,
  }, dispatch),
)(Language);
