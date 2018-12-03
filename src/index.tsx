import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './utils'
import { Navbar } from './navbar'
import { Demo } from './demo'
import { Container } from './container'

const Documentation = () => (
  <Container>
    <h1 style={{ margin: 0 }}>Docs</h1>
  </Container>
)

const NoMatch = () => (
  <Container>
    <h1>404</h1>
  </Container>
)

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <GlobalStyle />

        <Navbar />

        <Switch>
          <Route exact path='/' component={Demo} />
          <Route exact path='/docs' component={Documentation} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
