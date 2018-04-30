import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from './TextInput'
import TextArea from './Textarea'
import PrimaryButton from './PrimaryButton'
import Toolbar from './Toolbar'

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`

export default class ProfessionalExperience extends React.Component {

  static propTypes = {
    experience: PropTypes.shape({
      companyName: PropTypes.string,
      role: PropTypes.string,
      methodology: PropTypes.string,
      tasks: PropTypes.string,
      tools: PropTypes.string,
      period: PropTypes.string
    }).isRequired,

    onChange: PropTypes.func,
    onRemove: PropTypes.func
  }

  onChange = (field, value) => {
    const experience = {...this.props.experience};
    experience[field] = value;
    this.props.onChange(experience);
  }

  render() {
    return (
      <Container>
        <TextInput label="Company name" type="text" name="companyName" value={this.props.experience.companyName}
                   onChange={value => this.onChange('companyName', value)}/>
        <TextInput label="Role" type="text" name="role" value={this.props.experience.role}
                   onChange={value => this.onChange('role', value)}/>
        <TextInput label="Period" type="text" name="period" value={this.props.experience.period}
                   onChange={value => this.onChange('period', value)}/>
        <TextArea label="Tasks" name="tasks" value={this.props.experience.tasks}
                  onChange={value => this.onChange('tasks', value)}/>

        <TextInput label="Methodology" type="text" name="methodology" value={this.props.experience.methodology}
                   onChange={value => this.onChange('methodology', value)}/>
        <TextInput label="Tools" type="text" name="tools" value={this.props.experience.tools}
                   onChange={value => this.onChange('tools', value)}/>
        <Toolbar>
          <PrimaryButton type="button" onClick={this.props.onRemove}>
            Remove experience
          </PrimaryButton>
        </Toolbar>
      </Container>
    )
  }
}
