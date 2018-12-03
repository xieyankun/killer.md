import * as Marked from 'marked'
import * as React from 'react';

import CodeEditor from '../CodeEditor';
// import Preview from './Preview';
import Tools from './Tools';

import 'codemirror/lib/codemirror.css'
import 'github-markdown-css'
import 'prettify'

import './main.scss';

// import 'codemirror/addon/dialog/dialog.css'
// import 'codemirror/addon/display/fullscreen'
// import 'codemirror/addon/display/fullscreen.css'
// import 'codemirror/addon/edit/closetag'
// import 'codemirror/addon/search/jump-to-line'
// import 'codemirror/addon/search/search'

// import 'codemirror/lib/codemirror.css'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/solarized.css'

// import 'codemirror/mode/css/css'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/jsx/jsx'
// import 'codemirror/mode/markdown/markdown'
// import 'codemirror/mode/sass/sass'
// import 'codemirror/mode/xml/xml'

interface IStete {
  previewContent: string
}

class Markdown extends React.Component<{}, IStete> {
  private mdOptions: object;
  private editor: HTMLElement | any

  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      previewContent: ''
    }

    this.mdOptions = {
      // 是否自动闭合标签，基于 codemirror/addon/edit/closetag
      autoCloseTags: true,
      lineNumbers: true,
      lineWrapping: true,
      // mode: 'markdown',
			readOnly: false,
      tabSize: 2,
      theme: 'solarized',
    }
  }

  public componentDidMount() {
    const code = '# 在此处输入标题';
    this.updateEditorValue(code, {});
  }

  public render() {
    return (
      <div className="markdowm">
        <Tools />
        <div className="md-content">
          <CodeEditor
            options={this.mdOptions}
            codeEditorOnChange={ this.updateEditorValue }
          />
          <span className="dividing" />
          <div className="preview" ref={(com) => {this.editor = com} } >
            {/* <div dangerouslySetInnerHTML={{__html: this.state.previewContent}} /> */}
          </div>
          {/* <Preview /> */}
        </div>
      </div>
    );
  }


  private updateEditorValue = (value: any, cm: any) => {
    window.console.log('value and cm: ', value, cm)
    this.editor.innerHTML = Marked(value);
    // this.setState({
    //   previewContent: Marked(value),
    // })
  }
}

export default Markdown;
