import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Beta from '../Components/Beta'

import PrimaryButton from '../Components/PrimaryButton'
import HeaderContainer from '../Components/Header'
import SecondaryButton from '../Components/SecondaryButton'
import {reset as resetBasicInfo} from '../reducers/basicInfo'
import {reset as resetProfessionalExperiences} from '../reducers/professionalExperiences'
import {reset as resetMiscellaneous} from '../reducers/miscellaneous'
import {reset as resetSkillsAndTrainings} from '../reducers/skillsAndTrainings'
import {reset as resetAcademicBackground} from '../reducers/academicBackground'
import {reset as resetLanguages} from '../reducers/languages'
import {generatePDF} from "../reducers/PDFGenerator";

const ButtonsContainer = styled.div`
  button {
    margin: 0 10px;
  }
`

const TitleText = styled.h1`
  text-transform: capitalize;
`;

const Link = styled.a`
  color: ${p => p.theme.colors.main};
`

class Header extends Component {
  static propTypes = {
    resetBasicInfo: PropTypes.func.isRequired,
    resetProfessionalExperiences: PropTypes.func.isRequired,
    resetMiscellaneous: PropTypes.func.isRequired,
    resetSkillsAndTrainings: PropTypes.func.isRequired,
    resetAcademicBackground: PropTypes.func.isRequired,
    resetLanguages: PropTypes.func.isRequired,
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
        <Beta/>
        <TitleText>Application form</TitleText>
        <ButtonsContainer>
          <Link href="mailto:application.form.feedback@movify.be">Send Feedback</Link>
          <SecondaryButton onClick={this.reset}>RESET</SecondaryButton>
          <PrimaryButton onClick={this.props.generatePDF}>GENERATE</PrimaryButton>
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
    generatePDF,
  }, dispatch)
)(Header)
