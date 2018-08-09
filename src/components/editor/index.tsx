/* tslint-disable */
import * as CodeMirror from 'codemirror';
import * as Marked from 'marked'
import * as React from 'react';

import 'codemirror/lib/codemirror.css'
import 'github-markdown-css'

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
    const initCodeValue = '# 在此处输入标题\n\n标签（空格分隔）： `未分类`\n\n---\n\n在此输入正文';

    window.console.log('CodeMirror', Marked);

    const myCodeMirror = CodeMirror(codemirror as HTMLElement, {
      lineWrapping: true,   // 代码折叠
      tabSize: 2,
      value: initCodeValue
    });
    
    if (this.test != null) {
      this.test.innerHTML = Marked(initCodeValue);
    }

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
          <div className="content markdown-body" ref={(com) => {this.test = com} } />
        </div>
      </div>
    );
  }
}

export default KillerMd;
