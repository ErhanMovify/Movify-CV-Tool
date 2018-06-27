import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import Favicon from 'react-favicon';

import Header from './Header';
import AcademicBackground from './AcademicBackground/AcademicBackground';
import BasicInfo from './BasicInfo';
import Languages from './Languages/Languages';
import Miscellaneous from './Miscellaneous';
import ProfessionalExperiences from './ProfessionalExperiences/ProfessionalExperiences';
import SkillsAndTrainings from './SkillsAndTrainings';

import faviconImage from '../images/favicon.png';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
  padding-top: 80px;
  * {
    outline-color: ${p => p.theme.colors.main};
  }
`;

const Note = styled.form`
  max-width: 900px;
  padding: 0 40px;
  margin: 20px auto;
  color: #333;
  font-size: 11pt;
  font-style: italic;
`;

const MainContainer = () => (
  <PageContainer>
    <Favicon url={faviconImage} />
    <Header />
    <Note>
      Note: This form is automatically saved locally on your computer as you are typing. You can close this window and come back at any time :)
    </Note>
    <BasicInfo />
    <ProfessionalExperiences />
    <AcademicBackground />
    <Languages />
    <SkillsAndTrainings />
    <Miscellaneous />
    <ReactTooltip multiline />
  </PageContainer>
);

export default MainContainer;
