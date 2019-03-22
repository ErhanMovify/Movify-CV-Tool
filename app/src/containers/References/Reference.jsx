import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput';
import * as referencesActions from '../../reducers/references';

class Reference extends React.Component {
  static propTypes = {
    reference: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
    updateReferenceAtIndex: PropTypes.func.isRequired,
  };

  onChange = (field, value) => {
    const { reference, index, updateReferenceAtIndex } = this.props;
    const newReference = { ...reference };
    newReference[field] = value;
    updateReferenceAtIndex(newReference, index);
  };

  render() {
    const { reference } = this.props;
    return (
      <div>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={reference.name}
          onChange={value => this.onChange('name', value)}
          required
        />
        <TextInput
          label="Email"
          type="email"
          name="email"
          value={reference.email}
          onChange={value => this.onChange('email', value)}
          required
        />
        <TextInput
          label="Phone"
          type="tel"
          name="phone"
          value={reference.phone}
          onChange={value => this.onChange('phone', value)}
          required
        />
      </div>
    );
  }
}

export default connect(
  (state, { index }) => ({
    reference: state.references[index],
  }),
  dispatch => bindActionCreators({
    updateReferenceAtIndex: referencesActions.updateReferenceAtIndex,
  }, dispatch),
)(Reference);
