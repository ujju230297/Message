import React , { Component } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Projectdetails from './components/projects/Projectdetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render(){
    return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Dashboard } />
        <Route path='/project/:id' component={Projectdetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/create' component={CreateProject} />

      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
