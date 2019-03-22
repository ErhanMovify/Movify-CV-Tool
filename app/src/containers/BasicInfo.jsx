import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Card from '../components/Card';
import Fieldset from '../components/Fieldset';
import TextInput from '../components/TextInput';
import Textarea from '../components/Textarea';
import * as basicInfoActions from '../reducers/basicInfo';

const BasicInfo = (
  {
    firstName,
    lastName,
    position,
    executiveSummary,
    setFirstName,
    setLastName,
    setPosition,
    setExecutiveSummary,
  },
) => (
  <Card>
    <Fieldset legend="Information:">
      <TextInput
        label="First name"
        name="firstName"
        value={firstName}
        onChange={setFirstName}
        required
      />
      <TextInput
        label="Last name"
        name="lastName"
        value={lastName}
        onChange={setLastName}
        required
      />
      <TextInput
        label="Position"
        name="position"
        value={position}
        onChange={setPosition}
        required
      />
    </Fieldset>
    <Fieldset legend="Executive summary">
      <Textarea
        name="executiveSummary"
        height={170}
        maxLength={2500}
        value={executiveSummary}
        onChange={setExecutiveSummary}
        required
      />
    </Fieldset>
  </Card>
);

BasicInfo.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  executiveSummary: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  setLastName: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  setExecutiveSummary: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    firstName: state.basicInfo.firstName,
    lastName: state.basicInfo.lastName,
    position: state.basicInfo.position,
    executiveSummary: state.basicInfo.executiveSummary,
  }),
  dispatch => bindActionCreators({
    setFirstName: basicInfoActions.setFirstName,
    setLastName: basicInfoActions.setLastName,
    setPosition: basicInfoActions.setPosition,
    setExecutiveSummary: basicInfoActions.setExecutiveSummary,
  }, dispatch),
)(BasicInfo);
