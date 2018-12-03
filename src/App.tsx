
import * as React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Editor from './components/Editor';
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
        <Route exact={true} path="/" component={ Markdown }/>
        <Route path="/editor" component={ Editor }/>
        <Route path="/home" component={ Home } />
      </div>
      </Router>
    );
  }
}

export default App;
