import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import PrivateRoute from './components/auth/PrivateRoute'

//TODO: Install materializeJS from npm and remove the JS from the public folder

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />

                    <Switch>
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <PrivateRoute exact path='/' component={Dashboard} />
                        <PrivateRoute path='/project/:id' component={ProjectDetails} />
                        <PrivateRoute path='/create' component={CreateProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App
