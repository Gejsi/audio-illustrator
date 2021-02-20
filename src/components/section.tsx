import styled, { keyframes } from '../styled-components'

const changeBorderColor = keyframes`
  100%, 0%{color: rgb(255,255,255); border-color: rgb(255,255,255);}
	8%{color: rgb(255,127,0); border-color: rgb(255,127,0);}
	16%{color: rgb(255,255,0); border-color: rgb(255,255,0);}
	25%{color: rgb(127,255,0); border-color: rgb(127,255,0);}
	33% {color: rgb(0,255,0); border-color: rgb(0,255,0);}
	41% {color: rgb(0,255,127); border-color: rgb(0,255,127);}
	50% {color: rgb(0,255,255); border-color: rgb(0,255,255);}
	58%{color: rgb(0,127,255); border-color: rgb(0,127,255);}
	66%{color: rgb(0,0,255); border-color: rgb(0,0,255);}
	75%{color: rgb(127,0,255); border-color: rgb(127,0,255);}
	83%{color: rgb(255,0,255); border-color: rgb(255,0,255);}
	91%{color: rgb(255,0,0); border-color: rgb(255,0,0);}
`

export const Section = styled.div`
  height: 20vh;
  flex: 1;
  border: 0.625rem solid white;
  margin: 1rem;
  min-width: 200px;
  max-width: 300px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
  font-size: calc(20px + 0.5vw);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

  &:hover {
    animation: ${changeBorderColor} 2s linear infinite;
  }
`

export const Expande = styled.div<{ opened: boolean }>`
  position: absolute;
  background: white;
  height: ${(props) => (props.opened ? '100vh' : '100%')};
  width: ${(props) => (props.opened ? '100vw' : '100%')};
  transform: ${(props) => (props.opened ? 'scale(2)' : 'scale(1)')};
  opacity: ${(props) => (props.opened ? 1 : 0)};
  transition: opacity 300ms linear
      ${(props) => (props.opened ? '0ms' : '800ms')},
    width 800ms, height 800ms, transform 800ms;
`
