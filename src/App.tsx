import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DeclarationForm } from './pages/DeclarationForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from './pages/Summary';

class App extends React.Component {
  public render() {
    return (
      <Router>
         <Navbar />
         <Switch>
                <Route path="/declarations/list" exact component={Summary} />
                <Route path="/declarations/form/:id" component={DeclarationForm} />
                <Route path="/declarations/form" component={DeclarationForm} />
          </Switch>
      </Router>
    );
  }
}

export default App;

