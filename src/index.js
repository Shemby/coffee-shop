import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Nav from './components/Nav';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Route path='/' exact component={Landing} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/Menu' component={Menu} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
