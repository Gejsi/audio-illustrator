import styled, { keyframes } from '../styled-components'

const changeColor = keyframes`
  100%, 0%{color: rgb(255,255,255);}
	8%{color: rgb(255,127,0);}
	16%{color: rgb(255,255,0);}
	25%{color: rgb(127,255,0);}
	33% {color: rgb(0,255,0);}
	41% {color: rgb(0,255,127);}
	50% {color: rgb(0,255,255);}
	58%{color: rgb(0,127,255);}
	66%{color: rgb(0,0,255);}
	75%{color: rgb(127,0,255);}
	83%{color: rgb(255,0,255);}
	91%{color: rgb(255,0,0);}
`

export const Title = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  h1 {
    margin: 0;
    font-size: calc(1.125rem + 7vw);
    letter-spacing: 0.5vw;
    color: white;
    font-family: 'Bungee Shade', cursive;
  }

  p {
    margin: 0.5rem 0;
    color: white;
    opacity: 0.4;
    font-size: calc(0.75rem + 1vw);
    text-align: center;
  }

  &:hover {
    h1 {
      animation: ${changeColor} 2s linear infinite;
    }
  }
`
