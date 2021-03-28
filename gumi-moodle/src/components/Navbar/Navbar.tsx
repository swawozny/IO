import React, {Component} from 'react';
import 'w3-css/w3.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login/Login'
import Register from '../Auth/Register/Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StMainView from '../MainView/Student/StMainView';


class Navbar extends Component {
    render() {
        return (
            <Router>
                    <div className="w3-bar w3-white w3-card">
                    <Link to={'/'} className="w3-bar-item w3-button w3-wide">GumiMoodle</Link>
                        <div className="w3-right">
                            <Link to={'/'} className="w3-bar-item w3-button"><FontAwesomeIcon icon="check-square" /> Home</Link>
                            <Link to={'/profile'} className="w3-bar-item w3-button">Profile</Link>
                            <Link to={'/login'} className="w3-bar-item w3-button">Login</Link>
                            <Link to={'/register'} className="w3-bar-item w3-button">Register</Link>
                            <Link to={'/courses'} className="w3-bar-item w3-button">Register</Link>
                        </div>  
                    </div>
                <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/courses' component={StMainView} />
                </Switch>
            </Router>
        );
    }

    
}

export default Navbar;