import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'

import PrimaryButton from '../Components/PrimaryButton'
import HeaderContainer from '../Components/Header'
import fileDownload from 'js-file-download'
import axios from 'axios/index'
import SecondaryButton from '../Components/SecondaryButton'
import {reset as resetBasicInfo} from '../reducers/basicInfo'
import {reset as resetProfessionalExperiences} from '../reducers/professionalExperiences'
import {reset as resetMiscellaneous} from '../reducers/miscellaneous'

const ButtonsContainer = styled.div`
  button {
    margin: 0 10px;
  }
`

class Header extends Component {
  static propTypes = {
    basicInfo: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      executiveSummary: PropTypes.string.isRequired
    }).isRequired,
    experiences: PropTypes.arrayOf(PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      tasks: PropTypes.string.isRequired,
      methodology: PropTypes.string.isRequired,
      tools: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
    })).isRequired,
    miscellaneous: PropTypes.string,

    resetBasicInfo: PropTypes.func.isRequired,
    resetProfessionalExperiences: PropTypes.func.isRequired,
    resetMiscellaneous: PropTypes.func.isRequired,
  }

  generateCV = () => {
    const data = {
      ...this.props.basicInfo,
      experiences: this.props.professionalExperiences,
      miscellaneous: this.props.miscellaneous,
    };

    axios({
      method: 'post',
      url: 'http://localhost:3000/generate',
      data: data,
      responseType: 'arraybuffer'
    }).then(
      response => {
        fileDownload(response.data, `Movify CV ${this.props.basicInfo.firstName} ${this.props.basicInfo.lastName}.docx`)
      },
      err => {
        console.error(err)
      }
    )
  }

  reset = () => {
    // this.props.resetBasicInfo();
    // this.props.resetProfessionalExperiences();
    this.props.resetMiscellaneous();
  }

  render() {
    return (
      <HeaderContainer>
        <h1>Application form</h1>
        <ButtonsContainer>
          <SecondaryButton onClick={this.reset}>RESET</SecondaryButton>
          <PrimaryButton onClick={this.generateCV}>GENERATE</PrimaryButton>
        </ButtonsContainer>
      </HeaderContainer>
    )
  }
}

export default connect(
  state => ({
    basicInfo: state.basicInfo,
    professionalExperiences: state.professionalExperiences,
    miscellaneous: state.miscellaneous
  }),
  dispatch => bindActionCreators({
    resetBasicInfo,
    resetProfessionalExperiences,
    resetMiscellaneous,
  }, dispatch)
)(Header)
