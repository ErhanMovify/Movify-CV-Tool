import Button from './Button'
import {rgba} from 'polished'

export default Button.extend`
  background-color: ${p => p.theme.colors.main};
  color: white;
  box-shadow: 0 5px 25px 5px transparent;
  letter-spacing: 1px;
  margin: 0 5px;
  
  &:hover, &:focus {
    box-shadow: 0 3px 25px 3px ${p => rgba(p.theme.colors.main, 0.3)};
    
  }
`
