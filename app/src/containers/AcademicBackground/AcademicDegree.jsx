import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput';
import * as academicBackgroundActions from '../../reducers/academicBackgrounds';

class AcademicDegree extends Component {
  static propTypes = {
    background: PropTypes.shape({
      degree: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      grade: PropTypes.string,
      option: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
    updateBackgroundAtIndex: PropTypes.func.isRequired,
  };

  onChange = (field, value) => {
    const { background, index, updateBackgroundAtIndex } = this.props;
    const newBackground = { ...background };
    newBackground[field] = value;
    updateBackgroundAtIndex(newBackground, index);
  };

  render() {
    const { background } = this.props;
    return (
      <div>
        <TextInput
          required
          label="Degree"
          type="text"
          name="degree"
          value={background.degree}
          onChange={value => this.onChange('degree', value)}
        />
        <TextInput
          required
          label="Location"
          type="text"
          name="location"
          value={background.location}
          onChange={value => this.onChange('location', value)}
        />
        <TextInput
          required
          label="Period"
          type="text"
          name="period"
          value={background.period}
          onChange={value => this.onChange('period', value)}
        />
        <TextInput
          label="Grade"
          type="text"
          name="grade"
          value={background.grade}
          onChange={value => this.onChange('grade', value)}
        />
        <TextInput
          label="Option"
          type="text"
          name="option"
          value={background.option}
          onChange={value => this.onChange('option', value)}
        />
      </div>
    );
  }
}

export default connect(
  (state, { index }) => ({
    background: state.academicBackgrounds[index],
  }),
  dispatch => bindActionCreators({
    updateBackgroundAtIndex: academicBackgroundActions.updateBackgroundAtIndex,
  }, dispatch),
)(AcademicDegree);
