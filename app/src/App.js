import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import AcademicBackground from './Containers/AcademicBackground'
import Languages from './Containers/Languages'
import Miscellaneous from './Containers/Miscellaneous'
import ProfessionalExperiences from './Containers/ProfessionalExperiences'
import SkillsAndTrainings from './Containers/SkillsAndTrainings'

import theme from './theme'
import Header from './Containers/Header'
import PageContainer from './Components/PageContainer'
import BasicInfo from './Containers/BasicInfo'

const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 40px;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageContainer>
          <div>
            <Header/>
            <Form>
              <BasicInfo/>
              <ProfessionalExperiences/>
              <AcademicBackground/>
              <Languages/>
              <SkillsAndTrainings/>
              <Miscellaneous/>
            </Form>
          </div>
        </PageContainer>
      </ThemeProvider>
    )
  }
}

export default App
