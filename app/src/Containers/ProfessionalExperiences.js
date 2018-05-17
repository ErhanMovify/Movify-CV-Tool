import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Toolbar from '../Components/Toolbar'
import PrimaryButton from '../Components/PrimaryButton'
import ProfessionalExperience from '../Components/ProfessionalExperience'
import {addExperience, updateExperienceAtIndex, removeExperienceAtIndex} from '../reducers/professionalExperiences'

class ProfessionalExperiences extends Component {

  static propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      tasks: PropTypes.string.isRequired,
      methodology: PropTypes.string.isRequired,
      tools: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
    })).isRequired,

    addExperience: PropTypes.func.isRequired,
    updateExperienceAtIndex: PropTypes.func.isRequired,
    removeExperienceAtIndex: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Professional experiences:">
          <Toolbar>
            <PrimaryButton type="button" onClick={this.props.addExperience}>Add experience</PrimaryButton>
          </Toolbar>
          {this.props.experiences.map((experience, index) => (
            <ProfessionalExperience
              key={index}
              experience={experience}
              onChange={experience => this.props.updateExperienceAtIndex(experience, index)}
              onRemove={() => this.props.removeExperienceAtIndex(index)}
            />
          ))}
        </Fieldset>
      </Card>
    )
  }
}

export default connect(
  state => ({
    experiences: state.professionalExperiences
  }),
  dispatch => bindActionCreators({
    addExperience,
    updateExperienceAtIndex,
    removeExperienceAtIndex
  }, dispatch)
)(ProfessionalExperiences)
