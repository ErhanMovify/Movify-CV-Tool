import React from 'react'
import styled from 'styled-components';

import logo from '../Logo-small.png';

const Header = styled.div`
  background-color: white;
  color: ${p => p.theme.colors.text};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
`

const Logo = styled.img`
  height: 90px;
  width: 90px;
`

export default ({children}) => (
    <Header>
      <Logo src={logo} />
      {children}
    </Header>
)
