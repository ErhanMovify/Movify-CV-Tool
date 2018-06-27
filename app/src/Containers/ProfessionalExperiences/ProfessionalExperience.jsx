import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextInput from '../../components/TextInput';
import TextArea from '../../components/Textarea';
import * as professionalExperiencesActions from '../../reducers/professionalExperiences';

class ProfessionalExperience extends React.Component {
  static propTypes = {
    experience: PropTypes.shape({
      companyName: PropTypes.string,
      role: PropTypes.string,
      methodology: PropTypes.string,
      tasks: PropTypes.string,
      tools: PropTypes.string,
      period: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
    updateExperienceAtIndex: PropTypes.func.isRequired,
  };

  onChange = (field, value) => {
    const { experience, index, updateExperienceAtIndex } = this.props;
    const newExperience = { ...experience };
    newExperience[field] = value;
    updateExperienceAtIndex(newExperience, index);
  };

  render() {
    const { experience } = this.props;
    return (
      <div>
        <TextInput
          label="Company name"
          type="text"
          name="companyName"
          value={experience.companyName}
          onChange={value => this.onChange('companyName', value)}
          required
        />
        <TextInput
          label="Role"
          type="text"
          name="role"
          value={experience.role}
          onChange={value => this.onChange('role', value)}
          required
        />
        <TextInput
          label="Period"
          type="text"
          name="period"
          value={experience.period}
          onChange={value => this.onChange('period', value)}
          required
        />
        <TextArea
          label="Tasks"
          name="tasks"
          value={experience.tasks}
          onChange={value => this.onChange('tasks', value)}
          required
          help="If you have done major projects in the same company, do not hesitate to split them into different experiences for each project.<br/><br/>For each project, you can give the context, the tasks that you did, and the outcome of the project."
        />
        <TextInput
          label="Methodology"
          type="text"
          name="methodology"
          value={experience.methodology}
          onChange={value => this.onChange('methodology', value)}
          help="Tell us more about the methodology used there (Agile, Scrum, Kanban, Waterfall, etc.)"
        />
        <TextInput
          label="Tools"
          type="text"
          name="tools"
          value={experience.tools}
          onChange={value => this.onChange('tools', value)}
          help="Tell us more about the tools you were using (Sketch, Photoshop, Git, Xcode, Android Studio, PowerPoint, Excel, etc.)"
        />
      </div>
    );
  }
}


export default connect(
  (state, { index }) => ({
    experience: state.professionalExperiences[index],
  }),
  dispatch => bindActionCreators({
    updateExperienceAtIndex: professionalExperiencesActions.updateExperienceAtIndex,
  }, dispatch),
)(ProfessionalExperience);
