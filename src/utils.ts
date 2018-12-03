import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const theme = {
  text: '#fff',
  background: '#303030',
  primary: '#1ba897',
  secondary: '#FF80AB',
  textOnPrimary: '#000'
}

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', sans-serif;

    #root {
      height: 100vh;
    }
  }
`
