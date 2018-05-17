import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import {removeLanguageAtIndex, setLanguageLevelForIndex} from '../reducers/languages'
import SecondaryButton from './SecondaryButton'

const Container = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`

const RemoveButton = styled(SecondaryButton)`
 margin-left: 15px;
`

const SelectContainer = styled.div`
  margin: 0 10px;
`

class Language extends Component {
  static propTypes = {
    languageName: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,

    removeLanguageAtIndex: PropTypes.func.isRequired,
    setLanguageLevelForIndex: PropTypes.func.isRequired
  }

  removeLanguage = () => {
    this.props.removeLanguageAtIndex(this.props.index)
  }

  onLanguageChanged = event => {
    this.props.setLanguageLevelForIndex(this.props.index, event.target.value)
  }

  render() {
    return (
      <Container>
        <b>{this.props.languageName}</b>:
        <SelectContainer>
          <select value={this.props.level} onChange={this.onLanguageChanged}>
            <option value={"None"}>None</option>
            <option value={"Basic knowledge"}>Basic knowledge</option>
            <option value={"Intermediate"}>Intermediate</option>
            <option value={"Good"}>Good</option>
            <option value={"Very good"}>Very good</option>
            <option value={"Mother language"}>Mother language</option>
          </select>
        </SelectContainer>
      </Container>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    removeLanguageAtIndex,
    setLanguageLevelForIndex
  }, dispatch)
)(Language)