import Button from './Button'
import {rgba} from 'polished'

export default Button.extend`
  background-color: white;
  border-color: 1px solid ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.main};
  box-shadow: 0 5px 25px 5px transparent;
  letter-spacing: 1px;
  margin: 0 5px;
  
  &:hover, &:focus {
    background-color: ${p => p.theme.colors.main};
    color: white;
    box-shadow: 0 3px 25px 3px ${p => rgba(p.theme.colors.main, 0.3)};
  }
`
