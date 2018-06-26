import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from "prop-types";

import QuestionMarkIcon from 'react-icons/lib/fa/question-circle-o'

const Container = styled.span`
  color: ${p => p.theme.colors.main};
  height: 30px;
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
`;

export default class Helper extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  render() {
    return (
      <Container data-tip={this.props.text}>
        <QuestionMarkIcon/>
      </Container>
    )
  }
}