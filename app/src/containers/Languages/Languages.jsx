import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as languagesActions from '../../reducers/languages';
import Card from '../../components/Card';
import Fieldset from '../../components/Fieldset';
import Toolbar from '../../components/Toolbar';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Language from './Language';

const Languages = ({ addLanguage, languagesCount }) => {
  const languages = [];
  for (let i = 0; i < languagesCount; i += 1) {
    languages.push(<Language key={i} index={i} />);
  }
  return (
    <Card>
      <Fieldset legend="Languages :">
        <div>
          {languages}
        </div>
      </Fieldset>
      <Toolbar style={{ 'padding-bottom': '40px' }}>
        <PrimaryButton type="button" onClick={() => addLanguage()}>
          + Add a new language
        </PrimaryButton>
      </Toolbar>
    </Card>
  );
};

Languages.propTypes = {
  addLanguage: PropTypes.func.isRequired,
  languagesCount: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    languagesCount: state.languages.length,
  }),
  dispatch => bindActionCreators({ addLanguage: languagesActions.addLanguage }, dispatch),
)(Languages);
