import * as Marked from 'marked'
import * as React from 'react';

import CodeEditor from '../CodeEditor';
// import Preview from './Preview';
import Tools from './Tools';

import './main.scss';


import 'codemirror/lib/codemirror.css'

interface IStete {
  previewContent: string
}

class Markdown extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      previewContent: ''
    }
  }

  public render() {
    return (
      <div className="markdowm">
        <Tools />
        <div className="md-content">
          <CodeEditor
            codeEditorOnChange={ this.updateEditorValue }
          />
          <span className="dividing" />
          <div className="preview">
            <div dangerouslySetInnerHTML={{__html: this.state.previewContent}} />
          </div>
          {/* <Preview /> */}
        </div>
      </div>
    );
  }


  private updateEditorValue = (value: any, cm: any) => {
    window.console.log('value and cm: ', value, cm)
    this.setState({
      previewContent: Marked(value),
    })
  }
}

export default Markdown;
