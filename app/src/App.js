import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import AcademicBackground from './Containers/AcademicBackground'
import Languages from './Containers/Languages'
import Miscellaneous from './Containers/Miscellaneous'
import ProfessionalExperiences from './Containers/ProfessionalExperiences'
import SkillsAndTrainings from './Containers/SkillsAndTrainings'
import ReactTooltip from 'react-tooltip'

import theme from './theme'
import Header from './Containers/Header'
import PageContainer from './Components/PageContainer'
import BasicInfo from './Containers/BasicInfo'

const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 40px;
`

const Note = styled.form`
  max-width: 900px;
  padding: 0 40px;
  margin: 20px auto;
  color: #333;
  font-size: 11pt;
  font-style: italic;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <div>
            <Header/>
            <Note>
              Note: This form is automatically saved locally on your computer as you are typing. You can close this window and come back at any time :)
            </Note>
            <Form>
              <BasicInfo/>
              <ProfessionalExperiences/>
              <AcademicBackground/>
              <Languages/>
              <SkillsAndTrainings/>
              <Miscellaneous/>
            </Form>
          </div>
          <ReactTooltip multiline/>
        </PageContainer>
      </ThemeProvider>
    )
  }
}

export default App
