import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Module from './module/';

class App extends React.Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/module" component={Module} />
        </Switch>
      </BrowserRouter>
    );
  }

}

ReactDOM.render(<App/>, document.querySelector('.application'));