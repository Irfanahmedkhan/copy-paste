import React from 'react';
import './App.css';
// import Page2 from './page2/Page2'
import Page1 from './page1/Page1'
import Page2 from './page2/Page2'  
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
