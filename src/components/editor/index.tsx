/* tslint-disable */
import * as CodeMirror from 'codemirror';
import * as Marked from 'marked'
import * as React from 'react';

import Tools from './Tools';

import 'prettify'

import 'codemirror/lib/codemirror.css'
import 'github-markdown-css'

import './main.scss'

interface IStete {
  previewNode: string,
  previewContent: string,
}

let CodeEditorHandler = null;

class KillerMd extends React.Component<{}, IStete> {
  private codeEditor: any;
  private editorNode: any;
  // private previewNode: HTMLElement | null;

  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      previewContent: '',
      previewNode: '',
    }
  }

  public componentDidMount() {
    // const codemirror = document.querySelector('.codemirror');

    const initCodeValue = '# 在此处输入标题\n\n> 标签: `我的笔记` `标签`\n\n---\n\n在此输入笔记的正文内容\n\n```\nHello world\n```';

    this.setState({
      previewContent: Marked(initCodeValue),
    })
    
    this.codeEditor = CodeMirror(this.editorNode, {
      lineWrapping: true,   // 代码折叠
      tabSize: 2,
      value: initCodeValue
    })
      
    CodeEditorHandler = this.codeEditor;

    CodeEditorHandler.on('change', this.codeEditorValueChanged)

  }

  public render() {
    return (
      <div className="markdowm">
        <Tools />

        <div className="md-content">
          <div
            className="codemirror"
            ref={ ref => this.editorNode = ref }
          />  

          <span className="dividing" />

          <div
            className="content markdown-body"
            dangerouslySetInnerHTML={{__html: this.state.previewContent}}
            // ref={(ref) => {this.previewNode = ref} }
          />
          {/* <Preview /> */}

        </div>
      </div>
    );
  }

  public codeEditorValueChanged = (instance:any, changeObj:any) => {
    window.console.log(instance, changeObj)
    window.console.log(instance.getValue())

    const value = instance.getValue()
    this.setState({
      previewContent: Marked(value),
    })

  }
}

export default KillerMd;
