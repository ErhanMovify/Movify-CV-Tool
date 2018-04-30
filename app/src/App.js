import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import ProfessionalExperiences from './Containers/ProfessionalExperiences'

import theme from './theme'
import Header from './Containers/Header'
import PageContainer from './Components/PageContainer'
import BasicInfo from './Containers/BasicInfo'

const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
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
            </Form>
          </div>
        </PageContainer>
      </ThemeProvider>
    )
  }
}

export default App
