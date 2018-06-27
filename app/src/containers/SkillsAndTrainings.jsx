import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../components/Card';
import Fieldset from '../components/Fieldset';
import Textarea from '../components/Textarea';
import * as skillsAndTrainingsActions from '../reducers/skillsAndTrainings';

const SkillsAndTrainings = ({ skillsAndTrainings, setSkillsAndTrainings }) => (
  <Card>
    <Fieldset legend="Skills and trainings:">
      <Textarea
        value={skillsAndTrainings}
        onChange={setSkillsAndTrainings}
      />
    </Fieldset>
  </Card>
);

SkillsAndTrainings.propTypes = {
  skillsAndTrainings: PropTypes.string.isRequired,
  setSkillsAndTrainings: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    skillsAndTrainings: state.skillsAndTrainings,
  }),
  dispatch => bindActionCreators({
    setSkillsAndTrainings: skillsAndTrainingsActions.setSkillsAndTrainings,
  }, dispatch),
)(SkillsAndTrainings);
