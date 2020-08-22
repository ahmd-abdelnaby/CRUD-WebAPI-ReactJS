import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import NotFound from './components/NotFound';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation } from 'react-router-dom';
import Users from './components/Users';
import Profile from './components/Profile';
import contact from './components/contact';
import about from './components/about';
import Home from './components/Home';


function App() {
  
  return (
    <div className="App">
        <Header></Header>
        <Router>
          <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/body" component={Body} />
        <Route path="/users" component={Users} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/contact" component={contact} />
        <Route path="/about" component={about} />
        <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
