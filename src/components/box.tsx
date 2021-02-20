import styled from '../styled-components'

export const Box = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  fill: currentColor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: calc(30px + 2vw);
    margin: 8px 0;
  }

  p {
    font-size: calc(20px + 1vw);
    margin: 0;
  }

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
  }
`
