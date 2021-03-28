import React from 'react';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NavLink } from './components/NavLink';

function App() {
  return (
    <BrowserRouter>
      <NavLink/>
      <div className="container">
        <Switch>
          <Route path={'/'} exact component = {Home}/>
          <Route path={'/about'} component = {About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
