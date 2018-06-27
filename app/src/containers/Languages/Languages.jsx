import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/Card';
import Fieldset from '../../components/Fieldset';
import Language from './Language';

const Languages = ({ languages }) => (
  <Card>
    <Fieldset legend="Languages :">
      <div>
        {languages.map((language, index) => (
          <Language key={JSON.stringify(language)} index={index} {...language} />
        ))}
      </div>
    </Fieldset>
  </Card>
);

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    languageName: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(
  state => ({
    languages: state.languages,
  }),
  dispatch => bindActionCreators({}, dispatch),
)(Languages);
