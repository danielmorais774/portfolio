import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';

import './assets/fonts/Public-Secret-DEMO.otf';

import Home from './pages/home';
import Eitachei from './pages/eitachei';

const App: React.FC = () => {
  return (
    <Router>
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