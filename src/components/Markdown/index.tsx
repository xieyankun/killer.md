import * as React from 'react';

import Tools from './Tools';

import './main.scss';

import CodeEditor from '../CodeEditor';

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
      <div className="App">
        <Tools />
        <CodeEditor />
      </div>
    );
  }
}

export default Markdown;
