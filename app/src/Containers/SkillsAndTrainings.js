import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Textarea from '../Components/Textarea'
import {setSkillsAndTrainings} from '../reducers/skillsAndTrainings'

class SkillsAndTrainings extends Component {

  static propTypes = {
    skillsAndTrainings: PropTypes.string.isRequired,

    setSkillsAndTrainings: PropTypes.func.isRequired,
  }

  render () {
    return (
      <Card>
        <Fieldset legend="Skills and trainings:">
          <Textarea
            value={this.props.skillsAndTrainings}
            onChange={this.props.setSkillsAndTrainings}
          />
        </Fieldset>
      </Card>
    )
  }
}

export default connect(
  state => ({
    skillsAndTrainings: state.skillsAndTrainings
  }),
  dispatch => bindActionCreators({
    setSkillsAndTrainings,
  }, dispatch)
)(SkillsAndTrainings)
