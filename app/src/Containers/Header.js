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
import {reset as resetSkillsAndTrainings} from '../reducers/skillsAndTrainings'
import {reset as resetAcademicBackground} from '../reducers/academicBackground'
import {reset as resetLanguages} from '../reducers/languages'

const ButtonsContainer = styled.div`
  button {
    margin: 0 10px;
  }
`

const TitleText = styled.h1`
  text-transform: capitalize;
`;

class Header extends Component {
  static propTypes = {
    basicInfo: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      executiveSummary: PropTypes.string.isRequired
    }).isRequired,
    professionalExperiences: PropTypes.arrayOf(PropTypes.shape({
      companyName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      tasks: PropTypes.string.isRequired,
      methodology: PropTypes.string.isRequired,
      tools: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
    })).isRequired,
    miscellaneous: PropTypes.string,
    skillsAndTrainings: PropTypes.string,
    academicBackground: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.shape({
      languageName: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    })),

    resetBasicInfo: PropTypes.func.isRequired,
    resetProfessionalExperiences: PropTypes.func.isRequired,
    resetMiscellaneous: PropTypes.func.isRequired,
    resetSkillsAndTrainings: PropTypes.func.isRequired,
    resetAcademicBackground: PropTypes.func.isRequired,
    resetLanguages: PropTypes.func.isRequired,
  }

  generateCV = () => {
    const data = {
      ...this.props.basicInfo,
      experiences: this.props.professionalExperiences,
      miscellaneous: this.props.miscellaneous,
      skillsAndTrainings: this.props.skillsAndTrainings,
      academicBackground: this.props.academicBackground,
      languages: this.props.languages,
    };

    axios({
      method: 'post',
      url: '/generate',
      data: data,
      responseType: 'arraybuffer'
    }).then(
      response => {
        const date = new Date().toISOString().slice(0,10).replace(/-/g,"")
        // Naming convention: Firstname Lastname - CV Movify - Position - YYYYMMDD
        fileDownload(response.data, `${this.props.basicInfo.firstName} ${this.props.basicInfo.lastName} - CV Movify - ${this.props.basicInfo.position} - ${date}.docx`)
      },
      err => {
        console.error(err)
      }
    )
  }

  reset = () => {
    this.props.resetBasicInfo();
    this.props.resetProfessionalExperiences();
    this.props.resetSkillsAndTrainings();
    this.props.resetAcademicBackground();
    this.props.resetMiscellaneous();
    this.props.resetLanguages();
  }

  render() {
    return (
      <HeaderContainer>
        <TitleText>Application form</TitleText>
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
    miscellaneous: state.miscellaneous,
    skillsAndTrainings: state.skillsAndTrainings,
    academicBackground: state.academicBackground,
    languages: state.languages,
  }),
  dispatch => bindActionCreators({
    resetBasicInfo,
    resetProfessionalExperiences,
    resetMiscellaneous,
    resetSkillsAndTrainings,
    resetAcademicBackground,
    resetLanguages,
  }, dispatch)
)(Header)
