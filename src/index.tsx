import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './utils'
import { Home } from './pages/home'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
