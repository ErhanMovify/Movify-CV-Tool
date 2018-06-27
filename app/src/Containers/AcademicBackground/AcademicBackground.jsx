import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../../components/Card';
import Fieldset from '../../components/Fieldset';

import * as academicBackgroundActions from '../../reducers/academicBackground';

import AcademicDegree from './AcademicDegree';
import ReorderableComponentsList from '../../components/ReorderableComponentsList';

const AcademicBackground = ({
  amountOfBackgrounds,
  addAcademicBackground,
  removeAcademicBackgroundAtIndex,
  moveBackgroundAtIndexUp,
  moveBackgroundAtIndexDown,
}) => (
  <Card>
    <Fieldset legend="Academic background:">
      <ReorderableComponentsList
        itemTypeLabel="background"
        listLength={amountOfBackgrounds}
        addItem={addAcademicBackground}
        ListItemComponent={AcademicDegree}
        removeItemAtIndex={removeAcademicBackgroundAtIndex}
        moveDownItemAtIndex={moveBackgroundAtIndexDown}
        moveUpItemAtIndex={moveBackgroundAtIndexUp}
      />
    </Fieldset>
  </Card>
);

AcademicBackground.propTypes = {
  amountOfBackgrounds: PropTypes.number.isRequired,
  addAcademicBackground: PropTypes.func.isRequired,
  removeAcademicBackgroundAtIndex: PropTypes.func.isRequired,
  moveBackgroundAtIndexUp: PropTypes.func.isRequired,
  moveBackgroundAtIndexDown: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    amountOfBackgrounds: state.academicBackground.length,
  }),
  dispatch => bindActionCreators({
    addAcademicBackground: academicBackgroundActions.addAcademicBackground,
    removeAcademicBackgroundAtIndex: academicBackgroundActions.removeAcademicBackgroundAtIndex,
    moveBackgroundAtIndexUp: academicBackgroundActions.moveBackgroundAtIndexUp,
    moveBackgroundAtIndexDown: academicBackgroundActions.moveBackgroundAtIndexDown,
  }, dispatch),
)(AcademicBackground);
