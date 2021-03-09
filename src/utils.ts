import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const theme = {
  text: '#fff',
  background: '#303030',
}

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
	* {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', sans-serif;
    overflow: hidden;
		background-color: #303030;
  }
`
