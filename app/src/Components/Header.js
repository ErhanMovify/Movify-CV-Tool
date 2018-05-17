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
  padding-left: 60px;
  padding-right: 25px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
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
