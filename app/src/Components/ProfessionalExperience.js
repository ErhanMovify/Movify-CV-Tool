import React from 'react'
import PropTypes from 'prop-types'

import TextInput from './TextInput'
import TextArea from './Textarea'
import {bindActionCreators} from 'redux'
import {updateExperienceAtIndex} from '../reducers/professionalExperiences'
import {connect} from 'react-redux'

class ProfessionalExperience extends React.Component {

  static propTypes = {
    data: PropTypes.shape({
      companyName: PropTypes.string,
      role: PropTypes.string,
      methodology: PropTypes.string,
      tasks: PropTypes.string,
      tools: PropTypes.string,
      period: PropTypes.string
    }),
    index: PropTypes.number.isRequired,
  }

  onChange = (field, value) => {
    const experience = {...this.props.data};
    experience[field] = value;
    this.props.updateExperienceAtIndex(experience, this.props.index);
  }

  render() {
    const {data: experience} = this.props;
    return (
      <div>
        <TextInput label="Company name" type="text" name="companyName" value={experience.companyName}
                   onChange={value => this.onChange('companyName', value)} required/>
        <TextInput label="Role" type="text" name="role" value={experience.role}
                   onChange={value => this.onChange('role', value)} required/>
        <TextInput label="Period" type="text" name="period" value={experience.period}
                   onChange={value => this.onChange('period', value)} required/>
        <TextArea label="Tasks" name="tasks" value={experience.tasks}
                  onChange={value => this.onChange('tasks', value)} required/>

        <TextInput label="Methodology" type="text" name="methodology" value={experience.methodology}
                   onChange={value => this.onChange('methodology', value)}/>
        <TextInput label="Tools" type="text" name="tools" value={experience.tools}
                   onChange={value => this.onChange('tools', value)}/>
      </div>
    )
  }
}


export default connect(() => ({}),
  dispatch => bindActionCreators({
    updateExperienceAtIndex
  }, dispatch)
)(ProfessionalExperience)

