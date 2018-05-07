import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Textarea from '../Components/Textarea'
import {setAcademicBackground} from '../reducers/academicBackground'

class AcademicBackground extends Component {

  static propTypes = {
    academicBackground: PropTypes.string.isRequired,

    setAcademicBackground: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Academic background:">
          <Textarea
            value={this.props.academicBackground}
            onChange={this.props.setAcademicBackground}
          />
        </Fieldset>
      </Card>
    )
  }
}

export default connect(
  state => ({
    academicBackground: state.academicBackground
  }),
  dispatch => bindActionCreators({
    setAcademicBackground,
  }, dispatch)
)(AcademicBackground)
