import styled from 'styled-components'

export default styled.div`
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
  overflow-y: auto;
  
  * {
    outline-color: ${p => p.theme.colors.main};
  }
`;
