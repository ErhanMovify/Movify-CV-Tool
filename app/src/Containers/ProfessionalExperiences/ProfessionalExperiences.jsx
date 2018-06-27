import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import Fieldset from '../../components/Fieldset';
import ReorderableComponentsList from '../../components/ReorderableComponentsList';
import * as professionalExperiencesActions from '../../reducers/professionalExperiences';
import ProfessionalExperience from './ProfessionalExperience';

const ProfessionalExperiences = ({
  amountOfExperiences,
  addExperience,
  removeExperienceAtIndex,
  moveExperienceAtIndexDown,
  moveExperienceAtIndexUp,
}) => (
  <Card>
    <Fieldset legend="Professional experiences:">
      <ReorderableComponentsList
        itemTypeLabel="experience"
        listLength={amountOfExperiences}
        addItem={addExperience}
        ListItemComponent={ProfessionalExperience}
        removeItemAtIndex={removeExperienceAtIndex}
        moveDownItemAtIndex={moveExperienceAtIndexDown}
        moveUpItemAtIndex={moveExperienceAtIndexUp}
      />
    </Fieldset>
  </Card>
);

ProfessionalExperiences.propTypes = {
  amountOfExperiences: PropTypes.number.isRequired,
  addExperience: PropTypes.func.isRequired,
  moveExperienceAtIndexDown: PropTypes.func.isRequired,
  moveExperienceAtIndexUp: PropTypes.func.isRequired,
  removeExperienceAtIndex: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    amountOfExperiences: state.professionalExperiences.length,
  }),
  dispatch => bindActionCreators({
    addExperience: professionalExperiencesActions.addExperience,
    moveExperienceAtIndexDown: professionalExperiencesActions.moveExperienceAtIndexDown,
    moveExperienceAtIndexUp: professionalExperiencesActions.moveExperienceAtIndexUp,
    removeExperienceAtIndex: professionalExperiencesActions.removeExperienceAtIndex,
  }, dispatch),
)(ProfessionalExperiences);
