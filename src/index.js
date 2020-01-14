import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Menu" component={Menu} />
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
