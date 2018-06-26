import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import {addAcademicBackground,
  removeAcademicBackgroundAtIndex,
  updateBackgroundAtIndex,
  moveBackgroundAtIndexUp,
  moveBackgroundAtIndexDown} from '../reducers/academicBackground'

import AcademicBackgroundComponent from '../Components/AcademicBackground'
import ReorderableComponentsList from "../Components/ReorderableComponentsList";

class AcademicBackground extends Component {

  static propTypes = {
    academicBackground: PropTypes.array.isRequired,

    addAcademicBackground: PropTypes.func.isRequired,
    removeAcademicBackgroundAtIndex: PropTypes.func.isRequired,
    updateBackgroundAtIndex: PropTypes.func.isRequired,
    moveBackgroundAtIndexUp: PropTypes.func.isRequired,
    moveBackgroundAtIndexDown: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Card>
        <Fieldset legend="Academic background:">
          <ReorderableComponentsList
            itemTypeLabel={"background"}
            list={this.props.academicBackground}
            addItem={this.props.addAcademicBackground}
            ListItemComponent={AcademicBackgroundComponent}
            removeItemAtIndex={this.props.removeAcademicBackgroundAtIndex}
            moveDownItemAtIndex={this.props.moveBackgroundAtIndexDown}
            moveUpItemAtIndex={this.props.moveBackgroundAtIndexUp}
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
    addAcademicBackground,
    removeAcademicBackgroundAtIndex,
    updateBackgroundAtIndex,
    moveBackgroundAtIndexUp,
    moveBackgroundAtIndexDown,
  }, dispatch)
)(AcademicBackground)
