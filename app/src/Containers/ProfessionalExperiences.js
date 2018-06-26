import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import ProfessionalExperience from '../Components/ProfessionalExperience'
import {addExperience, moveExperienceAtIndexDown, moveExperienceAtIndexUp, removeExperienceAtIndex} from '../reducers/professionalExperiences'
import ReorderableComponentsList from "../Components/ReorderableComponentsList";

class ProfessionalExperiences extends Component {

  static propTypes = {
    experiences: PropTypes.arrayOf(PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      role: PropTypes.string,
      tasks: PropTypes.string,
      methodology: PropTypes.string,
      tools: PropTypes.string,
      period: PropTypes.string,
    })).isRequired,

    addExperience: PropTypes.func.isRequired,
    moveExperienceAtIndexDown: PropTypes.func.isRequired,
    moveExperienceAtIndexUp: PropTypes.func.isRequired,
    removeExperienceAtIndex: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Professional experiences:">
          <ReorderableComponentsList
            itemTypeLabel={"experience"}
            list={this.props.experiences}
            addItem={this.props.addExperience}
            ListItemComponent={ProfessionalExperience}
            removeItemAtIndex={this.props.removeExperienceAtIndex}
            moveDownItemAtIndex={this.props.moveExperienceAtIndexDown}
            moveUpItemAtIndex={this.props.moveExperienceAtIndexUp}
          />
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
    moveExperienceAtIndexDown,
    moveExperienceAtIndexUp,
    removeExperienceAtIndex
  }, dispatch)
)(ProfessionalExperiences)
