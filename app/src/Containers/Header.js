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

    resetBasicInfo: PropTypes.func.isRequired,
    resetProfessionalExperiences: PropTypes.func.isRequired,
  }

  generateCV = () => {
    const data = {
      ...this.props.basicInfo,
      experiences: this.props.professionalExperiences,
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
    this.props.resetProfessionalExperiences();
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
  }),
  dispatch => bindActionCreators({
    resetBasicInfo,
    resetProfessionalExperiences,
  }, dispatch)
)(Header)
