import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import Autocomplete from 'react-autocomplete'

import Card from '../Components/Card'
import Fieldset from '../Components/Fieldset'
import Language from '../Components/Language'
import {Label, Container} from '../Components/TextInput'
import {addLanguage} from '../reducers/languages'

import languages from '../Resources/languages'

const AutoCompleteItemContainer = styled.div`
  padding: 5px 10px;
  background-color: ${p => p.isHighlighted && p.theme.colors.main};
  color: ${p => p.isHighlighted && 'white'};
`

const AutoCompleteItem = (item, isHighlighted) => (
  <AutoCompleteItemContainer isHighlighted={isHighlighted} key={item.name}>
    {item.name}
  </AutoCompleteItemContainer>
)

class Languages extends Component {
  static propTypes = {
    addLanguage: PropTypes.func.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      languageName: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired
    })).isRequired
  }
  state = {
    languageAutoComplete: ''
  }

  onLanguageSelected = languageName => {
    this.props.addLanguage(languageName)
    this.setState({languageAutoComplete: ''})
  }

  render() {
    const items = Object.values(languages).filter(item => item.name.toLowerCase().includes(this.state.languageAutoComplete.toLowerCase()))
    return (
      <Card>
        <Fieldset legend="Languages :">
          <Container>
            <Label>Add a language</Label>
            <Autocomplete
              getItemValue={(item) => item.name}
              items={items}
              renderItem={AutoCompleteItem}
              value={this.state.languageAutoComplete}
              onChange={e => this.setState({languageAutoComplete: e.target.value})}
              onSelect={this.onLanguageSelected}
            />
          </Container>
          <div>
            {this.props.languages.map((language, index) => (
              <Language key={index} index={index} {...language} />
            ))}
          </div>
        </Fieldset>
      </Card>
    )
  }
}


export default connect(
  state => ({
    languages: state.languages
  }),
  dispatch => bindActionCreators({
    addLanguage
  }, dispatch)
)(Languages)

