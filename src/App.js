import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const DronesPage = () => (
  <div>
    <h1>DRONES PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/drones" component={DronesPage} />
      </Switch>
    </div>
  );
}

export default App;
