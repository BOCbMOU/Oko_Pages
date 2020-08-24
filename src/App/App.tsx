import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
