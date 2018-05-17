import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Language from '../Components/Language'

class Languages extends Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.shape({
      languageName: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Languages :">
          <div>
            {this.props.languages.map((language, index) => (
              <Language key={index} index={index} {...language} />
            ))}
          </div>
        </Fieldset>
      </Card>
    )
  }
}


export default connect(
  state => ({
    languages: state.languages
  }),
  dispatch => bindActionCreators({
  }, dispatch)
)(Languages)

