import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import TextInput from '../Components/TextInput'
import Textarea from '../Components/Textarea'
import {bindActionCreators} from 'redux'
import {setFirstName, setExecutiveSummary, setLastName, setPosition } from '../reducers/basicInfo'

class BasicInfo extends Component {

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    executiveSummary: PropTypes.string.isRequired,

    setFirstName: PropTypes.func.isRequired,
    setLastName: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    setExecutiveSummary: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Information:">
          <TextInput
            label="First name"
            name="firstName"
            value={this.props.firstName}
            onChange={this.props.setFirstName}
            required
          />
          <TextInput
            label="Last name"
            name="lastName"
            value={this.props.lastName}
            onChange={this.props.setLastName}
            required
          />
          <TextInput
            label="Position"
            name="position"
            value={this.props.position}
            onChange={this.props.setPosition}
            required
          />
        </Fieldset>
        <Fieldset legend="Executive summary">
          <Textarea
            name="executiveSummary"
            height={170}
            value={this.props.executiveSummary}
            onChange={this.props.setExecutiveSummary}
            required
          />
        </Fieldset>
      </Card>
    )
  }
}

export default connect(
  state => ({
    firstName: state.basicInfo.firstName,
    lastName: state.basicInfo.lastName,
    position: state.basicInfo.position,
    executiveSummary: state.basicInfo.executiveSummary,
  }),
  dispatch => bindActionCreators({
    setFirstName,
    setLastName,
    setPosition,
    setExecutiveSummary,
  }, dispatch)
)(BasicInfo)
