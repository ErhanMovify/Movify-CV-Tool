import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Toolbar from '../Components/Toolbar'
import PrimaryButton from '../Components/PrimaryButton'
import ProfessionalExperience from '../Components/ProfessionalExperience'
import {addExperience} from '../reducers/professionalExperiences'

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
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Professional experiences:">
          <Toolbar>
            <PrimaryButton type="button" onClick={this.props.addExperience}>+ Add a new experience</PrimaryButton>
          </Toolbar>
          {this.props.experiences.map((_, index) => (
              <div key={index}>
                <hr/>
                <ProfessionalExperience index={index}/>
              </div>
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
    addExperience
  }, dispatch)
)(ProfessionalExperiences)
