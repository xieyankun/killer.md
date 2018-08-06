/* tslint-disable */
import * as CodeMirror from 'codemirror';
import * as Marked from 'marked'
import * as React from 'react';

import './App.css';

import 'codemirror/lib/codemirror.css'

import logo from './logo.svg';

interface IStete {
  test: string,
}

class App extends React.Component<{}, IStete> {

  private test: HTMLElement | null

  constructor(props: Readonly<{}>) {
    super(props)
  }

  public componentDidMount() {
    const codemirror = document.querySelector('.codemirror');

    window.console.log('CodeMirror', Marked);

    const myCodeMirror = CodeMirror(codemirror as HTMLElement, {
      mode: 'javascript',
      value: '',
    });

    myCodeMirror.on('change', (instance, changeObj) => {
      window.console.log(instance, changeObj)
      window.console.log(instance.getValue())
      const value = instance.getValue()
      // const content = document.querySelector('.content');

      if (this.test != null) {
        this.test.innerHTML = Marked(value);
      }

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
        <div className="content" ref={(com) => {this.test = com} } />
      </div>
    );
  }
}

export default App;
