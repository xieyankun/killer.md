import * as CodeMirror from 'codemirror';
import * as React from 'react';
import './App.css';

import 'codemirror/lib/codemirror.css'

import logo from './logo.svg';

class App extends React.Component {

  public componentDidMount() {
    const codemirror = document.querySelector('.codemirror');
    window.console.log('CodeMirror', codemirror);
    const myCodeMirror = CodeMirror(codemirror as HTMLElement, {
      mode: 'javascript',
      value: '',
    });

    window.console.log(myCodeMirror)

    myCodeMirror.on('change', (instance, changeObj) => {
      window.console.log(instance, changeObj)
      
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="codemirror" />
      </div>
    );
  }
}

export default App;
