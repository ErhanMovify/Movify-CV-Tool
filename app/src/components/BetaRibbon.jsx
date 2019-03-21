import styled from 'styled-components';

const BetaRibbon = styled.div.attrs({ children: 'BETA' })`
  background-color: ${p => p.theme.colors.main};
  color: white;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5px;
  bottom: -20px;
  transform-origin: bottom left;
  transform: rotate(-45deg);
  font-weight: bold;
  letter-spacing: 3px;
`;

export default BetaRibbon;
