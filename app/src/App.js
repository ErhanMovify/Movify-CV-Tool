import React, {Component} from 'react'
import fileDownload from 'js-file-download'
import styled, {ThemeProvider} from 'styled-components'
import axios from 'axios'

import theme from './theme'
import Header from './Components/Header'
import PrimaryButton from './Components/PrimaryButton'
import Fieldset from './Components/Fieldset'
import PageContainer from './Components/PageContainer'
import Card from './Components/Card'
import Textarea from './Components/Textarea'
import TextInput from './Components/TextInput'
import Toolbar from './Components/Toolbar'
import ProfessionalExperience from './Components/ProfessionalExperience'

const EXPERIENCE = {
  companyName: '',
  role: '',
  tasks: '',
  methodology: '',
}

const Form = styled.form`
  max-width: 900px;
  margin: 0 auto;
`

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    position: '',
    executiveSummary: '',
    experiences: [
      {
        ...EXPERIENCE
      }
    ]
  }

  updateState = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateExperienceAtIndex = (index, fieldName, value) => {
    this.setState({
      experiences: this.state.experiences.map((experience, i) => {
        if (i === index) {
          experience[fieldName] = value
        }
        return experience
      })
    })
  }

  addExperience = () => {
    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          ...EXPERIENCE
        }
      ]
    })
  }

  removeExperienceAtIndex = index => {
    this.setState({
      experiences: this.state.experiences.filter((exp, i) => index !== i)
    })
  }

  generateCV = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/generate',
      data: this.state,
      responseType: 'arraybuffer'
    }).then(
        response => {
          fileDownload(response.data, `Movify CV ${this.state.firstName} ${this.state.lastName}.docx`)
        },
        err => {
          console.error(err)
        }
    )
  }

  render() {
    return (
        <ThemeProvider theme={theme}>
          <PageContainer>
            <div>
              <Header>
                <h1 className="App-title">CV builder</h1>
                <PrimaryButton onClick={this.generateCV}>GENERATE</PrimaryButton>
              </Header>
              <Form>
                <Card>
                  <Fieldset legend="Information:">
                    <TextInput label="First name" name="firstName" value={this.state.firstName}
                               onChange={this.updateState} />
                    <TextInput label="Last name" name="lastName" value={this.state.lastName}
                           onChange={this.updateState}/>
                    <TextInput label="Position" name="position"
                           value={this.state.position}
                           onChange={this.updateState}/>
                  </Fieldset>
                  <Fieldset legend="Executive summary">
                      <Textarea name="executiveSummary" onChange={this.updateState}
                                value={this.state.executiveSummary}/>
                  </Fieldset>
                </Card>
                <Card>
                  <Fieldset legend="Professional experiences:">
                    <Toolbar>
                      <PrimaryButton type="button" onClick={this.addExperience}>Add experience</PrimaryButton>
                    </Toolbar>
                    {this.state.experiences.map((experience, index) => (
                        <ProfessionalExperience
                            key={index}
                            companyName={experience.companyName}
                            role={experience.role}
                            onChange={event => this.updateExperienceAtIndex(index, event.target.name, event.target.value)}
                            onRemove={() => this.removeExperienceAtIndex(index)}
                        />
                    ))}
                  </Fieldset>
                </Card>
              </Form>
            </div>
          </PageContainer>
        </ThemeProvider>
    )
  }
}

export default App
