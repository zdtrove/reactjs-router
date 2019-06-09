import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
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
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </Router>
        );
    }

    showContentMenu = (routes) => {
        var resutl = null
        if (routes.length > 0) {
            return (
                <Route />
            );
        }
        return resutl;
    }
}

export default App;
