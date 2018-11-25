
import * as React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Markdown from './components/Markdown';
import Home from './pages/Home';

import './styles/App.css';

import 'codemirror/lib/codemirror.css'

interface IStete {
  test: string,
}

class App extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  public render() {
    return (
      <Router>
      <div id="app">
        <Route exact={true} path="/" component={ Home }/>
        <Route path="/markdown" component={ Markdown }/>
      </div>
      </Router>
    );
  }
}

export default App;
