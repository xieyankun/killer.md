import * as React from 'react';

import CodeEditor from '../CodeEditor';
import Preview from './Preview';
import Tools from './Tools';

import './main.scss';
// import codemirror from 'codemirror'
// import PropTypes from 'prop-types'
// import isEqual from 'lodash.isequal'
// import debounce from 'lodash.debounce'


import 'codemirror/lib/codemirror.css'

interface IStete {
  test: string,
}

class Markdown extends React.Component<{}, IStete> {
  constructor(props: Readonly<{}>) {
    super(props)
  }

  public render() {
    return (
      <div className="markdowm">
        <Tools />
        <div className="md-content">
          <CodeEditor />
          <Preview />
        </div>
      </div>
    );
  }
}

export default Markdown;
