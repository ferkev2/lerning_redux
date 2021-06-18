import React from 'react';
import HomePage from './pages/Homepage/index';
import UserPage from './pages/User/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user/:userId' component={UserPage} />
        <Route>Page 404 not found</Route>
      </Switch>
    </Router>
  )
}

export default App
