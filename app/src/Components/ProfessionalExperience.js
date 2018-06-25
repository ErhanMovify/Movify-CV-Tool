import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from './TextInput'
import TextArea from './Textarea'
import Toolbar from './Toolbar'
import SecondaryButton from './SecondaryButton'
import {bindActionCreators} from 'redux'
import {
  moveExperienceAtIndexDown,
  moveExperienceAtIndexUp,
  removeExperienceAtIndex,
  updateExperienceAtIndex
} from '../reducers/professionalExperiences'
import {connect} from 'react-redux'

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`

class ProfessionalExperience extends React.Component {

  static propTypes = {
    experience: PropTypes.shape({
      companyName: PropTypes.string,
      role: PropTypes.string,
      methodology: PropTypes.string,
      tasks: PropTypes.string,
      tools: PropTypes.string,
      period: PropTypes.string
    }),
    index: PropTypes.number.isRequired,
    amountOfExperiences: PropTypes.number.isRequired,

    updateExperienceAtIndex: PropTypes.func.isRequired,
    removeExperienceAtIndex: PropTypes.func.isRequired,
    moveExperienceAtIndexUp: PropTypes.func.isRequired,
  }

  onChange = (field, value) => {
    const experience = {...this.props.experience};
    experience[field] = value;
    this.props.updateExperienceAtIndex(experience, this.props.index);
  }

  remove = () => {
    this.props.removeExperienceAtIndex(this.props.index);
  }

  moveUp = () => {
    this.props.moveExperienceAtIndexUp(this.props.index);
  }

  moveDown = () => {
    this.props.moveExperienceAtIndexDown(this.props.index);
  }

  render() {
    const { experience, amountOfExperiences, index } = this.props;
    return (
      <Container>
        <TextInput label="Company name" type="text" name="companyName" value={experience.companyName}
                   onChange={value => this.onChange('companyName', value)}/>
        <TextInput label="Role" type="text" name="role" value={experience.role}
                   onChange={value => this.onChange('role', value)}/>
        <TextInput label="Period" type="text" name="period" value={experience.period}
                   onChange={value => this.onChange('period', value)}/>
        <TextArea label="Tasks" name="tasks" value={experience.tasks}
                  onChange={value => this.onChange('tasks', value)}/>

        <TextInput label="Methodology" type="text" name="methodology" value={experience.methodology}
                   onChange={value => this.onChange('methodology', value)}/>
        <TextInput label="Tools" type="text" name="tools" value={experience.tools}
                   onChange={value => this.onChange('tools', value)}/>
        <Toolbar>
          <div style={{alignSelf: 'flex-start'}}>
            {index !== 0 && <SecondaryButton type="button" onClick={this.moveUp}>
              ⬆ Move up
            </SecondaryButton>}
            {index !== amountOfExperiences - 1 &&
            <SecondaryButton type="button" onClick={this.moveDown}>
              ⬇ Move down
            </SecondaryButton>}
          </div>
          <SecondaryButton type="button" onClick={this.remove}>
            Remove this experience
          </SecondaryButton>
        </Toolbar>
      </Container>
    )
  }
}


export default connect(
  (state, props) => ({
    experience: state.professionalExperiences[props.index],
    amountOfExperiences: state.professionalExperiences.length,
  }),
  dispatch => bindActionCreators({
    updateExperienceAtIndex,
    removeExperienceAtIndex,
    moveExperienceAtIndexUp,
    moveExperienceAtIndexDown
  }, dispatch)
)(ProfessionalExperience)

