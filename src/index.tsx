import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li>
      <Link to='/'>Demo</Link>
    </li>
    <li>
      <Link to='/docs'>Docs</Link>
    </li>
  </ul>
)

const Demo = () => <h1>Demo</h1>
const Documentation = () => <h1>Docs</h1>
const NoMatch = () => <h1>404</h1>

const App = () => (
  <Router>
    <React.Fragment>
      <Navigation />

      <Switch>
        <Route exact path='/' component={Demo} />
        <Route path='/docs' component={Documentation} />
        <Route component={NoMatch} />
      </Switch>
    </React.Fragment>
  </Router>
)

render(<App />, document.getElementById('root'))
