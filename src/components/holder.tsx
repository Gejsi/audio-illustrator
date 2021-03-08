import styled from '../styled-components'

export const Holder = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme.background};
  user-select: none;
`
