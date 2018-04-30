import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Textarea from '../Components/Textarea'
import {setMiscellaneousInfo} from '../reducers/miscellaneous'

class Miscellaneous extends Component {

  static propTypes = {
    miscellaneous: PropTypes.string.isRequired,
    setMiscellaneousInfo: PropTypes.func.isRequired,
  }

  render () {
    return (
      <Card>
        <Fieldset legend="Miscellaneous:">
          <Textarea
            value={this.props.miscellaneous}
            onChange={this.props.setMiscellaneousInfo}
          />
        </Fieldset>
      </Card>
    )
  }
}

export default connect(
  state => ({
    miscellaneous: state.miscellaneous,
  }),
  dispatch => bindActionCreators({
    setMiscellaneousInfo,
  }, dispatch)
)(Miscellaneous);
