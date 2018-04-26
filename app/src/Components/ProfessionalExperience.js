import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from './TextInput'
import TextArea from './Textarea'
import PrimaryButton from './PrimaryButton'
import Toolbar from './Toolbar'

const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default class ProfessionalExperience extends React.Component {

  static propTypes = {
    companyName: PropTypes.string,
    role: PropTypes.string,

    onChange: PropTypes.func,
    onRemove: PropTypes.func,
  }

  render() {
    return (
        <Container>
          <TextInput label="Company name" type="text" name="companyName" value={this.props.companyName}
                     onChange={this.props.onChange}/>
          <TextInput label="Role" type="text" name="role" value={this.props.role}
                     onChange={this.props.onChange}/>
          <TextArea label="Tasks" name="tasks" value={this.props.tasks}
                     onChange={this.props.onChange}/>

          <TextInput label="Methodology" type="text" name="methodology" value={this.props.methodology}
                     onChange={this.props.onChange}/>
          <Toolbar>
            <PrimaryButton type="button" onClick={this.props.onRemove}>
              Remove experience
            </PrimaryButton>
          </Toolbar>
        </Container>
    )
  }
}
