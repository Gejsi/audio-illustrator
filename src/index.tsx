import * as React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './utils'
import { Primary } from './pages/primary'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Primary />
    </React.Fragment>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
