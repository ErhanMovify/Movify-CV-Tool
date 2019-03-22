import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import Fieldset from '../../components/Fieldset';
import ReorderableComponentsList from '../../components/ReorderableComponentsList';
import * as referencesActions from '../../reducers/references';
import Reference from './Reference';

const References = ({
  amountOfReferences,
  addReference,
  removeReferenceAtIndex,
  moveReferenceAtIndexDown,
  moveReferenceAtIndexUp,
}) => (
  <Card>
    <Fieldset legend="References:" hint="Add 3 references">
      <ReorderableComponentsList
        itemTypeLabel="reference"
        listLength={amountOfReferences}
        addItem={addReference}
        ListItemComponent={Reference}
        removeItemAtIndex={removeReferenceAtIndex}
        moveDownItemAtIndex={moveReferenceAtIndexDown}
        moveUpItemAtIndex={moveReferenceAtIndexUp}
      />
    </Fieldset>
  </Card>
);

References.propTypes = {
  amountOfReferences: PropTypes.number.isRequired,
  addReference: PropTypes.func.isRequired,
  moveReferenceAtIndexDown: PropTypes.func.isRequired,
  moveReferenceAtIndexUp: PropTypes.func.isRequired,
  removeReferenceAtIndex: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    amountOfReferences: state.references.length,
  }),
  dispatch => bindActionCreators({
    addReference: referencesActions.addReference,
    moveReferenceAtIndexDown: referencesActions.moveReferenceAtIndexDown,
    moveReferenceAtIndexUp: referencesActions.moveReferenceAtIndexUp,
    removeReferenceAtIndex: referencesActions.removeReferenceAtIndex,
  }, dispatch),
)(References);
