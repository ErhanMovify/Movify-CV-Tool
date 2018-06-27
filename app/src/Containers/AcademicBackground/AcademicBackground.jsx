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
  academicBackground,
  addAcademicBackground,
  removeAcademicBackgroundAtIndex,
  moveBackgroundAtIndexUp,
  moveBackgroundAtIndexDown,
}) => (
  <Card>
    <Fieldset legend="Academic background:">
      <ReorderableComponentsList
        itemTypeLabel="background"
        list={academicBackground}
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
  academicBackground: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addAcademicBackground: PropTypes.func.isRequired,
  removeAcademicBackgroundAtIndex: PropTypes.func.isRequired,
  moveBackgroundAtIndexUp: PropTypes.func.isRequired,
  moveBackgroundAtIndexDown: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    academicBackground: state.academicBackground,
  }),
  dispatch => bindActionCreators({
    addAcademicBackground: academicBackgroundActions.addAcademicBackground,
    removeAcademicBackgroundAtIndex: academicBackgroundActions.removeAcademicBackgroundAtIndex,
    moveBackgroundAtIndexUp: academicBackgroundActions.moveBackgroundAtIndexUp,
    moveBackgroundAtIndexDown: academicBackgroundActions.moveBackgroundAtIndexDown,
  }, dispatch),
)(AcademicBackground);
