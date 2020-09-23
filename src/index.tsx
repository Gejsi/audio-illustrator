import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './utils'
import { Navbar } from './components/navbar'
import { Demo } from './pages/demo'
import { Home } from './pages/home'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />

      <Navbar />

      <Home />
    </React.Fragment>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
