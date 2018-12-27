import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './utils'
import { Navbar } from './components/navbar'
import { Demo } from './pages/demo'
import { Docs } from './pages/docs'
import { NoMatch } from './pages/404'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router basename='/react-audio-illustrator'>
      <React.Fragment>
        <GlobalStyle />

        <Navbar />

        <Switch>
          <Route exact path='/' component={Demo} />
          <Route exact path='/docs' component={Docs} />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    </Router>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
