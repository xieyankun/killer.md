import * as React from 'react';

import * as CodeMirror from 'codemirror';

interface IProps {
  codeEditorOnChange: (value: any, cm: any) => void;
}


interface IStete {
  test: string,
}

let CodeEditorHandler = null

class CodeEditor extends React.Component<IProps, IStete> {
  private textareaNode: any;
  private codeEditor: any;

  constructor(props: Readonly<IProps>) {
    super(props)
  }

  public componentDidMount () {
		this.codeEditor = CodeMirror.fromTextArea(this.textareaNode,  {
      lineWrapping: true,
      tabSize: 2,
      value: '# 在此处输入标题\n\n标签（空格分隔）： `未分类`\n\n---\n\n在此输入正文'
    })

    CodeEditorHandler = this.codeEditor;

    CodeEditorHandler.on('change', this.codeEditorValueChanged);
    CodeEditorHandler.on('cursorActivity', this.cursorActivity)
		CodeEditorHandler.on('focus', this.focusChanged)
		CodeEditorHandler.on('blur', this.focusChanged)
    CodeEditorHandler.on('scroll', this.scrollChanged)

	}

  public render() {
    return (
      <div className="code-editor">
        <textarea
          ref={ref => this.textareaNode = ref}
          defaultValue='标签（空格分隔）： 未分类'
        />
      </div>
    );
  }


  public codeEditorValueChanged = (instance: any, changeObj: any) => {
    window.console.log('codeEditorValueChanged', instance, changeObj);
    this.props.codeEditorOnChange(instance.getValue(), changeObj)
  }

  private cursorActivity = (cm: any) => {
    window.console.log('cursorActivity', cm);
  }

  private focusChanged = (cm: any) => {
    window.console.log('focusChanged', cm);
  }

  private scrollChanged = (cm: any) => {
    window.console.log('scrollChanged', cm.getScrollInfo());
  }

}

export default CodeEditor;
