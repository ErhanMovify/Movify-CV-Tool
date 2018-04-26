import styled, {css} from 'styled-components'

export default styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  
  transition: all 300ms linear;
  
  ${p => p.left && css`
    float: left;
  `}
  ${p => p.right && css`
    float: right;
  `}
`
