/* tslint-disable */
import * as CodeMirror from 'codemirror';
import * as Marked from 'marked'
import * as React from 'react';

import 'codemirror/lib/codemirror.css'

import './main.scss'

interface IStete {
  test: string,
}

class KillerMd extends React.Component<{}, IStete> {

  private test: HTMLElement | null

  constructor(props: Readonly<{}>) {
    super(props)
  }

  public componentDidMount() {
    const codemirror = document.querySelector('.codemirror');

    window.console.log('CodeMirror', Marked);

    const myCodeMirror = CodeMirror(codemirror as HTMLElement, {
      lineNumbers: true,
      lineWrapping: true,   // 代码折叠
      tabSize: 4,
      value: ''
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
      <div className="md">
        <div className="tool">
          <ul>
            <li>H1</li>
          </ul>
        </div>

        <div className="md-editor">
          <div className="codemirror" />
          <div className="content" ref={(com) => {this.test = com} } />
        </div>
      </div>
    );
  }
}

export default KillerMd;
