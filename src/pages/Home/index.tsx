
import * as React from 'react';
import Editor from '../../components/Editor'

import 'codemirror/lib/codemirror.css'

interface IStete {
  test: string,
}

class App extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  // public componentDidMount() {
  //   const codemirror = document.querySelector('.codemirror');

  //   window.console.log('CodeMirror', Marked);

  //   const myCodeMirror = CodeMirror(codemirror as HTMLElement, {
  //     mode: 'javascript',
  //     value: '',
  //   });

  //   myCodeMirror.on('change', (instance, changeObj) => {
  //     window.console.log(instance, changeObj)
  //     window.console.log(instance.getValue())
  //     const value = instance.getValue()
  //     // const content = document.querySelector('.content');

  //     if (this.test != null) {
  //       this.test.innerHTML = Marked(value);
  //     }

  //   })
  // }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Editor />
        {/* <div className="md">
          <div className="codemirror" />
          <div className="content" ref={(com) => {this.test = com} } />
        </div> */}
      </div>
    );
  }
}

export default App;
