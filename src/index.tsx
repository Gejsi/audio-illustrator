import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { Navbar } from './navbar'

const Demo = () => <h1>Demo</h1>
const Documentation = () => <h1>Docs</h1>
const NoMatch = () => <h1>404</h1>

const theme = {
  text: '#fff',
  background: '#303030',
  primary: '#e39be4',
  secondary: '#1ba897',
  textOnPrimary: '#000'
}

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    font-size: 16px;
  }

  body {
    font-family: 'Rubik', sans-serif;
  }
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <GlobalStyle />

        <Navbar />

        <Switch>
          <Route exact path='/' component={Demo} />
          <Route path='/docs' component={Documentation} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
