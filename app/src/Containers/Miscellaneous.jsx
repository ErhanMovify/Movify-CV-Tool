import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/Card';
import Fieldset from '../components/Fieldset';
import Textarea from '../components/Textarea';
import * as miscellaneousActions from '../reducers/miscellaneous';
import Helper from '../components/Helper';

const Miscellaneous = ({ miscellaneous, setMiscellaneousInfo }) => (
  <Card>
    <Helper text="Tell us what you like to do.<br/>Playing hockey, listening to podcasts, playing video games, going to the cinema to watch old movies, etc." />
    <Fieldset legend="Miscellaneous:">
      <Textarea
        value={miscellaneous}
        onChange={setMiscellaneousInfo}
      />
    </Fieldset>
  </Card>
);

Miscellaneous.propTypes = {
  miscellaneous: PropTypes.string.isRequired,
  setMiscellaneousInfo: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    miscellaneous: state.miscellaneous,
  }),
  dispatch => bindActionCreators({
    setMiscellaneousInfo: miscellaneousActions.setMiscellaneousInfo,
  }, dispatch),
)(Miscellaneous);
