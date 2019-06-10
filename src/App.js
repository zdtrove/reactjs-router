import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <div className="App">
                    <Switch>
                        { this.showContentMenu(routes) }
                    </Switch>
                </div>
            </Router>
        );
    }

    showContentMenu = (routes) => {
        var resutl = null
        if (routes.length > 0) {
            resutl = routes.map((route, index) => {
                return (
                    <Route key={ index } path={ route.path } exact={ route.exact } component={ route.main } />
                );
            })
        }
        return resutl;
    }
}

export default App;
