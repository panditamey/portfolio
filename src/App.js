
import { scryRenderedDOMComponentsWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
// import Services from './component/Services';
import Main from './component/Main';
import Skills from './component/Skills';
import Services from './component/Services';
// import Home from './Home';
import Contact from './component/Contact';
import Home from './component/Home';
// import { Router } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './component/Home';


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/services">
            <Services/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
