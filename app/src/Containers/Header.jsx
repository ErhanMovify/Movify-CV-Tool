import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Beta from '../components/BetaRibbon';

import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import HeaderContainer from '../components/Header';
import * as basicInfoActions from '../reducers/basicInfo';
import * as professionalExperiencesActions from '../reducers/professionalExperiences';
import * as miscellaneousActions from '../reducers/miscellaneous';
import * as skillsAndTrainingsActions from '../reducers/skillsAndTrainings';
import * as academicBackgroundActions from '../reducers/academicBackground';
import * as languagesActions from '../reducers/languages';
import * as PDFGeneratorActions from '../reducers/PDFGenerator';

const ButtonsContainer = styled.div`
  button {
    margin: 0 10px;
  }
`;

const TitleText = styled.h1`
  text-transform: capitalize;
`;

const Link = styled.a`
  color: ${p => p.theme.colors.main};
`;

class Header extends Component {
  static propTypes = {
    resetBasicInfo: PropTypes.func.isRequired,
    resetProfessionalExperiences: PropTypes.func.isRequired,
    resetMiscellaneous: PropTypes.func.isRequired,
    resetSkillsAndTrainings: PropTypes.func.isRequired,
    resetAcademicBackground: PropTypes.func.isRequired,
    resetLanguages: PropTypes.func.isRequired,
    generatePDF: PropTypes.func.isRequired,
  };

  reset = () => {
    const {
      resetBasicInfo,
      resetProfessionalExperiences,
      resetSkillsAndTrainings,
      resetAcademicBackground,
      resetMiscellaneous,
      resetLanguages,
    } = this.props;
    resetBasicInfo();
    resetProfessionalExperiences();
    resetSkillsAndTrainings();
    resetAcademicBackground();
    resetMiscellaneous();
    resetLanguages();
  };

  render() {
    const { generatePDF } = this.props;
    return (
      <HeaderContainer>
        <Beta />
        <TitleText>
          Application form
        </TitleText>
        <ButtonsContainer>
          <Link href="mailto:application.form.feedback@movify.be">
            Send Feedback
          </Link>
          <SecondaryButton onClick={this.reset}>
            RESET
          </SecondaryButton>
          <PrimaryButton onClick={generatePDF}>
            GENERATE
          </PrimaryButton>
        </ButtonsContainer>
      </HeaderContainer>
    );
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
    resetBasicInfo: basicInfoActions.reset,
    resetProfessionalExperiences: professionalExperiencesActions.reset,
    resetMiscellaneous: miscellaneousActions.reset,
    resetSkillsAndTrainings: skillsAndTrainingsActions.reset,
    resetAcademicBackground: academicBackgroundActions.reset,
    resetLanguages: languagesActions.reset,
    generatePDF: PDFGeneratorActions.generatePDF,
  }, dispatch),
)(Header);
