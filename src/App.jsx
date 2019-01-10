import React, { Component } from 'react';
import './Main.css';
import { HashRouter as Router, Route} from 'react-router-dom';

/* Custom Component Imports */

import Header from './Components/header';
import About from './Components/about';
import Projects from './Components/projects';
import Contact from './Components/contact';
import Footer from './Components/footer';

/* Style Import */

import './styles/header.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={ Header } />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
