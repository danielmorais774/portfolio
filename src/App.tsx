import React from 'react';
import {
  Router,
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

import './assets/fonts/Public-Secret-DEMO.otf';

import Home from './pages/home';
import Eitachei from './pages/eitachei';
import history from './history';

history.listen((location, action) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant' as ScrollBehavior
  })
})

const App: React.FC = () => {

  return (
    <Router history={history}>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects/eitachei">
              <Eitachei/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;